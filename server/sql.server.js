// connection.connect()
// var mysql = require('mysql');


// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '6551',
//     database : 'angusales'
//   })
// //   customerArray=[]; 
  
//  function getCustomers() {
//     connection.query('SELECT * from customers', function(err, rows, fields){
//         if(!err) {
//             return  JSON.parse(rows);
//             // console.log(customerArray);}
//         }
//        else {
//           console.log(err);}
        
//     })
//   }




// // const mySql = new sql();
// exports.db = mysql;



// //   connection.query('SELECT * from car_features where horsepower>200', function(err, rows, fields) {
// //     if (!err)
// //       console.log('The solution is: ', rows );
// //     else
// //       console.log('Error while performing Query.');
// //   });
// // connection.query('INSERT INTO car_features SET ?',{ manufacturer: "Node" }, function (err, result) {

// //     if (err) throw err;
 
// //     console.log(result);
// //  });
// // var n = Math.floor(Math.random()*100)
// //     for (let i=0;i<n;i++){
// //         connection.query('INSERT INTO car_features SET ?', {manufacturer: `car-${n}`}, function(err,res){
// //             if (!err)
// //       console.log('The solution is: ', res );
// //     else
// //       console.log('Error while performing Query.');
// //   });
// // }     
// // var man1 = new Object();
// // man1.manufacturer = "dreamyblue";
// // var whereQuery = { manufacturer: "car-1"}
// // connection.query('UPDATE car_features SET ? WHERE ?', [man1, whereQuery], function (err, result) {
// //     console.log(result);
// //   }); 
// // connection.query('DELETE from car_features WHERE manufacturer like "car%" ')
// // connection.query('DELETE from car_features WHERE manufacturer = "node" ')

// //   connection.end();