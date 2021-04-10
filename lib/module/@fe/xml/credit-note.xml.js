import { DiscrepancyResponse, UblExtensions, BillingReference, InvoiceDocumentReference, SignatureCac, SignatoryParty, DigitalSignatureAttachment, PartyIdentification, PartyName, ExternalReference, AccountingSupplierParty, Party, PartyLegalEntity, PartyIdentificationId, RegistrationAddress, TaxTotal, PayableAmount, TaxSubtotal, TaxCategory, TaxSchemeId, TaxScheme, LegalMonetaryTotal, InvoiceLine, InvoicedQuantity, PricingReference, AlternativeConditionPrice, Item, SellersItemIdentification, Price, PostalAddress, TaxExemptionReasonCode, PriceTypeCode, DocumentTypeCode, AddressTypeCode, } from '@fe/structures';
import { CreditNote } from '@fe/standard';
export class CreditNoteXML {
    generate(document) {
        const creditNote = new CreditNote();
        creditNote.ublVersionID = '2.1';
        creditNote.customizationID = '2.0';
        creditNote.id = 'F001-00000025';
        creditNote.issueDate = '2019-07-07';
        creditNote.documentCurrencyCode = document.moneda.codigo;
        creditNote.ublExtensions = new UblExtensions();
        document.discrepancias.forEach((discrepancia) => {
            creditNote.discrepancyResponses.push(new DiscrepancyResponse({
                referenceID: discrepancia.nroReferencia,
                responseCode: discrepancia.tipo,
                description: discrepancia.descripcion,
            }));
        });
        document.relacionados.forEach((relacionado) => {
            creditNote.billingReferences.push(new BillingReference(new InvoiceDocumentReference({
                id: relacionado.nroDocumento,
                documentTypeCode: new DocumentTypeCode({
                    value: relacionado.tipoDocumento,
                }),
            })));
        });
        creditNote.signature = new SignatureCac({
            id: document.empresa.nroDocumento,
            signatoryParty: new SignatoryParty({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
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
                    uri: `#SignatureSP`,
                }),
            }),
        });
        creditNote.accountingSupplierParty = new AccountingSupplierParty({
            customerAssignedAccountID: document.empresa.nroDocumento,
            additionalAccountID: document.empresa.tipoDocumento,
            party: new Party({
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.empresa.nroDocumento,
                    }),
                }),
                partyName: new PartyName({
                    name: document.empresa.nombreComercial,
                }),
                postalAddress: new PostalAddress({
                    id: document.empresa.ubigeo,
                    streetName: document.empresa.direccion,
                    citySubdivisionName: document.empresa.urbanizacion,
                    cityName: document.empresa.provincia,
                    district: document.empresa.distrito,
                }),
                partyLegalEntity: new PartyLegalEntity({
                    registrationName: document.empresa.razonSocial,
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            value: '0000',
                        }),
                    }),
                }),
            }),
        });
        creditNote.accountingCustomerParty = new AccountingSupplierParty({
            customerAssignedAccountID: document.cliente.nroDocumento,
            additionalAccountID: document.cliente.tipoDocumento,
            party: new Party({
                partyName: new PartyName({
                    name: document.cliente.nombreComercial,
                }),
                postalAddress: new PostalAddress({
                    id: document.cliente.ubigeo,
                    streetName: document.cliente.direccion,
                    citySubdivisionName: document.cliente.urbanizacion,
                    cityName: document.cliente.provincia,
                    district: document.cliente.distrito,
                }),
                partyIdentification: new PartyIdentification({
                    id: new PartyIdentificationId({
                        schemeID: '6',
                        schemeName: 'SUNAT:Identificador de Documento de Identidad',
                        schemeAgencyName: 'PE:SUNAT',
                        schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                        value: document.cliente.nroDocumento,
                    }),
                }),
                partyLegalEntity: new PartyLegalEntity({
                    registrationName: document.cliente.razonSocial,
                }),
            }),
        });
        creditNote.taxTotals.push(new TaxTotal({
            taxAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: '26.69',
            }),
            taxSubtotal: new TaxSubtotal({
                taxableAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '148.31',
                }),
                taxAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '26.69',
                }),
                taxCategory: new TaxCategory({
                    taxScheme: new TaxScheme({
                        id: new TaxSchemeId({
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
        creditNote.legalMonetaryTotal = new LegalMonetaryTotal({
            lineExtensionAmount: new PayableAmount({
                currencyID: 'PEN',
                value: '148.31',
            }),
            taxInclusiveAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: '175.01',
            }),
            payableAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: '175.01',
            }),
        });
        document.items.forEach((detalleCPE) => {
            const line = new InvoiceLine({
                id: detalleCPE.id.toString(),
                creditedQuantity: new InvoicedQuantity({
                    unitCode: detalleCPE.unidadMedida,
                    value: detalleCPE.cantidad,
                }),
                lineExtensionAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '84.75',
                }),
                pricingReference: new PricingReference({
                    alternativeConditionPrices: [new AlternativeConditionPrice({
                            priceAmount: new PayableAmount({
                                currencyID: document.moneda.codigo,
                                value: '50.01',
                            }),
                            priceTypeCode: new PriceTypeCode({
                                value: detalleCPE.tipoPrecio,
                            }),
                        })],
                }),
                item: new Item({
                    description: detalleCPE.descripcion,
                    sellersItemIdentification: new SellersItemIdentification({
                        id: detalleCPE.codigoItem,
                    }),
                }),
                price: new Price({
                    priceAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '42.37',
                    }),
                }),
            });
            line.taxTotals.push(new TaxTotal({
                taxAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: '15.25',
                }),
                taxSubtotal: new TaxSubtotal({
                    taxableAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '84.75',
                    }),
                    taxAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: '15.75',
                    }),
                    taxCategory: new TaxCategory({
                        percent: '18.00',
                        taxExemptionReasonCode: new TaxExemptionReasonCode({
                            value: detalleCPE.tipoImpuesto,
                        }),
                        taxScheme: new TaxScheme({
                            id: new TaxSchemeId({
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
//# sourceMappingURL=credit-note.xml.js.map