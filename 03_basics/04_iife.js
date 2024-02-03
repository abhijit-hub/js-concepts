// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


IIFE allows for the creation of private variables and functions within its scope.
These variables and functions cannot be accessed or modified from outside the IIFE, providing a level of privacy and data protection
