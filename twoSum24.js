// brute force
//Time Complexity: O(n^2)
//Space Complexity: O(1)


var twoSum = function(nums, target) {
    //Loops through array starting at index 0
    for(let i = 0; i < nums.length; i++){
        //loops through array starting at index 1
        for(let j = i + 1; j < nums.length; j++){
            //if element + adjacent element === target
            if(nums[i] + nums[j] === target){
                //returns indexes of elements
                return [i,j]
            };
    }
}
};

// Hashmap
//Time Complexity: O(n) -- Linear Time
//Space Complexity: O(n) -- Linear Space


var twoSum = function(nums,target) {
    //create map
    let map = {};

    //loop through array
    for(let i = 0; i < nums.length; i++){
        //grabs value of current index
        let value = nums[i];
        //computes complement of value
        let complement = target - value;

        //if complement is already property in map
        if(map[complement] !== undefined){
        // return its value which is sets to its index
            return [map[complement], i]
        }else {
        // Else, adds current value as property, index as value to map
            map[value] = i;
        } 

    }
};
›