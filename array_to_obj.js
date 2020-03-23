const array = ['apple', 'pear', 'bananas', 'watermelon', 'mango', 'pear', 'apple', 'bananas', 'pear', 'strawberry', 'pineapple'];//array of fruits
function countOflengthOfstringsOfArray(array) {
    const newArr = array//newArr array is equal to array
    const count = {}//this will be a object that will have fruits as keys and there length as values 
    for (let word of newArr) {//we use for of loop in this it applies of newArr
        count[word] = word.length// count of word is equal to the length of word 
    }
    return count//it will return the value of count
  }
  console.log(countOflengthOfstringsOfArray(array));//it will call the function countOflengthOfstringsOfArray applied to array.
  
