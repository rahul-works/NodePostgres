const furnitureService = require('../service/furniture');

class furnitureController {
    constructor() {
        this.furnitureService = furnitureService;
        this.createFurniture = this.createFurniture.bind(this);
    }

    async createFurniture(req, res) {
        req.body = {
            name: "chair",
            price: 10
        };
        const { name, price } = req.body;
        if (!name || !price) {
            return res
                .status(400)
                .json('you need to provide an name and a price');
        }

        try {
            const result = await this.furnitureService.createFurniture(name, price);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json('internal error!');
        }
    }

    async getFurniture(req, res) {
        const { name } = req.body;
        if (!name) {
            return res
                .status(400)
                .json('you need to provide an name of a furniture');
        }

        try {
            const result = await this.furnitureService.getFurniture(name);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json('internal error!');
        }
    }
}

module.exports = new furnitureController();