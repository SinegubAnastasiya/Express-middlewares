function isValidTaskId(req, res, next) {
    if (!req.params.hasOwnProperty('id')) throw new Error('There is no id')

    const { id } = req.params

    if (id < 0) throw new Error('Id is less than 0')
    if (typeof id !== 'number' && typeof id !== 'string') throw new Error('Incorrect type of id')
    if (isNaN(id)) throw new Error('Id is not a number')
    if (!id) throw new Error('Id is empty')

    next()
}

function isValidTask(req, res, next) {
    if (!req.body.hasOwnProperty('title')) throw new Error('There is no title')
    if (!req.body.hasOwnProperty('hours')) throw new Error('There is no hours')
    if (!req.body.hasOwnProperty('teacher')) throw new Error('There is no teacher')
    if (!req.body.hasOwnProperty('date')) throw new Error('There is no date')

    const { title, date, hours, teacher } = req.body

    if (!title) throw new Error('Title not found')
    if (!date) throw new Error('date not found')
    if (!hours) throw new Error('Hours not found')
    if (!teacher) throw new Error('Teacher not found')
    if(isNaN(hours)) throw new Error('Hours is not a number')
    if (!isNaN(teacher)) throw new Error('Incorrect type of field teacher')

    next()
}

module.exports = { isValidTaskId, isValidTask }