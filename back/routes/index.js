const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes())

    return router
}