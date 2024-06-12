import mysql from 'mysql2'
import dotenv from 'dotenv'

// export const db = mysql.createConnection({
//     host:"viaduct.proxy.rlwy.net",
//     port: "45380",
//     user: "root",
//     password:"ldkBdBpMuMxSssiXlgJcgyVmvDknTzVb",
//     database: "railway"
// })

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
})

db.connect((err) => {
    if(err){
        console.log(`Erro ao tentar se conectar com o banco de dados`)
        return
    }
    else{
        console.log(`Conexão com o banco de dados bem sucedida!! ${process.env.MYSQLDATABASE}`)
    }
})