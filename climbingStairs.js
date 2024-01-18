You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// All together
// Time Complexity: O(n)
// Space Complexity: O(1)


var climbStairs = function(n) {

    let dp = [];
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};


//Step by Step

var climbStairs = function(n) {
    //Create dynamic programming array
    let dp = [];
//The amount of ways you can get up n steps is the same amount of ways it takes to get up (n - 1) steps + (n - 2) steps.

// Therefore, we can calculate to base cases, the amount of ways to get up n=1 step (1), and the amount of ways to get up n=2 steps (2).
    dp[1] = 1;
    dp[2] = 2;
//Now for loop, setting the dynamic array value at next index equal to the previous two steps summed.
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    //Return the value at the array index of n
    return dp[n]
};

