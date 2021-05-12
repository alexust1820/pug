const getRequestCallMessageTepmlate = requestTemplate => {
    return `
    ________________
    
    🤩🤩🤩
    
    Привет! Тут появилась работа.
		🙂 Имя: ${requestTemplate.name}
		📨 Почта: ${requestTemplate.email}
		📞 Телефон: ${requestTemplate.phone}
   `
}

module.exports = getRequestCallMessageTepmlate;