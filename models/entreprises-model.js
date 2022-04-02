var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_mysql_db'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM entreprise';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        console.log('entreprises-model',id)
        let sql = 'SELECT id, name,email FROM entreprise WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByEmail : async (email,next)=>{
        let sql = 'SELECT * FROM entreprise WHERE email = ?'
        db.query(sql,email,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (entreprise,next)=>{
        let sql = 'INSERT INTO entreprise SET ?'
        db.query(sql,entreprise,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,{name,email},next)=>{
        let sql = `UPDATE entreprise SET name=?, email=? WHERE id=?`

        db.query(sql,[name,email,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM entreprise WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}