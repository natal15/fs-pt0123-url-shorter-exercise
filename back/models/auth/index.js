const { insertUser, selectByEmail } = require('./queries')

const createUser = (db) => async (email, username, password) => {
    try {
        await db.query(insertUser(email, username, password))
        return {
            ok: true
        }
    } catch(error) {
        console.info('> create user error: ', error.message)
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectUser = (db) => async (email, compareFn) => {
    try {
        const user = await db.maybeOne(selectByEmail(email))

        if(!user) return {
            ok: false,
            error_code: 'wrong_data',
        }

        const areEqual = await compareFn(user.password)

        if(!areEqual) return {
            ok: false,
            error_code: 'wrong_data',
        }

        return {
            ok: true,
            content: {
                email: user.email,
                username: user.username,
            }
        }
    } catch(error) {
        console.info('> create user error: ', error.message)
        return {
            ok: false,
            message: error.message,
        }
    }
}

module.exports = {
    createUser,
    selectUser,
}