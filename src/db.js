import {Sequelize} from "sequelize";

const {DB_USER , DB_PASSWORD , DB_HOST , DB_PORT , DB_NAME} = process.env;

const sequelize = new Sequelize(
`posgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
 {
    logging : true
});

export default sequelize;