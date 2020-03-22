
// configuracion del entorno 

if (process.env.NODE_ENV !== "production") {

    require('dotenv').config();
    
}
// si no estamos en produccion va a acarar las variables de entorno del .env

module.exports= {
    PORT : process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    CACHE_KEY: process.env.CACHE_KEY
}; // variables de configuracion en un solo punto 

