import keys from './keys'; 
import mysql from 'mysql';

const pool = mysql.createPool(keys.database);

pool.getConnection((err,connection) =>{
    if(err) throw err;
    connection.release();
    console.log('database is connected');
});
    
export default pool;