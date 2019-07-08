const express=require('express')

const myproRouter=require('./routes/mypro.js')

const bodyParser=require('body-parser')

var app=express();
app.listen(8080);
app.use(express.static('mypro'))


app.use(bodyParser.urlencoded({
	extended:false
}))

app.use('/mypro',myproRouter)