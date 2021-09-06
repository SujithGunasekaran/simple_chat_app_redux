const UserInfo = require('../UserInfo');
const User = new UserInfo();
const { v4 } = require('uuid');

exports.loginUser = async (req, res) => {
    try {
        const savedUser = await User.addUser({
            ...req.body,
            userID: v4()
        });
        if (!savedUser) throw new Error('Error while saving the userInfo');
        res.status(200).json({
            status: 'Success',
            userInfo: savedUser
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'Failed',
            message: err.message
        })
    }
}
