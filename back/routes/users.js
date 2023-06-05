const router = require('express').Router()
const { authorizer } = require('../middlewares')

const usersControllers = require('../controllers/users')

module.exports = () => {
    router.get('/', authorizer, usersControllers.getUser())

    return router
}