import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import pool from './models/mariadbconecction.js';
import mongoto from './models/mongodbconecction.js'

const app = express();
const port = 3000;
mongoto.dbConnectMongo();

// MIDDLEWARE
app.use(cors())
app.use(morgan("combined"))

app.use(express.json());

app.get('/check-mariadb-connection', async (req, res) => {
  let dbConection
  try {
    dbConection = await pool.getConnection();
    if (dbConection) {
      res.json({message: "Base de datos mariadb conectada correctamente"});
    }
  } catch (error) {
    res.json({ error: 'Error al conectar a la base de datos mariadb' });
  }
});

app.get('/check-mongodb-connection', async (req, res) => {
    if (mongoto.conectado) {
      res.json({message: "Base de datos mongodb conectada correctamente"});
    } else {
      res.json({ error: 'Error al conectar a la base de datos mongodb' });
    }
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
