

class UserInfo {

    userInfo = [];


    addUser(newUser) {
        return new Promise((resolve, reject) => {
            let userData = JSON.parse(JSON.stringify(this.userInfo));
            this.userInfo = [
                ...userData,
                newUser
            ]
            const savedUser = this.userInfo.find(user => user.userID === newUser.userID);
            if (!savedUser) reject('Something went wrong');
            resolve(savedUser);
        })
    }


    getUserList() {
        return new Promise((resolve) => {
            resolve(this.userInfo);
        })
    }

}

module.exports = UserInfo;
