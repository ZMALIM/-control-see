import {
    InvoiceTypeCode,
    Note,
    DocumentCurrencyCode,
    UblExtensions,
    InvoiceDocumentReference,
    SignatureCac,
    SignatoryParty,
    DigitalSignatureAttachment,
    PartyIdentification,
    PartyName,
    ExternalReference,
    AccountingSupplierParty,
    Party,
    PartyLegalEntity,
    PartyIdentificationId,
    RegistrationAddress,
    TaxTotal,
    PayableAmount,
    TaxSubtotal,
    TaxCategory,
    TaxSchemeId,
    TaxScheme,
    LegalMonetaryTotal,
    InvoiceLine,
    InvoicedQuantity,
    PricingReference,
    AlternativeConditionPrice,
    Item,
    SellersItemIdentification,
    Price,
    PostalAddress,
    Country,
    TaxExemptionReasonCode,
    PriceTypeCode,
    DocumentTypeCode,
    AddressTypeCode,
    OrderReference,
    AllowanceCharge,
    AllowanceChargeReasonCode,
    PartyTaxScheme,
    CompanyID,
    TaxCategoryId,
    ProfileID,
    CommodityClassification,
    ItemClassificationCode,
    PrepaidPayment,
} from '@fe/structures';
import { DetalleCPE, DocumentoRelacionado, CPE } from '@fe/common/models';
import { XmlDocument, Builder } from '@fe/common/abstract';
import { Invoice } from '@fe/standard';
import * as moment from 'moment';

export class InvoiceXML implements Builder 
{
    public generate(document: CPE): XmlDocument 
    {
        const invoice = new Invoice();
        document = new CPE(document);
        invoice.ublExtensions = new UblExtensions();

        /**
         * ? 2 Versión del UBL
         */
        invoice.ublVersionID = document.ublVersion;

        /**
         *  ? 3 Versión de la estructura del documento
         */
        invoice.customizationID = '2.0';

        /**
         * ? 4 Código de tipo de operación
         */
        invoice.profileID = new ProfileID({
            value: document.tipoOperacion
        });

        /**
         * ? 5 Numeración, conformada por serie y número correlativo
         */
        invoice.id = document.comprobante;

        /**
         * ? 6 Fecha de emisión
         */
        invoice.issueDate = moment(document.fechaEmision).format('YYYY-MM-DD');

        /**
         * ? 7 Fecha de Vencimiento
         */
        if (document.fechaVencimiento)
        {
            invoice.dueDate = moment(document.fechaVencimiento).format('YYYY-MM-DD')
        }

        /**
         * ? 8  Tipo de documento (Boleta)(Factura)
         */
        invoice.invoiceTypeCode = new InvoiceTypeCode({
            listAgencyName: 'PE:SUNAT',
            listName: 'SUNAT:Identificador de Tipo de Documento',
            listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
            value: document.tipoDocumento,
        });

        /**
         * ? 9 Leyenda
         * ? 10 Código interno generado por el software de emisión de la Boleta  
         */
        invoice.note = new Note({
            languageLocaleID: '1000',
            value: document.montoLetras.toUpperCase(),
        });

        /**
         * @OK
         * ? 11  Tipo de moneda en la cual se emite la boleta electrónica
         */
        invoice.documentCurrencyCode = new DocumentCurrencyCode({
            listID: 'ISO 4217 Alpha',
            listName: 'Currency',
            listAgencyName: 'United Nations Economic Commission for Europe',
            value: document.moneda.codigo,
        });

        /**
         *  ? 12 Tipo y número de la guía de remisión relacionada con la operación
         */
         document.relacionados.forEach(relacionado => {
            invoice.despatchDocumentReferences.push(new InvoiceDocumentReference({
                id: relacionado.nroDocumento,
                documentTypeCode: new DocumentTypeCode({
                    listAgencyName: '"PE:SUNAT',
                    listName: 'SUNAT:Identificador de guía relacionada',
                    listURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01',
                    value: relacionado.tipoDocumento
                }),
            }))
        });

        /**
         *  @OK
         * ? 13 Tipo y número de otro documento y código relacionado con la operación
         */
        if (document.otrosDocumentosRelacionados.length > 0)
        {
            document.otrosDocumentosRelacionados.forEach((relacionado: DocumentoRelacionado) => {
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

        /**
         * @description
         * ? 14 Información adicional de la firma
         */
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
                externalReference:  new ExternalReference({
                    uri: document.empresa.nroDocumento,
                }),
            }),
        });

