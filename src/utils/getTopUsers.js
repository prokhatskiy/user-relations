export default function getTopUsers(userList = [], qty) {
    const result = [];

    function calcDistance(start) {
        for (let i = start - 1; i >= 0; i--) {
            const pair = {
                first: userList[i],
                second: userList[start],
                dist: Math.abs(userList[i].vector.x - userList[start].vector.x) +
                        Math.abs(userList[i].vector.y - userList[start].vector.y)
            };

            if (result.length < qty) {
                result.push(pair);
            } else if (result[qty - 1].dist === 0) {
                return;
            } else if (result[qty - 1].dist > pair.dist) {
                result.pop();
                result.push(pair);
            }

            result.sort((curPair, nextPair) => curPair.dist - nextPair.dist);
        }

        const nextStart = start - 1;

        if (nextStart >= 0) {
            calcDistance(nextStart);
        }
    }

    calcDistance(userList.length - 1);

    return result;
}
