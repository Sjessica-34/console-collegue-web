import fetch from 'node-fetch';
import {Collegue, CreateCollegue} from "./models";
import {config} from "./config";


export class Service {

   
    async list(): Promise<Collegue[]> {
        const response = await fetch(config.baseUrlApi);
        const allCols: Collegue[] =  await response.json();
        return allCols.filter(col => col.nom);
    }

    
    async create(collegue: CreateCollegue): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi, {
            method: 'post',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return response.json();
    }

    
    async getById(id: string): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi + id);
        return response.json();
    }

    
    async update(collegue: Partial<Collegue>, id: string): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi + id, {
            method: 'patch',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
    }
}
