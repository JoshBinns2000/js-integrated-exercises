// IMMEDIATELY-INVOKE-FUNCTION-EXPRESSION

(function computePi() {
    function inCircle(x, y){
        function computeDistance(x, y) {
            return Math.sqrt(x * x + y * y);
        }

        return computeDistance(x, y) < 1;
    }

    let pointsInCircle = 0;
    let numberOfPoints = 1000;

    for (let i = 0; i < numberOfPoints; i++) {
        const x = Math.random();
        const y = Math.random();

        if (inCircle(x, y)) pointsInCircle++;
    }

    const pi = pointsInCircle / numberOfPoints * 4.0;

    console.log(`Pi = ${pi}`);
})();

// enclosing function in () makes it a function expression which makes it not bound to the enclosing scope!


function countDown() {
    let i = 3;
    let intervalId = setInterval(function() {
        console.log(i || "Lift-off!");
        i--;
        if (i < 0) clearInterval(intervalId);
    }, 1000);
}
countDown();