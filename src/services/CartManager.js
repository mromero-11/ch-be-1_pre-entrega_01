import fs from 'fs/promises';
import path from 'path';

const cartFile = path.resolve('data', 'cart.json');

export default class CartManager {

    //  ctor
    constructor() {
        this.cart = [];
        this.loadFile()
    }

    //  db
    async loadFile() {
        try {
            const data = await fs.readFile(cartFile, 'utf-8');
            this.cart = JSON.parse(data);
        } catch (error) {
            this.cart = [];
        }
    }

    async saveFile() {
        const jsonData = JSON.stringify(this.cart, null, 2);
        await fs.writeFile(cartFile, jsonData);
    }

    //  api
}
