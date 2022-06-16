const nonConstructibleCoinsMachine = coins => {
    // sort the coins in crescent order, because we need to find the minimum integer in the sum
    coins.sort((a,b) => a - b);

    let accumulated = 0;
    coins.forEach(coin => {
        const accumulatedPlusOne = accumulated + 1

        if (coin > accumulatedPlusOne) return accumulatedPlusOne;

        accumulated += coin;
    })
    
    return accumulated + 1; // accumulated plus one, because we want to find the minimum integer value that we can't create
}

module.exports = nonConstructibleCoinsMachine;
