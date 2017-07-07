export default function logIn(username, password, users) {
    return users.find(user => (
        user.login.password === password && user.login.username === username
    ));
}
