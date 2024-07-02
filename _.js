
const _ = {
    // Returns a clamped number
    clamp(number, lower, upper){
        let clampedValue;
        if (number < lower){
            // if number is in the set (-infinity, lowerBound)
            clampedValue = lower;
        }else if ( number > upper){
            // if number is in the set (upperBound, infinity)
            clampedValue = upper;
        }else {
            // this code block will run if the value of number is the set [lowerBound, upperBound]
            clampedValue = number;
        }
        // return the clamped value
        return clampedValue
    },
    // Returns true or false
}

// Do not write or modify code below this line.
module.exports = _;
