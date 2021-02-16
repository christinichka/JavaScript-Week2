let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let initials = language.slice(0,1)+language.slice(4,5);
console.log(initials);


//b) Without using .slice(), use method chaining to accomplish the same thing.

// .charAt(9)
let initialsChain = language.substring(0, 1)+language.charAt(4);
console.log(initialsChain)


//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
let longChain = language.slice(5,4)+language.charAt(7)+language.substr(0,3);

console.log(longChain);
