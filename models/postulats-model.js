var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_mysql_db'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM postulats';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM postulats WHERE id_postulats = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (postulats,next)=>{
        let sql = 'INSERT INTO postulats SET ?'
        db.query(sql,postulats,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,postulats,next)=>{
        let sql = `UPDATE postulats SET date=? WHERE id_postulats=?`

        db.query(sql,[postulats.date,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM postulats WHERE id_offre=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}