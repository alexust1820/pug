const express = require('express')
const bot = require('./src/js/telegraf')
const products = require('./src/js/products')
const features = require('./src/js/features')
const port = 3000
const app = express()
bot.launch()
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/axios/dist'));
app.get('/', (req, res) =>{
	res.render('index', {
		title: 'Все шавермы',
		message: 'Шаваленд',
		products,
		features
	})
})
app.listen(port, () =>{
	console.log(`Server is working on port ${port}`)
})