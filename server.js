const express = require('express');
const router = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.setup();
    }

    run(port) {
        this.server = this.app.listen(port, () => {
            console.log(`server running on port`, port);
        });
    }

    setup() {
        this.app.use(express.json()); // json parsing middleware 
        this.app.use(router);
    }
}

module.exports = Server;