        /**
         * ? 15 Nombre Comercial del empresa
         * ? 16 Apellidos y nombres, denominación o razón social del empresa
         * ? 17 Número de RUC del empresa
         * ? 18 Tipo de Documento de Identidad del Emisor
         * ? 19 Código del domicilio fiscal o de local anexo del empresa
         */
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
                    // taxScheme: new TaxScheme({
                    //     id: new TaxSchemeId({
                    //         value: 
                    //     })
                    // })
                }),
                /**
                 * @OK
                 */
                // partyLegalEntity: new PartyLegalEntity({
                //     registrationName: document.empresa.razonSocial,
                //     registrationAddress: new RegistrationAddress({
                //         addressTypeCode: new AddressTypeCode({
                //             listAgencyName: 'PE:SUNAT',
                //             listName: 'Establecimientos anexos',
                //             value: document.empresa.ubigeo,
                //         }),
                //     }),
                // }),
            }),
        });

        /**
         * ? 20 Tipo y número de documento de identidad del adquirente o usuario Apellidos y 
         * ? 21 nombres, denominación o razón social del adquirente o usuario
         */
        invoice.accountingCustomerParty = new AccountingSupplierParty({
            party: new Party({
                // partyName: new PartyName({
                //     name: document.cliente.razonSocial,
                // }),
                // partyIdentification: new PartyIdentification({
                //     id: new PartyIdentificationId({
                //         schemeID: '6',
                //         schemeName: 'Documento de Identidad',
                //         schemeAgencyName: 'PE:SUNAT',
                //         schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                //         value: document.cliente.nroDocumento,
                //     }),
                // }),
                partyTaxScheme: new PartyTaxScheme({
                    registrationName: document.cliente.razonSocial,
                    companyID: new CompanyID({
                        schemeID: document.cliente.tipoDocumento,
                        value: document.cliente.nroDocumento
                    }),
                    // taxScheme: new TaxScheme({
                    //     id: new TaxSchemeId({
                    //         schemeID: document.cliente.tipoDocumento,
                    //         schemeName: 'SUNAT:Identificador de Documento de Identidad',
                    //         schemeAgencyName: 'PE:SUNAT',
                    //         schemeURI: 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06',
                    //         value: Number(document.cliente.nroDocumento)
                    //     })
                    // }),
                    registrationAddress: new RegistrationAddress({
                        addressTypeCode: new AddressTypeCode({
                            listAgencyName: 'PE:SUNAT',
                            listName: 'Establecimientos anexos',
                            value: document.cliente.ubigeo,
                        })
                    })
                }),
                // partyLegalEntity: new PartyLegalEntity({
                //     registrationName: document.cliente.razonSocial,
                //     registrationAddress: new RegistrationAddress({
                //         addressTypeCode: new AddressTypeCode({
                //             listAgencyName: 'PE:SUNAT',
                //             listName: 'Establecimientos anexos',
                //             value: document.cliente.ubigeo,
                //         }),
                //     }),
                // }),
            }),
        });

        // invoice.PrepaidPayment = new PrepaidPayment({
        //     ID: 'F001-245',
        //     PaidAmount: new PayableAmount({
        //         currencyID: 'PEN',
        //         Value: 51731.2,
        //     }),
        //     PaidDate: '2017-07-07',
        // });

        /**
         * ? 22 Serie y número de comprobante del anticipo (para el caso de reorganización de empresas, incluye el RUC)
         * ? 23 Código de tipo de documento
         * ? 24 Monto prepagado o anticipado
         * ? 25 Código de tipo de moneda del monto prepagado o anticipado
         * ? 26 Número de RUC del empresa del comprobante de anticipo
         */
        // invoice.prepaidPayment = new PrepaidPayment({
        //     id: new PrepaidPayment
        // });

        /**
         * @description
         * ? 27 Descuento Global
         * * Este elemento es distinto al elemento Total Descuentos definido en el punto 38.
         * * propósito es permitir consignar en el comprobante de pago, un descuento a nivel global o 
         * * total. Este campo no debe ser usado para contener la suma de los descuentos de línea o ítem
         */
        let dctosPorItem = document.items.reduce((count, item) => {
            count += item.descuento;
            return count;
        }, 0);

        if (document.descuentoGlobal > 0 || dctosPorItem > 0)
        {
            const totalDcto = document.descuentoGlobal + dctosPorItem
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

        /**
         * ? 28 Monto total del impuestos
         * ? 29 Monto las operaciones gravadas/exoneradas/inafectas del impuesto
         * ? 30 Sumatoria de IGV
         * ? 31 Sumatoria de ISC (Ver Ejemplo en la página 51)
         * ? 32 Sumatoria de Otros Tributos
         */
        invoice.taxTotals.push(new TaxTotal({
            /**
             * ? 20 Monto Total de Impuestos
             * * Corresponde al importe total de impuestos ISC, IGV e IVAP de Corresponde
             * * Este campo se consigna dentro de un elemento complejo cac:TaxTotal. Se deberá colocar la 
             * * sumatoria total de los impuestos. 
             */
            taxAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalIgv.toFixed(2),
            }),
            taxSubtotal: new TaxSubtotal({

                /**
                 * ? 21 Sumatoria ISC.
                 * * Corresponde al ISC Total de la boleta. La sumatoria no debe contener el ISC que corresponde 
                 * * a las transferencias de bienes o servicios prestados a título gratuito comprendidos en la boleta y 
                 * * que estuviesen gravados con el ISC.
                 */
                taxableAmount: new PayableAmount({
                    currencyID: document.moneda.codigo,
                    value: document.totalVenta.toFixed(2),
                }),

                /**
                 * ? 22 Sumatoria IGV.
                 * * Corresponde al IGV Total de la boleta. Esta asociada estrechamente con el siguiente numeral.
                 * * La sumatoria no debe contener el IGV que corresponde a las transferencias de bienes o 
                 * * servicios prestados a título gratuito comprendidos en la boleta y que estuviesen gravados con el 
                 * * IGV.
                 * * El IGV = 18% de la suma: [Total valor de venta operaciones gravadas] + [Sumatoria ISC].
                 */
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

        /**
         * ? 33 Total valor de venta
         * ? 34 Total precio de venta (incluye impuestos)
         * ? 35 Monto total de descuentos
         * ? 36 Monto total de otros cargos del comprobante
         * ? 37 Importe total de la venta, cesión en uso o del servicio prestado
         */
        invoice.legalMonetaryTotal = new LegalMonetaryTotal({
            /**
             * ? 28 Total Valor de Venta. 
             * * Se informa el valor de la venta total con su respectivo atributo de tipo de moneda que le 
             * * corresponda (@currencyID). Este elemento se descibe en el numeral 10.
             */
            lineExtensionAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
            /**
             * ? 29 Total Precio de Venta. 
             * * A través de este elemento se debe indicar el valor de venta total de la operación incluido los 
             * * impuestos. 
             * * Se informa el valor de la venta total incluido impuestos con su respectivo atributo de tipo de
             * * moneda que le corresponda (@currencyID). Este elemento se descibe en el numeral 10.
             */
            taxInclusiveAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),

            /**
             * ? 30 Total de Descuentos.
             * * A través de este elemento se debe indicar el valor total de los descuentos realizados de ser el 
             * * caso. 
             * * Este elemento es distinto al elemento Descuentos Globales definido en el punto 19. Su 
             * * propósito es permitir consignar en el comprobante de pago:
             * *  la sumatoria de los descuentos de cada línea (descuentos por ítem), o
             * *  la sumatoria de los descuentos de línea (ítem) + descuentos globales
             */
            allowanceTotalAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.descuentoGlobal.toFixed(2)
            }),

            /**
             * ? 31 Sumatoria otros Cargos.
             * * Corresponde al total de otros cargos cobrados al adquirente o usuario y que no forman parte 
             * * de la operación que se boleta, es decir no forman parte del(os) valor(es) de ventas señaladas
             * * anteriormente, pero sí forman parte del importe total de la Venta (Ejemplo: propinas, 
             * * garantías para devolución de envases, etc.)
             */
            chargeTotalAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalOtrosCargos.toFixed(2)
            }),

            /**
             * ? 32 Importe total de la venta, de la cesión en uso o del servicio prestado. 
             * * Corresponde al importe total de la venta, de la cesión en uso o del servicio prestado. Es la 
            * * sumatoria de los elementos 37.
             */
            payableAmount: new PayableAmount({
                currencyID: document.moneda.codigo,
                value: document.totalVenta.toFixed(2),
            }),
        });

        if (document.nroOrdenCompra || document.nroOrdenCompra !== '')
        {
            // invoice.orderReference = new OrderReference({
            //     id: document.nroOrdenCompra
            // });
        }

        // Numero de Placa del Vehiculo - Gastos art.37° Renta
        if (document.placaVehiculo && document.placaVehiculo !== '')
        {
        }

        // Tipo de Operación - Catalogo N° 17
        if (document.tipoOperacion && document.tipoOperacion !== '' && document.datosGuiaTransportista === null)
        {
        }

        /**
         * ? 38 Número de orden del Ítem
         * ? 39 Unidad de medida por ítem Cantidad de 
         * ? 40 unidades por ítem
         * ? 41 Valor de venta del ítem
         */
        document.items.forEach((detalleCPE: DetalleCPE) => {
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
                    // sellersItemIdentification: new SellersItemIdentification({
                    //     id: detalleCPE.codigoItem || 'ITEM01',
                    // }),
                    // commodityClassification: new CommodityClassification({
                    //     itemClassificationCode: new ItemClassificationCode({
                    //         listID: 'UNSPSC',
                    //         listAgencyName: 'GS1 US',
                    //         listName: 'Item Classification',
                    //         value: '86121503'
                    //     })
                    // })
                }),
                price: new Price({
                    priceAmount: new PayableAmount({
                        currencyID: document.moneda.codigo,
                        value: detalleCPE.precioUnitario.toFixed(2),
                    }),
                }),
            });

            /**
             * @OK
             */
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
                                // schemeName: 'Tax Scheme Identifier',
                                // schemeAgencyName: 'United Nations Economic Commission for Europe',
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
