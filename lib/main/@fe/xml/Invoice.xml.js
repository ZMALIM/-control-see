"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceXML = void 0;
const structures_1 = require("@fe/structures");
const models_1 = require("@fe/common/models");
const standard_1 = require("@fe/standard");
const moment = require("moment");
class InvoiceXML {
    generate(document) {
        const invoice = new standard_1.Invoice();
        document = new models_1.CPE(document);
        invoice.ublExtensions = new structures_1.UblExtensions();
        invoice.ublVersionID = document.ublVersion;
        invoice.customizationID = '2.0';
        invoice.profileID = new structures_1.ProfileID({
            value: document.tipoOperacion
        });
        invoice.id = document.comprobante;
        invoice.issueDate = moment(document.fechaEmision).format('YYYY-MM-DD');
        if (document.fechaVencimiento) {
            invoice.dueDate = moment(document.fechaVencimiento).format('YYYY-MM-DD');
        }
        invoice.invoiceTypeCode = new structures_1.InvoiceTypeCode({
            listAgencyName: 'PE:SUNAT',
            listName: 'SUNAT:Identificador de Tipo de Documento',
            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
            value: document.tipoDocumento,
        });
        invoice.note = new structures_1.Note({
            languageLocaleID: '1000',
            value: document.montoLetras.toUpperCase(),
        });
        invoice.documentCurrencyCode = new structures_1.DocumentCurrencyCode({
            listID: 'ISO 4217 Alpha',
            listName: 'Currency',
            listAgencyName: 'United Nations Economic Commission for Europe',
            value: document.moneda.codigo,
        });
        document.relacionados.forEach(relacionado => {
            invoice.despatchDocumentReferences.push(new structures_1.InvoiceDocumentReference({
                id: relacionado.nroDocumento,
                documentTypeCode: new structures_1.DocumentTypeCode({
                    listAgencyName: '"PE:SUNAT',
                    listName: 'SUNAT:Identificador de guía relacionada',
                    listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
                    value: relacionado.tipoDocumento
                }),
            }));
        });
        if (document.otrosDocumentosRelacionados.length > 0) {
            document.otrosDocumentosRelacionados.forEach((relacionado) => {
                invoice.additionalDocumentReferences.push(new structures_1.InvoiceDocumentReference({
                    id: relacionado.nroDocumento,
                    documentTypeCode: new structures_1.DocumentTypeCode({
                        listName: 'SUNAT: Identificador de documento relacionado',
                        listAgencyName: 'PE:SUNAT',
                        listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12',
                        value: relacionado.tipoDocumento,
                    }),
                }));
            });
        }
        invoice.signature = new structures_1.SignatureCac({
            id: document.empresa.nroDocumento,
            signatoryParty: new structures_1.SignatoryParty({
                partyIdentification: new structures_1.PartyIdentification({
                    id: new structures_1.PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new structures_1.PartyName({
                    name: document.empresa.razonSocial,
                }),
            }),
            digitalSignatureAttachment: new structures_1.DigitalSignatureAttachment({
                externalReference: new structures_1.ExternalReference({
                    uri: document.empresa.nroDocumento,
                }),
            }),
        });
        invoice.accountingSupplierParty = new structures_1.AccountingSupplierParty({
            party: new structures_1.Party({
                partyIdentification: new structures_1.PartyIdentification({
                    id: new structures_1.PartyIdentificationId({
                        schemeID: document.empresa.tipoDocumento,
                        schemeName: 'Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new structures_1.PartyName({
                    name: document.empresa.nombreComercial,
                }),
                partyTaxScheme: new structures_1.PartyTaxScheme({
                    registrationName: document.empresa.razonSocial,
                    companyID: new structures_1.CompanyID({
                        schemeID: document.empresa.tipoDocumento,
                        value: document.empresa.nroDocumento
                    }),
                    registrationAddress: new structures_1.RegistrationAddress({
                        addressTypeCode: new structures_1.AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.empresa.ubigeo,
                        })
                    }),
                }),
            }),
        });
        invoice.accountingCustomerParty = new structures_1.AccountingSupplierParty({
            party: new structures_1.Party({
                partyTaxScheme: new structures_1.PartyTaxScheme({
                    registrationName: document.cliente.razonSocial,
                    companyID: new structures_1.CompanyID({
                        schemeID: document.cliente.tipoDocumento,
                        value: document.cliente.nroDocumento
                    }),
                    registrationAddress: new structures_1.RegistrationAddress({
                        addressTypeCode: new structures_1.AddressTypeCode({
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
            invoice.allowanceCharge = new structures_1.AllowanceCharge({
                chargeIndicator: 'false',
                allowanceChargeReasonCode: new structures_1.AllowanceChargeReasonCode({
                    value: '02'
                }),
                multiplierFactorNumeric: document.descuentoGlobal.toFixed(2),
                amount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: totalDcto.toFixed(2)
                }),
                baseAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: totalDcto.toFixed(2)
                })
            });
        }
        invoice.taxTotals.push(new structures_1.TaxTotal({
            taxAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalIgv.toFixed(2),
            }),
            taxSubtotal: new structures_1.TaxSubtotal({
                taxableAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: document.totalVenta.toFixed(2),
                }),
                taxAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: document.totalIgv.toFixed(2),
                }),
                taxCategory: new structures_1.TaxCategory({
                    id: new structures_1.TaxCategoryId({
                        value: 'O'
                    }),
                    taxScheme: new structures_1.TaxScheme({
                        id: new structures_1.TaxSchemeId({
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
        invoice.legalMonetaryTotal = new structures_1.LegalMonetaryTotal({
            lineExtensionAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
            taxInclusiveAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
            allowanceTotalAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.descuentoGlobal.toFixed(2)
            }),
            chargeTotalAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalOtrosCargos.toFixed(2)
            }),
            payableAmount: new structures_1.PayableAmount({
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
            const line = new structures_1.InvoiceLine({
                id: detalleCPE.id.toString(),
                invoicedQuantity: new structures_1.InvoicedQuantity({
                    unitCode: detalleCPE.unidadMedida,
                    unitCodeListID: 'UN/ECE rec 20',
                    unitCodeListAgencyName: 'United Nations Economic Commission for Europe',
                    value: detalleCPE.cantidad,
                }),
                lineExtensionAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: detalleCPE.totalVenta.toFixed(2),
                }),
                pricingReference: new structures_1.PricingReference({
                    alternativeConditionPrices: [new structures_1.AlternativeConditionPrice({
                            priceAmount: new structures_1.PayableAmount({
                                currencyID: document.moneda.codigo,
                                value: detalleCPE.precioUnitario.toFixed(2),
                            }),
                            priceTypeCode: new structures_1.PriceTypeCode({
                                listAgencyName: 'PE:SUNAT',
                                listName: 'SUNAT:Indicador de Tipo de Precio',
                                listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16',
                                value: '01',
                            }),
                        })],
                }),
                item: new structures_1.Item({
                    description: detalleCPE.descripcion,
                }),
                price: new structures_1.Price({
                    priceAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.precioUnitario.toFixed(2),
                    }),
                }),
            });
            line.taxTotals.push(new structures_1.TaxTotal({
                taxAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: detalleCPE.impuesto.toFixed(2),
                }),
                taxSubtotal: new structures_1.TaxSubtotal({
                    taxableAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.totalVenta.toFixed(2),
                    }),
                    taxAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.impuesto.toFixed(2),
                    }),
                    taxCategory: new structures_1.TaxCategory({
                        id: new structures_1.TaxCategoryId({
                            value: document.catImpuesto
                        }),
                        percent: document.pjeImpuesto.toFixed(2),
                        taxExemptionReasonCode: new structures_1.TaxExemptionReasonCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'SUNAT:Codigo de Tipo de Afectacion del IGV',
                            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07',
                            value: detalleCPE.tipoImpuesto,
                        }),
                        taxScheme: new structures_1.TaxScheme({
                            id: new structures_1.TaxSchemeId({
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
exports.InvoiceXML = InvoiceXML;
//# sourceMappingURL=Invoice.xml.js.map