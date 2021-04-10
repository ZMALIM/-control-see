import { PDocument, ResponseWS } from "@fe/common/exchange";
export declare abstract class Sender {
    abstract send(document: PDocument): Promise<ResponseWS>;
}
