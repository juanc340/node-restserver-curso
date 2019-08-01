//puerto
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimineto del token

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



//SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed';


//DB
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
//google cliente
process.env.CLIENT_ID = process.env.CLIENT_ID || '33978861972-s1m8g3lfip1trsvoqu1lmmefle3ruf15.apps.googleusercontent.com';