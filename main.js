import {getUsers, createUser} from './api.js';

displayUsers()

document.getElementById('submit-create-user').addEventListener('click', function (event) {
  event.preventDefault()
    const user = {
        name: document.getElementById('user-name').value
    }
    createUser('http://localhost:3000/api/v1/users', user).then(displayUsers)
})

function displayUsers() {
    getUsers('http://localhost:3000/api/v1/users')
        .then(users => {
            const userListElem = document.getElementById('user-list')
            userListElem.innerHTML = users.map(user => `<li>${user.name}</li>`).join('');
        })
}