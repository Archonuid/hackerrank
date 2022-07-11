let input = [1,2,3,3,3,3,6,7,8]
const n = input.length;
    const mean = input.reduce((a, b) => a + b)/n;
    console.log(mean);

    let median;
    if(n % 2 != 0){
        let mid = Math.floor(n/2);
        median = mid;
    }
    else {
        let mid = Math.floor(n/2);
        median = input[mid] + input[mid+1]
    }
    console.log(median);

    var mode = function mode(input) {
        return input.reduce(function(current, item) {
            var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
            if (val > current.greatestFreq) {
                current.greatestFreq = val;
                current.mode = item;
            }
            return current;
        }, {mode: null, greatestFreq: -Infinity, numMapping: {}}).mode;
    };
    
    console.log(mode(input));


//RESULT:
//4
//4
//3