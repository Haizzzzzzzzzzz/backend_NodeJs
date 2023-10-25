const path = require('path');
const express =  require("express")

const configViewEngine = (app)=>{
    console.log("<<<<<Check __dirname: ", __dirname);// Xem duon dan hien tai
    // app.set('views', path.join(__dirname,'views') )
    app.set('views', path.join("./src",'views') )

    app.set('view engine', 'ejs')
    //cconfig static file

    // app.use(express.static(path.join(__dirname, 'public')));// su dung cac folder o trong public de hoat dong
    app.use(express.static(path.join("./src", 'public')));
}

module.exports = configViewEngine;