import { createPool } from 'mariadb';

const pool = createPool({
  host: process.env.DATABASE_HOST || 'localhost', // Reemplaza con la dirección IP o el nombre de host del contenedor de MariaDB
  user: process.env.DATABASE_USER || 'root', // Reemplaza con el nombre de usuario de tu base de datos
  password: process.env.DATABASE_PASSWORD || '1234a', // Reemplaza con la contraseña de tu base de datos
  database: process.env.DATABASE_NAME || 'my_db', // Reemplaza con el nombre de tu base de datos
  connectionLimit: 5, // Límite de conexiones en el pool
});

export default pool;
