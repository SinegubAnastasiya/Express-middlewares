const fs = require('fs')

function getUserFileStore() {
    const json = fs.readFileSync('./src/repository/storage.json')
    const arr = JSON.parse(json)
    return arr
}

function writeUsers(data) {
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(data))
}

module.exports = { getUserFileStore, writeUsers }