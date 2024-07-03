
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
    inRange(number, start, end){
        // if end not provided, start= 0 and end equal start
        if (typeof end === 'undefined'){
            end = start;
            start = 0;
        }
        
        
        // swap the value when start is larger than end vlaue
        if (start > end){
            const temp = start; // store start value to access later
            start = end;
            end = temp; // reassign the end to be equal to initially provided start
            // the value of start and end have been swaped
        }

        // return true if the value of number is in the set [start, end)
        if (number >= start && number < end){
            return true;
        }else {
            // this code block will only run if number is not within the range
            return false;
        }

    },
    // Returns an array of words that we given in a string where words are separated by spaces  
    words(sentence){
        const sentenceWords = sentence.split(' ');// take all the words separated by space and make them an array
        return sentenceWords;
    }
}

// Do not write or modify code below this line.
module.exports = _;
