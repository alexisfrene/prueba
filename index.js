import "dotenv/config";
import app from "./src/app.js";
import sequelize from "./src/db.js";

const {PORT} = process.env;

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT , ()=>{
    console.log("Servidor ready")
})
})




