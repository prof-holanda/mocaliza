const  { Sequelize } = require('sequelize');

class Database {
    static instance;

    constructor(dialect, databaseName) {
        this.sequelize = new Sequelize({
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
}