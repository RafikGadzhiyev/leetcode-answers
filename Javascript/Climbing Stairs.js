/*
  You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    let a = 1,
        b = 1;
    for(let i = 1; i < n; ++ i){
        [a, b] = [b, a + b];
    }

    return b;
};
