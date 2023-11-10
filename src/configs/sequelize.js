const  { Sequelize } = require('sequelize');

class Database {
    static instance;

    constructor(dialect, databaseName) {
        this._sequelize = new Sequelize({
            dialect,
            storage: databaseName
        });
    }

    static getInstance() {
        if (Database.instance == undefined) {
            Database.instance = new Database(
                'sqlite',
                'mocaliza_db.db'
            );
        }

        return Database.instance;
    }

    get sequelize() {
        return this._sequelize;
    }

    async sync() {
       await this._sequelize.sync({ force: true }); 
    }
}

module.exports = { Database };
