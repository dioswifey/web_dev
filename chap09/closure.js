function makeCounter() {
    let count = 0;

    return function () {
        count += 1;
        console.log(count);
    };
}

const counter = makeCounter();

counter();
counter();
counter();