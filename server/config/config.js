//puerto
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//DB
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://jucamilo340:dB1QZ6cOijGy9pnW@cluster0-kmorq.mongodb.net/cafee';
}
process.env.URLDB = urlDB;