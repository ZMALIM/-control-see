export class AdditionalProperty {
    private _id?: string;
    private _name?: string;
    private _value?: string;

    get id(): string 
    {
        return this._id;
    }

    set id(id: string) 
    {
        this._id = id;
    }

    get name(): string 
    {
        return this._name;
    }

    set name(name: string)
    {
        this._name = name;
    }

    get value(): string 
    {
        return this._value;
    }

    set value(value: string) 
    {
        this._value = value;
    }
}
