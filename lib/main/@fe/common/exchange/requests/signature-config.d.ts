export declare class SignatureConfig {
    private _certificate?;
    private _certificatePassword?;
    private _openSSL?;
    get certificate(): string;
    set certificate(_certificate: string);
    get certificatePassword(): string;
    set certificatePassword(_certificatePassword: string);
    get openSSL(): string;
    set openSSL(_openSSL: string);
}
