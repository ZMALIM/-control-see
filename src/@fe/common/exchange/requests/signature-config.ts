export class SignatureConfig 
{
    private _certificate?: string;
    private _certificatePassword?: string;
    private _openSSL?: string;

    get certificate(): string 
    {
        return this._certificate;
    }

    set certificate(_certificate: string) 
    {
        this._certificate = _certificate;
    }

    get certificatePassword(): string 
    {
        return this._certificatePassword;
    }

    set certificatePassword(_certificatePassword: string) 
    {
        this._certificatePassword = _certificatePassword;
    }

    get openSSL(): string 
    {
        return this._openSSL;
    }

    set openSSL(_openSSL: string) 
    {
        this._openSSL = _openSSL;
    }
}
