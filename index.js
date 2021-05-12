const express = require('express')
const bot = require('./src/js/telegram/telegraf')
const products = require('./src/js/products')
const features = require('./src/js/features')
const bodyParser = require('body-parser')
const port = 3000
var page = 'product'
const getRequestCallMessageTepmlate = require('./src/js/telegram/templates/requestCall')
const requestCallChatId = '-559594782'
const app = express()
bot.launch()
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/axios/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (req, res) =>{
	res.render(page, {
		title: 'Все шавермы',
		message: 'Шаваленд',
		products,
		features
	})
})

app.get('/api/request-call', (req,res) => {
	console.log('Запрос', req.query)
	bot.telegram.sendMessage(
		requestCallChatId,
		getRequestCallMessageTepmlate(req.query)
	)
	res.redirect('/')
})

app.listen(port, () =>{
	console.log(`Server is working on port ${port}`)
})