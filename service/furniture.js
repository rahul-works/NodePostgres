const furnitureDao = require('../dao/furniture');

class FurnitureService {
    constructor() {
        this.furnitureDao = furnitureDao;
    }

    createFurniture(name, price) {
        return this.furnitureDao.createFurniture(name, price);
    }

    getFurniture(name) {
        return this.furnitureDao.getFurniture(name);
    }
}


// to keep this code simple we dont not use dependency Injection
module.exports = new FurnitureService();