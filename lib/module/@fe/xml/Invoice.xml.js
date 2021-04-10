import { InvoiceTypeCode, Note, DocumentCurrencyCode, UblExtensions, InvoiceDocumentReference, SignatureCac, SignatoryParty, DigitalSignatureAttachment, PartyIdentification, PartyName, ExternalReference, AccountingSupplierParty, Party, PartyIdentificationId, RegistrationAddress, TaxTotal, PayableAmount, TaxSubtotal, TaxCategory, TaxSchemeId, TaxScheme, LegalMonetaryTotal, InvoiceLine, InvoicedQuantity, PricingReference, AlternativeConditionPrice, Item, Price, TaxExemptionReasonCode, PriceTypeCode, DocumentTypeCode, AddressTypeCode, AllowanceCharge, AllowanceChargeReasonCode, PartyTaxScheme, CompanyID, TaxCategoryId, ProfileID, } from '@fe/structures';
import { CPE } from '@fe/common/models';
import { Invoice } from '@fe/standard';
import * as moment from 'moment';
export class InvoiceXML {
    generate(document) {
        const invoice = new Invoice();
        document = new CPE(document);
        invoice.ublExtensions = new UblExtensions();
        invoice.ublVersionID = document.ublVersion;
        invoice.customizationID = '2.0';
        invoice.profileID = new ProfileID({
            value: document.tipoOperacion
        });
        invoice.id = document.comprobante;
        invoice.issueDate = moment(document.fechaEmision).format('YYYY-MM-DD');
        if (document.fechaVencimiento) {
            invoice.dueDate = moment(document.fechaVencimiento).format('YYYY-MM-DD');
        }
        invoice.invoiceTypeCode = new InvoiceTypeCode({
            listAgencyName: 'PE:SUNAT',
            listName: 'SUNAT:Identificador de Tipo de Documento',
            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
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
        document.relacionados.forEach(relacionado => {
            invoice.despatchDocumentReferences.push(new InvoiceDocumentReference({
                id: relacionado.nroDocumento,
                documentTypeCode: new DocumentTypeCode({
                    listAgencyName: '"PE:SUNAT',
                    listName: 'SUNAT:Identificador de guía relacionada',
                    listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
                    value: relacionado.tipoDocumento
                }),
            }));
        });
        if (document.otrosDocumentosRelacionados.length > 0) {
            document.otrosDocumentosRelacionados.forEach((relacionado) => {
                invoice.additionalDocumentReferences.push(new InvoiceDocumentReference({
                    id: relacionado.nroDocumento,
                    documentTypeCode: new DocumentTypeCode({
                        listName: 'SUNAT: Identificador de documento relacionado',
                        listAgencyName: 'PE:SUNAT',
                        listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12',
                        value: relacionado.tipoDocumento,
                    }),
                }));
            });
        }
        invoice.signature = new SignatureCac({
            id: document.empresa.nroDocumento,
            signatoryParty: new SignatoryParty({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new PartyName({
                    name: document.empresa.razonSocial,
                }),
            }),
            digitalSignatureAttachment: new DigitalSignatureAttachment({
                externalReference: new ExternalReference({
                    uri: document.empresa.nroDocumento,
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
                        value: document.empresa.nroDocumento
                    }),
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.empresa.ubigeo,
                        })
                    }),
                }),
            }),
        });
        invoice.accountingCustomerParty = new AccountingSupplierParty({
            party: new Party({
                partyTaxScheme: new PartyTaxScheme({
                    registrationName: document.cliente.razonSocial,
                    companyID: new CompanyID({
                        schemeID: document.cliente.tipoDocumento,
                        value: document.cliente.nroDocumento
                    }),
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.cliente.ubigeo,
                        })
                    })
                }),
            }),
        });
        let dctosPorItem = document.items.reduce((count, item) => {
            count += item.descuento;
            return count;
        }, 0);
        if (document.descuentoGlobal > 0 || dctosPorItem > 0) {
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
        if (document.nroOrdenCompra || document.nroOrdenCompra !== '') {
        }
        if (document.placaVehiculo && document.placaVehiculo !== '') {
        }
        if (document.tipoOperacion && document.tipoOperacion !== '' && document.datosGuiaTransportista === null) {
        }
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
                                listName: 'SUNAT:Indicador de Tipo de Precio',
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
                            listName: 'SUNAT:Codigo de Tipo de Afectacion del IGV',
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
//# sourceMappingURL=Invoice.xml.js.map