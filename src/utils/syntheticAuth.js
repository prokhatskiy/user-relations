export default function login(username, password, usersmap) {
    return new promise((resolve, reject) => {
        const authorizeduser = object.keys(usersmap).map(id => usersmap[id]).find(user => (
            user.login.password === password && user.login.username === username
        ));

        if (authorizeduser) {
            resolve(authorizeduser);
        } else {
            reject('login or password is incorrect');
        }
    });
}
