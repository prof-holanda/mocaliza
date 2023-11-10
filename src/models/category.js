const { DataTypes } = require('sequelize');
const { Database } = require('../configs/sequelize');

const Category = Database.getInstance().sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = { Category };