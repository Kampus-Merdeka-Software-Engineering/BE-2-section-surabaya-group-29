import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Category from "./kategoriModel.js";


const News = sequelize.define("News", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    isiBerita: DataTypes.STRING,
    penulis: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    
});

Category.hasMany(News, {
    foreignKey: {
        allowNull: false,
    },   
});

News.belongsTo(Category);

export default News;