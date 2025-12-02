// Task-3:
// Check whether a string contains all the vowels 'a', 'e', 'i', 'o', 'u'

const text = "I am learning JavaScript and practicing daily.".toLowerCase();

if (
    text.includes('a')&
    text.includes('e')&
    text.includes('i')&
    text.includes('o')&
    text.includes('u')
) {
    console.log("Yes, it does");
} else {
    console.log("No, it doesn't");
}
