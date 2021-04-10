export abstract class ServerBuilder 
{
    public abstract listen();
    public abstract address();
    public abstract close();
}