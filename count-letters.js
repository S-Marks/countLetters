var str = process.argv.slice(2).join("").split("");

function countLetters(str) {
  var letters = {};
  for(var i in str) {
    var char = str[i];
    if(letters[char]) {
      letters[char] += 1
    } else {
      letters[char] = 1;  
    }

    // if(str[i] !=) {
    //   str[i] += 1
    // } else if
  }

  console.log(letters);
};

countLetters(str);
