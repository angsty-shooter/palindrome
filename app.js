// Examples
  // 'taco cat' => true
  // 'kayak' => true 
  // 'hello' => false | 'aibohphobia' (the fear of palindromes)
  // Output: true      | true    | false   | true

  function isPalindrome(str) {
    for(let i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false
        }
    }
    return true


  }

  console.log(isPalindrome('taco cat'))
  console.log(isPalindrome('kayak'))
  console.log(isPalindrome('hello'))
  console.log(isPalindrome('aibohphobia'))