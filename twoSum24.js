// brute force
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            };
    }
}
};

// Hashmap
var twoSum = function(nums,target) {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complement = target - value;

        if(map[complement] !== undefined){
            return [map[complement], i]
        }else {
            map[value] = i;
        } 

    }
};
