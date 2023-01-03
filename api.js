export  {
    getUsers, createUser
}

function getUsers(url) {
  return fetch(url)
    .then(response => response.json());
}

function createUser(url, user) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}