const controllers = require('./controllers')
const router = require('express').Router()
module.exports = () => {
    router.get('/representantes', controllers.allRepresentantes),
    router.get('/representantes/:id', controllers.getRepresentantes),
    router.post('/representantes', controllers.createRepresentantes),
    router.delete('/representantes/:id', controllers.deleteRepresentantes),
    router.put('/representantes/:id', controllers.editRepresentantes)
}
