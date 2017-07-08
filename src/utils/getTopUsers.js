export default function getTopUsers(userList = [], qty) {
    const result = [];
    let iterator = 0;

    function calcDistance(start, stop) {
        for (let i = start + 1; i < stop; i++) {
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
            iterator++;
        }

        const nextStart = start + 1;

        if (nextStart < stop) {
            calcDistance(nextStart, stop);
        }
    }

    calcDistance(0, userList.length);

    console.log(iterator);

    return result;
}
