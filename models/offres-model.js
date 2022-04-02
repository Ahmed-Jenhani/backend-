var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_mysql_db'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM offre';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM offre WHERE id_offre = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (offre,next)=>{
        let sql = 'INSERT INTO offre SET ?'
        db.query(sql,offre,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,offre,next)=>{
        let sql = `UPDATE offre SET date=? WHERE id_offre=?`

        db.query(sql,[offre.date,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM offre WHERE id_offre=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}