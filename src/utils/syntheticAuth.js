export default function syntheticAuth(username, password, usersmap) {
    return new Promise((resolve, reject) => {
        const authorizeduser = Object.keys(usersmap).map(id => usersmap[id]).find(user => (
            user.login.password === password && user.login.username === username
        ));

        if (authorizeduser) {
            resolve(authorizeduser);
        } else {
            reject('login or password is incorrect');
        }
    });
}
