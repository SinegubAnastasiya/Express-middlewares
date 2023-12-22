// const fs = require('fs')
// const json = fs.readFileSync('./src/repository/storage.json')
// const arr = JSON.parse(json)

const { getUserFileStore, writeUsers } = require('./user-file.service')

function getAllData() {
    const arr = getUserFileStore()
    if (!arr.length) throw new Error('Array is empty') 
    return arr
}

function getDataById(id) {
    const arr = getUserFileStore()
    const filteredData = arr.filter(el => el.id == id)
    if (!filteredData.length) throw new Error('Such id not found')
    return filteredData
}

function createUser(name, surname, email, pwd) {
    const arr = getUserFileStore()
    const newObj = {
        id: Math.max(...arr.map(el => el.id)) + 1, name, surname, email, pwd
    }
    const filtered = arr.filter(el => el.email == newObj.email)
    if (filtered.length) throw new Error('Such email already exists')
    if (arr.id !== newObj.id) arr.push(newObj)
    // fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr))
    writeUsers(arr)
    return arr
}

function updateUser(id, name, surname, email, pwd) {
    const arr = getUserFileStore()
    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('User with such id not found')
    const newObj = {
        id, name, surname, email, pwd
    }
    arr[index] = newObj
    writeUsers(arr)
    return arr
}

function deleteUser(id) {
    const arr = getUserFileStore()
    const data = arr.filter(el => el.id != id)
    writeUsers(data)
    if (data.length == arr.length) throw new Error('Such id not found')
    return data
}

function updateBody(id, body) {
    const arr = getUserFileStore()
    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('User with such id not found')
    const item = arr[index]
    arr[index] = { ...item, ...body }
    writeUsers(arr)
    return arr
}

module.exports = { getAllData, getDataById, createUser, updateUser, deleteUser, updateBody }
