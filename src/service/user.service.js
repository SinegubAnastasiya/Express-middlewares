const fs = require('fs')
const json = fs.readFileSync('./src/repository/storage.json')
const arr = JSON.parse(json)

// const { userRepository, writeUsers } = require('../repository/user.repository')

function getAllData() {
    // const arr = userRepository()
    if (!arr.length) throw new Error('Array is empty') 
    return arr
}

function getDataById(id) {
    // const arr = userRepository()
    const filteredData = arr.filter(el => el.id == id)
    if (!filteredData.length) throw new Error('Such id not found')
    return filteredData
}

function createUser(name, surname, email, pwd) {
    // const arr = userRepository()
    const newObj = {
        id: Math.max(...arr.map(el => el.id)) + 1, name, surname, email, pwd
    }
    if (arr.id !== newObj.id) arr.push(newObj)
    const filtered = arr.filter(el => el.email == email)
    // if (filtered) throw new Error('Such email already exists')
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr))
    return arr
}

function updateUser(id, name, surname, email, pwd) {
    // const arr = userRepository()
    const newData = {
        id, name, surname, email, pwd
    }
    const data = arr.findIndex(el => el.id == id)
    arr[data] = newData
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr))
    if (!data.length) throw new Error('User with such id not found')
    // writeUsers(data)
    return arr
}

function deleteUserData(id) {
    // const arr = userRepository()
    const data = arr.filter(el => el.id !== id)
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(data))
    // if (data.length == arr.length) throw new Error('Such id not found')
    // writeUsers(data)
    return data
}

module.exports = { getAllData, getDataById, createUser, updateUser, deleteUserData }
