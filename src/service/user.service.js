// const fs = require('fs')
// const json = fs.readFileSync('./src/repository/storage.json')
// const arr = JSON.parse(json)

const { userRepository, writeUsers } = require('../repository/user.repository')

function getAllData() {
    const arr = userRepository()
    if (!arr.length) throw new Error('Array is empty') 
    return arr
}

function getDataById(id) {
    const arr = userRepository()
    const filteredData = arr.filter(el => el.id == id)
    if (!filteredData.length) throw new Error('Such id not found')
    return filteredData
}

function createUser(name, surname, email, pwd) {
    const arr = userRepository()
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
    const arr = userRepository()
    const newData = {
        id, name, surname, email, pwd
    }
    const data = arr.findIndex(el => el.id == id)
    if (data < 0) throw new Error('User with such id not found')
    arr[data] = newData
    // fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr))
    writeUsers(arr)
    return arr
}

function deleteUserData(id) {
    const arr = userRepository()
    const data = arr.filter(el => el.id != id)
    // fs.writeFileSync('./src/repository/storage.json', JSON.stringify(data))
    writeUsers(data)
    if (data.length == arr.length) throw new Error('Such id not found')
    return data
}

module.exports = { getAllData, getDataById, createUser, updateUser, deleteUserData }
