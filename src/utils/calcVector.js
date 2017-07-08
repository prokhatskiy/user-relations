const getNumberByWord = (word) =>
    [].reduce.call(word, (acc, char) => acc + char.charCodeAt(), 0) % 100;

export default function calcVector(name, surname) {
    return {
        x: getNumberByWord(name),
        y: getNumberByWord(surname)
    };
}
