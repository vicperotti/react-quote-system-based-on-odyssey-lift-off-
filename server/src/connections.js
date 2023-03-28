import {Sequelize} from "sequelize";

export const dbConnection = new Sequelize("sqlite:../data/database.sqlite");