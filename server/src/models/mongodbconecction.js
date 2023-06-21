import { connect } from 'mongoose';

const mongoto = {};

const dbConnectMongo = ()=> {
    try {
        connect(process.env.MONGO_DB_URI);
        console.log('Conectado a la BD mongo db en '+process.env.MONGO_DB_URI);
        mongoto.conectado = true
    } catch (error) {
        console.log('Error al conectar la BD');
        console.log(error.message);
    }
}

mongoto.dbConnectMongo = dbConnectMongo;

export default mongoto;