const db = require('../db');

class FurnitureDao {
    constructor() {
        this.db = db;
    }

    async createFurniture(name, price) {
        // in prod, you'd probably also check for the standard SQL error codes
        // https://www.postgresql.org/docs/current/errcodes-appendix.html
        const [id] = await this.db('furniture')
            .insert({
                name,
                price
            })
            .returning('id');

        return id;
    }

    async getFurniture(name) {
        // in prod, you'd probably also check for the standard SQL error codes
        // https://www.postgresql.org/docs/current/errcodes-appendix.html
        const rows = await this.db('furniture')
            .select({
                name: name
            });

        return rows;
    }
}

// to make the code simple we are not using dependency injection
module.exports = new FurnitureDao();