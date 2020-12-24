const mysql = require('mysql')
import config from '../Config/db'

let connection

export default ()=>{
    if(!connection){
   connection = mysql.createConnection(config)
//проверка подключения к базе данніх
connection.connect(function (err) {
    console.log('mysql error', err);
})
}
return connection
}