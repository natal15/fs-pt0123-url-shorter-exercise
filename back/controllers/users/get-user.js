module.exports = () => async (req, res, next) => {
    const { username } = res.locals

    res.status(200).json({
        success: true,
        data: {
            username,
        },
    })
}