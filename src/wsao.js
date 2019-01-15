import axios from 'axios'

export function getRandomUser() {
    return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api").then(function (response) {
            resolve(response.data);
        }).catch(function (err) {
            console.log('oopsie!', err)
            reject(err)
        })
    })
}