import knex from '../database/connection';
import { Request, Response } from 'express'

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            item.image_url = `http://localhost:3333/uploads/${item.image}`;
            return item;
        })
        return res.json(serializedItems);
    }
}
export default ItemsController;