export default function getTopUsers(userList = [], qty) {
    const sortByX = (curUser, nextUser) => (
        curUser.vector.x - nextUser.vector.x
    );

    const sortByDist = (curPair, nextPair) => (
        curPair.dist - nextPair.dist
    );

    const getDist = (male, female) => (
        Math.sqrt(
            Math.pow(male.vector.x - female.vector.x, 2) +
            Math.pow(male.vector.y - female.vector.y, 2)
        )
    );

    const getPairs = (users) => {
        const result = [];
        const male = [];
        const female = [];

        users.forEach((user) => {
            if (user.gender === 'male') {
                male.push(user);
            } else {
                female.push(user);
            }
        });

        for (let i = 0; i < male.length; i++) {
            for (let j = 0; j < female.length; j++) {
                const dist = getDist(male[i], female[j]);

                const pair = {
                    male: male[i],
                    female: female[j],
                    dist
                };

                if (result.length < qty) {
                    result.push(pair);
                } else if (result[result.length - 1].dist > dist) {
                    result.pop();
                    result.push(pair);
                }

                result.sort(sortByDist);
            }
        }

        return result;
    };

    const getLeftExtremePoint = (users, median, delta) => {
        const results = [];

        for (let i = 0; i < users.length; i++) {
            const index = users.length - 1 - i;

            if (Math.abs(median.x - users[index].x) <= delta) {
                results.push(users[index]);
            } else {
                return results;
            }
        }

        return results;
    };

    const getRightExtremePoints = (users, median, delta) => {
        const results = [];

        for (let i = 0; i < users.length; i++) {
            if (Math.abs(median.vector.x - users[i].vector.x) <= delta) {
                results.push(users[i]);
            } else {
                return results;
            }
        }

        return results;
    };

    // сортируем юзеров по оси x
    const sortedXUsers = userList.sort(sortByX);
    const middleIndex = Math.floor(sortedXUsers.length / 2);
    // делим множество юзеров на два равных подмножества
    const usersA = sortedXUsers.slice(0, middleIndex);
    const usersB = sortedXUsers.slice(middleIndex, sortedXUsers.length);

    // находим по 5 ближайших пар в каждом подмножестве
    const resultA = getPairs(usersA);
    const resultB = getPairs(usersB);

    // выбираем ближайшие 5 пар из предыдущих результатов сохраняем в tempResults
    const tempResult = [].concat(resultA, resultB).sort(sortByDist).slice(0, qty);

    // находим точки лежащие на краях подмножеств, растояние от края до точки должно быть меньше или равно
    // самому большому растоняию из tempResults
    const maxMinPair = tempResult[tempResult.length - 1];
    const minDist = maxMinPair && maxMinPair.dist;
    const medianPoint = sortedXUsers[middleIndex];
    const leftExtremePoints = getLeftExtremePoint(usersA, medianPoint, minDist);
    const rightExtremePoints = getRightExtremePoints(usersB, medianPoint, minDist);

    const resultC = [];

    // находим растояния между точками лежащими в разных подмножествах
    for (let i = 0; i < leftExtremePoints.length; i++) {
        for (let j = 0; j < rightExtremePoints.length; j++) {
            if (leftExtremePoints[i].gender !== rightExtremePoints[j].gender) {
                const dist = getDist(leftExtremePoints[i], rightExtremePoints[j]);

                const pair = {
                    male: leftExtremePoints[i].gender === 'male' ? leftExtremePoints[i] : rightExtremePoints[j],
                    female: leftExtremePoints[i].gender === 'female' ? leftExtremePoints[i] : rightExtremePoints[j],
                    dist
                };

                resultC.push(pair);
            }
        }
    }

    // мерджим и находим ближайшие 5 пар
    return [].concat(tempResult, resultC).sort(sortByDist).slice(0, qty);
}
