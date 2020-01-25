import { Usuario } from './usuario';

export class Cosas {


    usuario:string;
    nombreArchivo: string;
    fecha: Date;
    punto:number;
    metadata;
    url
    yaVoto:Array<String>;
    uid;

    constructor(user:string, file:string, point:number=0, url="null", uid)
    {
        this.uid = uid;
        this.usuario = user;
        this.nombreArchivo = file;
        this.fecha = new Date();
        this.punto= 0;
        this.metadata = {
            contentType: 'image/jpeg',
        };
        this.url = url;
        this.yaVoto= new Array<String>();
        this.yaVoto.push(user)

        //agregar al constructor
    }  

}






