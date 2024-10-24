let users = [
    {
        id: 1,
        name: 'jonas',
        active: true 
    },
    {
        id: 2,
        name: 'canofree',
        active: false
    },
];

const addUser = (id ,name, active) => {
    const userNew = {
        id: id,
        name: name,
        active: active
    };
    users.push(userNew)
    const search = users.find(user => user.id === id)
    return search.name
}



const getUser = (id) => {
    const user = users.find(user => user.id === id)
    console.log(user.name)
    console.log(user.active)
    console.log(user.id)
    return
}

const activeUsers = () => {
    const noss = users.filter(user => user.active === true).length;
    return noss
} 

module.exports = getUser
module.exports = addUser
module.exports = activeUsers