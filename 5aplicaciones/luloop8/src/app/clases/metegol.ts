import { ResultMetegol } from './result-metegol';

export class Metegol {

    uid;
    jugador1: string;
    jugador2: string;
    fecha;
    resultador: ResultMetegol[];
    url:string;
    email:string;

    constructor() {
        this.resultador = new Array<ResultMetegol>();
    }

}

