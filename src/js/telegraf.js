const { Telegraf } = require('telegraf')
const bot = new Telegraf('1771211910:AAEv9ygBORXaa-PnXxbGSUpqlPojKArMjO4')

bot.start((ctx) => ctx.reply('Привет! Рад тебя видеть'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Привет! Чем я могу тебе помочь?'))

module.exports = bot