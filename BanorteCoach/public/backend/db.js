import mysql from 'mysql2';
//const mysql = require('mysql');


export const connection = mysql.createConnection({
  host: '35.192.31.149',
  user: 'root',
  password: 'admin',
  database: 'hack23'
});


// funcion que exporta un select
function asyncQuery(sqlQuery) {
  return new Promise((resolve, reject) => {
      connection.query(sqlQuery, function(err, result) {
           if (err) {
               reject(err);
           } else {
               resolve(result);
           }
       })
  })
}

// pt 2
async function getUsers() {
  var SelectQuery = "SELECT * FROM usuarios;";
  var users = await asyncQuery(SelectQuery);

 //console.log(users);
 return users;
}

export {getUsers};