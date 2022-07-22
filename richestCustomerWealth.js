/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let wealthiest = 0;
    for(let i = 0; i < accounts.length; i++){
        if(accounts[i].reduce((a,c) => a + c) > wealthiest){
            wealthiest = accounts[i].reduce((a,c) => a + c);
        }
    }
    return wealthiest;
};