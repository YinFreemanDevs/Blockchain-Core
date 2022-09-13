import { time } from "console";
import {SHA256} from 'crypto-js';

class Block {
    constructor(timestamp, previousHash, hash, data){
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis(){ //crea estáticamente el bloque génesis
        const timestamp = (new Date(2000, 0, 1).getTime()); //inicia el bloque en el año 2000

        return new this(timestamp, undefined, 'g3n3s1s', 'Satoshi is here');
    }

    static mine(previusBlock, data) {  //mina nuevos bloques asignandole los parametros correctos
        const timestamp = Date.now();
        
        const { hash: previousHash} = previusBlock;
        const hash = Block.hash(timestamp, previousHash, data);

        return new this(timestamp, previousHash, hash, data);
    }

    static hash(timestamp, previousHash, data) {
        return SHA256(`${timestamp},${previousHash}${data}`).toString();
    }

    toString(){ //Devuelve los valores de las propiedades en forma de string
        const{
            timestamp,previousHash,hash,data,
        } = this;

        return `Block - 
        timestamp       : ${timestamp}
        previousHash    : ${previousHash}
        hash            : ${hash}
        data            : ${data}
        `
    }
}

export default Block;