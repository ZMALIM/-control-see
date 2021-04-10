import { Sender } from "@fe/common/abstract";
import { PDocument, ResponseWS } from "@fe/common/exchange";
import { WSBase } from '@fe/ws/ws-base';
export declare class Summary extends WSBase implements Sender {
    send(document: PDocument): Promise<ResponseWS>;
}
