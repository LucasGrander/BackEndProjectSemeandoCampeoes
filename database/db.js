import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:"viaduct.proxy.rlwy.net",
    port: "45380",
    user: "root",
    password:"ldkBdBpMuMxSssiXlgJcgyVmvDknTzVb",
    database: "railway"
})

db.connect((err) => {
    if(err){
        console.log(`Erro ao tentar se conectar com o banco de dados`)
        return
    }
    else{
        console.log("Conexão com o banco de dados bem sucedida!!")
    }
})