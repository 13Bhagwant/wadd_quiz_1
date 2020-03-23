const a = 'my strong bed'
const b = 'lumberjacks'
const c = 'falling trees'
function isIsogram(str) {

    var word = str.split(''); //split the word into an array
    for (var i = 0, j = 1; i < word.length - 1; i++, j++) {
      if (word[i] == word[j]){//check if the character right after the current is the same
                                 //as the current character
        
        return false;      //if it is - it's not an isogram
      }
    }
    return true;   //loop has passed - it's an isogram
   }
console.log(isIsogram(c));

  