const connection = require('../config/database');

const getHomepage = (req, res)=>{
    ///////////////////////////////////////////////////////////////////
    // res.send('Hello World vvvvvvvvvvvvv!')
    // Hiển thị data
//     let user = []
//     // simple query
//     connection.query(
//         'SELECT * FROM  Users u',
//         function(err, results, fields) {
//         user = results;
//         console.log("KET QUA = ",results); // results contains rows returned by server
//         // console.log("FIELDS = ",fields); // fields contains extra meta data about results, if available

//         console.log("<<<<aaaaaaaaaaa",user)
//         res.send(JSON.stringify(user));
//         }
//   );
        ////////////////////////////////////////////////////////////
    return res.render('home.ejs')
}

const getABC = (req, res)=>{
    res.send('check ABC')
}

const getHai = (req,res)=>{
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) =>{
    let email = req.body.email; // Bài 38
    let name = req.body.myname;
    let city = req.body.city;

    console.log("email:  ", email)
    
    
    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results){
    //         console.log(results);
    //         res.send("created user succed !")
    //     }
    // );

    let [results, fields] = await connection.query( //Bai 39, phut 25
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
    );

    console.log("checkkkkkkkkkkk: ", results)
    res.send("created user succed !")
    // connection.query(
    // 'SELECT * FROM  Users u',
    // function(err, results, fields) {
    //     console.log("KET QUA = ",results); // results contains rows returned by server
    //     // console.log("FIELDS = ",fields); // fields contains extra meta data about results, if available
    // }
    // )

    // const [results, fields] = await connection.query('SELECT * FROM  Users u'); // Bai 39 phút 19
    // console.log(">>>check reusult: ", results);
} 

const getCreatePage = (req, res) =>{
    res.render('create.ejs')
}

module.exports = { // export ra object
    getHomepage, getABC, getHai,
    postCreateUser, getCreatePage
}