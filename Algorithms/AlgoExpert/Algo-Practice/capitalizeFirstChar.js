// Try to write a function that capitalizes the first letter of each word in a sentence. 
// For example, "hello world" should become "Hello World".

function capitalizeFirstChar(str) {
    let arr = str.split(" ");

    let newString = arr.map((word) => {
        const firstChar = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase(); 
        return firstChar + restOfWord;
    })

    return newString.join(' '); 

}

console.log(capitalizeFirstChar("hello world"));