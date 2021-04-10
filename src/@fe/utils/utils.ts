import { ErrorWS } from '@fe/common/exchange';

export class Utils 
{
    processed(code: string): boolean 
    {
        let status: boolean = true;
        if(code === '0' || code === '99')
        {
            status = true;
        } 
        else if(code === '98') 
        {
            status = false;
        }
        return status;
    }

    formatCert(certFile) 
    {
        return certFile
            // remove BEGIN/END
            .replace(/-----(BEGIN|END)[\w\d\s]+-----/g, '')
            // remove \r, \n
            .replace(/[\r\n]/g, '');
    }

    crytoKey(certFile) 
    {
        certFile = this.formatCert(certFile);
        // convert base64 to ArrayBuffer
        return new Uint8Array(Buffer.from(certFile, 'base64')).buffer;
    }

    b64ToBinary(base64) 
    {
        const raw = atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));

        for(let i = 0; i < rawLength; i++) 
        {
          array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    errorWS(error: any): ErrorWS 
    {
        const { root: { Envelope: { Body: { Fault } } } } = error;
        return {
            code: Fault.detail ? Fault.faultstring : Fault.faultcode,
            description: Fault.detail ? Fault.detail.message : Fault.faultstring,
        } as ErrorWS;
    }
}
