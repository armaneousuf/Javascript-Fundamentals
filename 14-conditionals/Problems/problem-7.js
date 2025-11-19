// Given a password string, print:

// “Strong” if length ≥ 8

// “Medium” if length is between 5–7

// “Weak” if length < 5

let password = "myPassword123";

if (password.length >= 8) {
    console.log("password is Strong");
}

else if (password.length >= 5) {
    console.log("password is Medium");
}
else {
    console.log("password is Weak");
}