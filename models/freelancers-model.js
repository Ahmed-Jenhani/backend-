var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_mysql_db'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM freelancer';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        console.log('freelancers-model',id)
        let sql = 'SELECT id,first name,last name,email,phone FROM freelancer WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByEmail : async (email,next)=>{
        let sql = 'SELECT * FROM freelancer WHERE email = ?'
        db.query(sql,email,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (freelancer,next)=>{
        let sql = 'INSERT INTO freelancer SET ?'
        db.query(sql,freelancer,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,{firstname,lastname,email,phone},next)=>{
        let sql = `UPDATE freelancer SET name=?, email=? WHERE id=?`

        db.query(sql,[id,firstname,lastname,email,phone],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM freelancer WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}