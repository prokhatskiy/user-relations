export default function logIn(username, password, users) {
    return new Promise((resolve, reject) => {
        const authorizedUser = users.find(user => (
            user.login.password === password && user.login.username === username
        ));

        if (authorizedUser) {
            resolve(authorizedUser);
        } else {
            reject('login or password is incorrect');
        }
    });
}
