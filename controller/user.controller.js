let users = [
    {"id": 1, "gender": "Male", "name": "Arabi", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
    {"id": 2, "gender": "Male", "name": "Arabi2", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
    {"id": 3, "gender": "Male", "name": "Arabi3", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
    {"id": 4, "gender": "Male", "name": "Arabi4", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
    {"id": 5, "gender": "Male", "name": "Arabi5", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
    {"id": 6, "gender": "Male", "name": "Arabi6", "contact": "01811122223333", "address": "sandwip", "photoURL": "https://www.pexels.com/photo/photo-of-perched-parakeet-1661179/"},
]

module.exports.getAllUsers = (req, res) => {
    const {limit, page} = req.query;
    res.send(users.slice(0, limit))
}

module.exports.getAUser = (req, res) => {
    const {id} = req.params
    const findUser = users.find(user => user.id == id)
    res.send(findUser)
}

module.exports.addAUser = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.send(users)
}

module.exports.updateUser = (req, res) => {
    const {id} = req.params;
    const filter = {_id : id}
    const newData = users.find(user => user.id === Number(id))
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData)
}

module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
}