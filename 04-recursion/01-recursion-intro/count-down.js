function countDown(num) {
    if (num <= 0) {
        console.log(`All done!`);
        return;
    }

    console.log(num);
    num--;
    countDown(num);

}

module.exports = countDown;
