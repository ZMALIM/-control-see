import { InvoiceTypeCode, Note, DocumentCurrencyCode, UblExtensions, InvoiceDocumentReference, SignatureCac, SignatoryParty, DigitalSignatureAttachment, PartyIdentification, PartyName, ExternalReference, AccountingSupplierParty, Party, PartyLegalEntity, PartyIdentificationId, RegistrationAddress, TaxTotal, PayableAmount, TaxSubtotal, TaxCategory, TaxSchemeId, TaxScheme, LegalMonetaryTotal, InvoiceLine, InvoicedQuantity, PricingReference, AlternativeConditionPrice, Item, Price, Country, TaxExemptionReasonCode, PriceTypeCode, DocumentTypeCode, AddressTypeCode, AllowanceCharge, AllowanceChargeReasonCode, PartyTaxScheme, CompanyID, TaxCategoryId, ProfileID, AddressLine, IdentificationCode, } from '@fe/structures';
import { CPE } from '@fe/common/models';
import { Invoice } from '@fe/standard';
import * as moment from 'moment';
export class BoletaXML {
    generate(document) {
        const invoice = new Invoice();
        document = new CPE(document);
        invoice.ublExtensions = new UblExtensions();
        invoice.ublVersionID = document.ublVersion;
        invoice.customizationID = '2.0';
        invoice.profileID = new ProfileID({
            schemeName: 'Tipo de Operacion',
            schemeAgencyName: 'PE:SUNAT',
            schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo51',
            value: document.tipoOperacion
        });
        invoice.id = document.comprobante;
        invoice.issueDate = moment(document.fechaEmision).format('YYYY-MM-DD');
        invoice.issueTime = '00:00:00';
        if (document.fechaVencimiento) {
            invoice.dueDate = moment(document.fechaVencimiento).format('YYYY-MM-DD');
        }
        invoice.invoiceTypeCode = new InvoiceTypeCode({
            listName: 'Tipo de Documento',
            listAgencyName: 'PE:SUNAT',
            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
            listID: document.tipoOperacion,
            name: 'Tipo de Operacion',
            listSchemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo51',
            value: document.tipoDocumento,
        });
        invoice.note = new Note({
            languageLocaleID: '1000',
            value: document.montoLetras.toUpperCase(),
        });
        invoice.documentCurrencyCode = new DocumentCurrencyCode({
            listID: 'ISO 4217 Alpha',
            listName: 'Currency',
            listAgencyName: 'United Nations Economic Commission for Europe',
            value: document.moneda.codigo,
        });
        invoice.lineCountNumeric = '1';
        if (document.relacionados.length > 0) {
            document.relacionados.forEach(relacionado => {
                invoice.despatchDocumentReferences.push(new InvoiceDocumentReference({
                    id: relacionado.nroDocumento,
                    documentTypeCode: new DocumentTypeCode({
                        listAgencyName: 'PE:SUNAT',
                        listName: 'Tipo de Documento',
                        listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
                        value: relacionado.tipoDocumento
                    }),
                }));
            });
        }
        if (document.otrosDocumentosRelacionados.length > 0) {
            document.otrosDocumentosRelacionados.forEach((relacionado) => {
                invoice.additionalDocumentReferences.push(new InvoiceDocumentReference({
                    id: relacionado.nroDocumento,
                    documentTypeCode: new DocumentTypeCode({
                        listName: 'Documento Relacionado',
                        listAgencyName: 'PE:SUNAT',
                        listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12',
                        value: relacionado.tipoDocumento,
                    }),
                }));
            });
        }
        invoice.signature = new SignatureCac({
            id: document.comprobante,
            signatoryParty: new SignatoryParty({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new PartyName({
                    name: document.empresa.razonSocial,
                }),
            }),
            digitalSignatureAttachment: new DigitalSignatureAttachment({
                externalReference: new ExternalReference({
                    uri: `#SignatureSP`,
                }),
            }),
        });
        invoice.accountingSupplierParty = new AccountingSupplierParty({
            party: new Party({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: document.empresa.tipoDocumento,
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new PartyName({
                    name: document.empresa.nombreComercial,
                }),
                partyTaxScheme: new PartyTaxScheme({
                    registrationName: document.empresa.razonSocial,
                    companyID: new CompanyID({
                        schemeID: document.empresa.tipoDocumento,
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento
                    }),
                    taxScheme: new TaxScheme({
                        id: new TaxSchemeId({
                            schemeID: document.empresa.tipoDocumento,
                            schemeName: 'Documento de Identidad',
                            schemeAgencyName: 'PE:SUNAT',
                            schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                            value: Number(document.empresa.nroDocumento)
                        })
                    }),
                }),
                partyLegalEntity: new PartyLegalEntity({
                    registrationName: document.empresa.razonSocial,
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.empresa.ubigeo,
                        }),
                        cityName: document.empresa.departamento,
                        countrySubentity: document.empresa.provincia,
                        district: document.empresa.distrito,
                        addressLine: new AddressLine({
                            line: document.empresa.direccion
                        }),
                        country: new Country({
                            identificationCode: new IdentificationCode({
                                listID: 'ISO 3166-1',
                                listAgencyName: 'United Nations Economic Commission for Europe',
                                listName: 'Country',
                                value: 'PE'
                            }),
                        }),
                    }),
                }),
            }),
        });
        invoice.accountingCustomerParty = new AccountingSupplierParty({
            party: new Party({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: document.cliente.tipoDocumento,
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.cliente.nroDocumento,
                    }),
                }),
                partyName: new PartyName({
                    name: document.cliente.razonSocial,
                }),
                partyTaxScheme: new PartyTaxScheme({
                    registrationName: document.cliente.razonSocial,
                    companyID: new CompanyID({
                        schemeID: document.cliente.tipoDocumento,
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.cliente.nroDocumento
                    }),
                    taxScheme: new TaxScheme({
                        id: new TaxSchemeId({
                            schemeID: document.cliente.tipoDocumento,
                            schemeName: 'Documento de Identidad',
                            schemeAgencyName: 'PE:SUNAT',
                            schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                            value: Number(document.cliente.nroDocumento)
                        })
                    }),
                }),
                partyLegalEntity: new PartyLegalEntity({
                    registrationName: document.cliente.razonSocial,
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.cliente.ubigeo,
                        }),
                        cityName: document.cliente.departamento,
                        countrySubentity: document.cliente.provincia,
                        district: document.cliente.distrito,
                        addressLine: new AddressLine({
                            line: document.cliente.direccion
                        }),
                        country: new Country({
                            identificationCode: new IdentificationCode({
                                listID: 'ISO 3166-1',
                                listAgencyName: 'United Nations Economic Commission for Europe',
                                listName: 'Country',
                                value: 'PE'
                            })
                        })
                    }),
                }),
            }),
        });
        let dctosPorItem = document.items.reduce((count, item) => {
            count += item.descuento;
            return count;
        }, 0);
        if (document.descuentoGlobal >= 0 || dctosPorItem >= 0) {
            const totalDcto = document.descuentoGlobal + dctosPorItem;
            invoice.allowanceCharge = new AllowanceCharge({
                chargeIndicator: 'false',
                allowanceChargeReasonCode: new AllowanceChargeReasonCode({
                    value: '02'
                }),
                multiplierFactorNumeric: document.descuentoGlobal.toFixed(2),
                amount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: totalDcto.toFixed(2)
                }),
                baseAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: totalDcto.toFixed(2)
                })
            });
        }
        invoice.taxTotals.push(new TaxTotal({
            taxAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalIgv.toFixed(2),
            }),
            taxSubtotal: new TaxSubtotal({
                taxableAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: document.totalVenta.toFixed(2),
                }),
                taxAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: document.totalIgv.toFixed(2),
                }),
                taxCategory: new TaxCategory({
                    id: new TaxCategoryId({
                        value: 'O'
                    }),
                    taxScheme: new TaxScheme({
                        id: new TaxSchemeId({
                            schemeID: 'UN/ECE 5153',
                            schemeAgencyID: '6',
                            value: 9998,
                        }),
                        name: 'INA',
                        taxTypeCode: 'FRE',
                    }),
                }),
            }),
        }));
        invoice.legalMonetaryTotal = new LegalMonetaryTotal({
            lineExtensionAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
            taxInclusiveAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
            allowanceTotalAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.descuentoGlobal.toFixed(2)
            }),
            chargeTotalAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalOtrosCargos.toFixed(2)
            }),
            payableAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
        });
        document.items.forEach((detalleCPE) => {
            const line = new InvoiceLine({
                id: detalleCPE.id.toString(),
                invoicedQuantity: new InvoicedQuantity({
                    unitCode: detalleCPE.unidadMedida,
                    unitCodeListID: 'UN/ECE rec 20',
                    unitCodeListAgencyName: 'United Nations Economic Commission for Europe',
                    value: detalleCPE.cantidad,
                }),
                lineExtensionAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: detalleCPE.totalVenta.toFixed(2),
                }),
                pricingReference: new PricingReference({
                    alternativeConditionPrices: [new AlternativeConditionPrice({
                            priceAmount: new PayableAmount({
                                currencyID: document.moneda.codigo,
                                value: detalleCPE.precioUnitario.toFixed(2),
                            }),
                            priceTypeCode: new PriceTypeCode({
                                listAgencyName: 'PE:SUNAT',
                                listName: 'Tipo de Precio',
                                listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16',
                                value: '01',
                            }),
                        })],
                }),
                item: new Item({
                    description: detalleCPE.descripcion,
                }),
                price: new Price({
                    priceAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.precioUnitario.toFixed(2),
                    }),
                }),
            });
            line.taxTotals.push(new TaxTotal({
                taxAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: detalleCPE.impuesto.toFixed(2),
                }),
                taxSubtotal: new TaxSubtotal({
                    taxableAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.totalVenta.toFixed(2),
                    }),
                    taxAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.impuesto.toFixed(2),
                    }),
                    taxCategory: new TaxCategory({
                        id: new TaxCategoryId({
                            value: document.catImpuesto
                        }),
                        percent: document.pjeImpuesto.toFixed(2),
                        taxExemptionReasonCode: new TaxExemptionReasonCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Afectacion del IGV',
                            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07',
                            value: detalleCPE.tipoImpuesto,
                        }),
                        taxScheme: new TaxScheme({
                            id: new TaxSchemeId({
                                schemeID: 'UN/ECE 5153',
                                schemeAgencyID: '6',
                                value: 9998,
                            }),
                            name: 'INA',
                            taxTypeCode: 'FRE',
                        }),
                    }),
                }),
            }));
            invoice.invoiceLine.push(line);
        });
        return invoice;
    }
}
//# sourceMappingURL=boleta.xml.js.map