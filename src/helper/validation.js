function isValidUser(req, res, next) {
    if (!req.body.hasOwnProperty('name')) throw new Error('There is no name in body')
    if (!req.body.hasOwnProperty('surname')) throw new Error('There is no surname in body')
    if (!req.body.hasOwnProperty('email')) throw new Error('There is no email in body')
    if (!req.body.hasOwnProperty('pwd')) throw new Error('There is no pwd in body')
    
    const { name, surname, email, pwd } = req.body

    if (!name) throw new Error('Name not found')
    if (!surname) throw new Error('Surname not found')
    if (!email) throw new Error('Email not found')
    if (!pwd) throw new Error('Password not found')
    if (!isNaN(name)) throw new Error('Name is not a string')
    if (!isNaN(surname)) throw new Error('Surame is not a string')
    if (!/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error('Email is invalid')
    if (pwd.length < 8) throw new Error('Pwd is invalid')

    next()
}

function isValidUserId(req, res, next) {
    if (!req.params.hasOwnProperty('id')) throw new Error('Id not found')

    const { id } = req.params
    
    if (id < 0) throw new Error('Id < 0')
    if (typeof (id) !== 'number' && typeof (id) !== 'string') throw new Error('Id is not a number or string')
    if (isNaN(id)) throw new Error('Id is not a number')
    if (!id) throw new Error('Id is empty')

    next()
}

module.exports = { isValidUser, isValidUserId }
