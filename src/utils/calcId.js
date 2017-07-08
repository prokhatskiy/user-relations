import md5 from 'md5';

export function calcUserId(user) {
    return md5(
        user.id.name +
        user.id.value +
        user.name.first +
        user.name.last +
        new Date().getTime()
    );
}

export function calcCommentId(authorId, targetId) {
    return md5(authorId + targetId + new Date().getTime());
}
