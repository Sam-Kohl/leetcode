/**
 Parameters: array of strings
 Return: String
 Ex: Input: strs = ["flower","flow","flight"]
Output: "fl"
 */
var longestCommonPrefix = function(strs) {
//     Sorts the array in alphabetical order
 let sorted = strs.sort();
//     for loop running for first array element length
  for (let i = 0; i < sorted[0].length; i++) {
//       Checks if each char of first array element === each char in last array element
    if (sorted[0][i] !== sorted[sorted.length - 1][i]){
//         Returns substring of each char in first element until characters in first/last element don't match
        return sorted[0].substr(0, i);
    } 
  }
//     Returns '' if string empty
  return sorted[0];
};
