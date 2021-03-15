module.exports = function toReadable (number) {
    let ArrayTo20 = [
        'zero', 
        'one', 
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine', 
        'ten', 
        'eleven', 
        'twelve', 
        'thirteen', 
        'fourteen', 
        'fifteen', 
        'sixteen', 
        'seventeen', 
        'eighteen', 
        'nineteen', 
        'twenty'];
    let ArrayDecimal = [
        'twenty', 
        'thirty', 
        'forty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety'];
    let ArrayHundred = ['hundred'];

    function numberTo99 (number) {

        if (number <= 20) {
            return ArrayTo20[number];
        }

        if (number > 20 && number < 100) {
            let decimal = Math.floor(number/10);
            if (number%10===0) {
                return ArrayDecimal[decimal-2];
            }
            else {
                return (ArrayDecimal[decimal-2] + ' ' + ArrayTo20[number%10]);
            }
        }
    }

    function number100to999 (number) {
        if (number === 100) {
            return (ArrayTo20[1] + ' ' + ArrayHundred[0]);
        }
        if (number%100 === 0) {
            let hundred = Math.floor(number/100);
            return (ArrayTo20[hundred] + ' ' + ArrayHundred[0]);
        }
        if (number > 100 && number < 1000) {
            let hundred = Math.floor(number/100);
            number = number.toString().slice(-2);
            number = parseInt(number, 10);
            return (ArrayTo20[hundred] + ' ' + ArrayHundred[0] + ' ' + numberTo99(number));
        }
    } 
    
    if (number < 100) {
        return numberTo99(number);
    }
    
    if (number >= 100 && number < 1000) {
        return number100to999(number);
    }
}
