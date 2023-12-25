const { getTaskFileStore, writeTasks } = require('./task-file.service')

function getAllTasks() {
    const arr = getTaskFileStore()
    if (!arr.length) throw new Error('Array is empty')
    return arr
}

function getTaskById(id) {
    const arr = getTaskFileStore()
    const filtered = arr.filter(el => el.id == id)
    if (!filtered.length) throw new Error('Such id not found')
    return filtered[0]
}

function updateTasks(id, title, date, hours, teacher) {
    const arr = getTaskFileStore()
    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('Such id not found')
    const newObj = {
        id, title, date, hours, teacher
    }
    arr[index] = newObj
    writeTasks(arr)
    return arr
}

function createNewTask(title, date, hours, teacher) {
    const arr = getTaskFileStore()
    const newTask = {
        id: arr.length + 1, title, date, hours, teacher
    }
    const filtered = arr.filter(el => el.title == newTask.title)
    if (filtered.length) throw new Error('Such title has already existed')
    arr.push(newTask)
    writeTasks(arr)
    return arr
}

function deleteTaskById(id) {
    const arr = getTaskFileStore()
    const filtered = arr.filter(el => el.id != id)
    if (filtered.length == arr.length) throw new Error('Such id not found')
    writeTasks(filtered)
    return filtered 
}

function updateSomePart(id, body) {
    const arr = getTaskFileStore()
    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('Such id not found')
    const item = arr[index]
    arr[index] = { ...item, ...body}
    writeTasks(arr)
    return arr
}

const object = {
    getAllTasks,
    getTaskById,
    updateTasks, 
    createNewTask,
    deleteTaskById,
    updateSomePart
}

module.exports = object