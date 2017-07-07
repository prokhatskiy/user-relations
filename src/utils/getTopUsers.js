export default function getTopUsers(userList = [], qty) {
    // TBD

    const results = [];
    const totalQty = userList.length;

    if (totalQty === 0) {
        return results;
    }

    for (let n = 1; n < qty + 1; n++) {
        results.push({
            first: userList[totalQty - 1 - (n * 2)],
            second: userList[totalQty - 2 - (n * 2)]
        });
    }

    return results;
}
