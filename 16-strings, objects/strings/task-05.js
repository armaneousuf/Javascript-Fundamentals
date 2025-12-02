// Task-5:
// Capitalize every first letter of each word in a string.

const text = "i am learning javascript and practicing daily.";

const word = text.split(' ');
for (i = 0; i < word.length; i++){
    word[i] = (word[i][0].toUpperCase() + word[i].slice(1));
    
}

console.log(word.join(' '));