import { Client } from "soap";
import { WSConfig } from "@fe/common/exchange";
export interface ISoap {
    wsConfig: WSConfig;
    client: Promise<Client>;
}
