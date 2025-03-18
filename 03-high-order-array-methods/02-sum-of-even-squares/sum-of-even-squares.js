function sumOfEvenSquares(numbers) {
    return numbers.filter(num => num % 2 == 0)
        .map(num => num ** 2)
        .reduce((acc, item) => {
            return acc + item;
        }, 0);
}

module.exports = sumOfEvenSquares;
