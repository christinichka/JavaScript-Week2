//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let  code1 = 'Rutabagas';
let  code2 = 'Chemistry';

specialCode = "";

for (i = 0; i < code1.length; i++) {
  specialCode += code1.charAt(i);
  specialCode += code2.charAt(i);
}
console.log(specialCode);
