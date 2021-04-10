"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditNoteXML = void 0;
const structures_1 = require("@fe/structures");
const standard_1 = require("@fe/standard");
class CreditNoteXML {
    generate(document) {
        const creditNote = new standard_1.CreditNote();
        creditNote.ublVersionID = '2.1';
        creditNote.customizationID = '2.0';
        creditNote.id = 'F001-00000025';
        creditNote.issueDate = '2019-07-07';
        creditNote.documentCurrencyCode = document.moneda.codigo;
        creditNote.ublExtensions = new structures_1.UblExtensions();
        document.discrepancias.forEach((discrepancia) => {
            creditNote.discrepancyResponses.push(new structures_1.DiscrepancyResponse({
                referenceID: discrepancia.nroReferencia,
                responseCode: discrepancia.tipo,
                description: discrepancia.descripcion,
            }));
        });
        document.relacionados.forEach((relacionado) => {
            creditNote.billingReferences.push(new structures_1.BillingReference(new structures_1.InvoiceDocumentReference({
                id: relacionado.nroDocumento,
                documentTypeCode: new structures_1.DocumentTypeCode({
                    value: relacionado.tipoDocumento,
                }),
            })));
        });
        creditNote.signature = new structures_1.SignatureCac({
            id: document.empresa.nroDocumento,
            signatoryParty: new structures_1.SignatoryParty({
                partyIdentification: new structures_1.PartyIdentification({
                    id: new structures_1.PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
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
                    uri: `#SignatureSP`,
                }),
            }),
        });
        creditNote.accountingSupplierParty = new structures_1.AccountingSupplierParty({
            customerAssignedAccountID: document.empresa.nroDocumento,
            additionalAccountID: document.empresa.tipoDocumento,
            party: new structures_1.Party({
                partyIdentification: new structures_1.PartyIdentification({
                    id: new structures_1.PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new structures_1.PartyName({
                    name: document.empresa.nombreComercial,
                }),
                postalAddress: new structures_1.PostalAddress({
                    id: document.empresa.ubigeo,
                    streetName: document.empresa.direccion,
                    citySubdivisionName: document.empresa.urbanizacion,
                    cityName: document.empresa.provincia,
                    district: document.empresa.distrito,
                }),
                partyLegalEntity: new structures_1.PartyLegalEntity({
                    registrationName: document.empresa.razonSocial,
                    registrationAddress: new structures_1.RegistrationAddress({
                        addressTypeCode: new structures_1.AddressTypeCode({
                            value: '0000',
                        }),
                    }),
                }),
            }),
        });
        creditNote.accountingCustomerParty = new structures_1.AccountingSupplierParty({
            customerAssignedAccountID: document.cliente.nroDocumento,
            additionalAccountID: document.cliente.tipoDocumento,
            party: new structures_1.Party({
                partyName: new structures_1.PartyName({
                    name: document.cliente.nombreComercial,
                }),
                postalAddress: new structures_1.PostalAddress({
                    id: document.cliente.ubigeo,
                    streetName: document.cliente.direccion,
                    citySubdivisionName: document.cliente.urbanizacion,
                    cityName: document.cliente.provincia,
                    district: document.cliente.distrito,
                }),
                partyIdentification: new structures_1.PartyIdentification({
                    id: new structures_1.PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.cliente.nroDocumento,
                    }),
                }),
                partyLegalEntity: new structures_1.PartyLegalEntity({
                    registrationName: document.cliente.razonSocial,
                }),
            }),
        });
        creditNote.taxTotals.push(new structures_1.TaxTotal({
            taxAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: '26.69',
            }),
            taxSubtotal: new structures_1.TaxSubtotal({
                taxableAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '148.31',
                }),
                taxAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '26.69',
                }),
                taxCategory: new structures_1.TaxCategory({
                    taxScheme: new structures_1.TaxScheme({
                        id: new structures_1.TaxSchemeId({
                            schemeID: 'UN/ECE 5153',
                            schemeAgencyID: '6',
                            value: 1000,
                        }),
                        name: 'IGV',
                        taxTypeCode: 'VAT',
                    }),
                }),
            }),
        }));
        creditNote.legalMonetaryTotal = new structures_1.LegalMonetaryTotal({
            lineExtensionAmount: new structures_1.PayableAmount({
                currencyID: 'PEN',
                value: '148.31',
            }),
            taxInclusiveAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: '175.01',
            }),
            payableAmount: new structures_1.PayableAmount({
                currencyID: document.moneda.codigo,
                value: '175.01',
            }),
        });
        document.items.forEach((detalleCPE) => {
            const line = new structures_1.InvoiceLine({
                id: detalleCPE.id.toString(),
                creditedQuantity: new structures_1.InvoicedQuantity({
                    unitCode: detalleCPE.unidadMedida,
                    value: detalleCPE.cantidad,
                }),
                lineExtensionAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '84.75',
                }),
                pricingReference: new structures_1.PricingReference({
                    alternativeConditionPrices: [new structures_1.AlternativeConditionPrice({
                            priceAmount: new structures_1.PayableAmount({
                                currencyID: document.moneda.codigo,
                                value: '50.01',
                            }),
                            priceTypeCode: new structures_1.PriceTypeCode({
                                value: detalleCPE.tipoPrecio,
                            }),
                        })],
                }),
                item: new structures_1.Item({
                    description: detalleCPE.descripcion,
                    sellersItemIdentification: new structures_1.SellersItemIdentification({
                        id: detalleCPE.codigoItem,
                    }),
                }),
                price: new structures_1.Price({
                    priceAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '42.37',
                    }),
                }),
            });
            line.taxTotals.push(new structures_1.TaxTotal({
                taxAmount: new structures_1.PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '15.25',
                }),
                taxSubtotal: new structures_1.TaxSubtotal({
                    taxableAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '84.75',
                    }),
                    taxAmount: new structures_1.PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '15.75',
                    }),
                    taxCategory: new structures_1.TaxCategory({
                        percent: '18.00',
                        taxExemptionReasonCode: new structures_1.TaxExemptionReasonCode({
                            value: detalleCPE.tipoImpuesto,
                        }),
                        taxScheme: new structures_1.TaxScheme({
                            id: new structures_1.TaxSchemeId({
                                schemeID: 'UN/ECE 5153',
                                schemeAgencyID: '6',
                                value: 1000,
                            }),
                            name: 'IGV',
                            taxTypeCode: 'VAT',
                        }),
                    }),
                }),
            }));
            creditNote.creditNoteLines.push(line);
        });
        return creditNote;
    }
}
exports.CreditNoteXML = CreditNoteXML;
//# sourceMappingURL=credit-note.xml.js.map