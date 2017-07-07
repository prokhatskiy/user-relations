export default function getTopUsers(userList = [], qty) {
    // TBD

    const results = [];
    const totalQty = userList.length;

    if (totalQty === 0) {
        return results;
    }

    for (let n = 1; n < qty + 1; n++) {
        results.push({
            first: userList[totalQty - n*2 - 1],
            second: userList[totalQty - n*2 - 2]
        })
    }

    return results;
}
