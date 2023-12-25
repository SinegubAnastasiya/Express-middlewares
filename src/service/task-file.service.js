const fs = require('fs')

function getTaskFileStore() {
    const json = fs.readFileSync('./src/repository/task-storage.json')
    const arr = JSON.parse(json)
    return arr
}

function writeTasks(data) {
    fs.writeFileSync('./src/repository/task-storage.json', JSON.stringify(data))
}

module.exports = { getTaskFileStore, writeTasks }