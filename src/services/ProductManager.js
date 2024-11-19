import fs from 'fs/promises';
import path from 'path';

const productsFile = path.resolve('data', 'products.json');

export default class ProductManager {

    //  ctor
    constructor() {
        this.products = [];
        this.loadFile()
    }

    //  db
    async loadFile() {
        try {
            const data = await fs.readFile(productsFile, 'utf-8');
            this.products = JSON.parse(data);
        } catch (error) {
            this.products = [];
        }
    }

    async saveFile() {
        const jsonData = JSON.stringify(this.products, null, 2);
        await fs.writeFile(productsFile, jsonData);
    }

    //  api
}
