/*
  A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, 
time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

Runtime: 97 ms
Memory: 47.8 MB
*/

var invalidTransactions = function(t) {
    const invalid = [];
    const data = {};
    const indicies = new Set();
    t = t.map(v => v.split(",")).sort((a, b) => a[1] - b[1]);
    for(let i = 0; i <t.length; ++i){
        if(t[i][2] > 1000){
            invalid.push(t[i].join`,`);
            indicies.add(i);
        }
        let d = data[t[i][0]];
        
        if(d){
            for(let j = 0; j < d.length; ++j){
                if(
                    t[i][3] !== d[j][3] && Math.abs(t[i][1] - d[j][1]) <= 60
                ){
                    if(!indicies.has(i)) {
                        invalid.push(t[i].join`,`);
                        indicies.add(i);
                    }
                    if(!indicies.has(d[j][4])){
                        invalid.push(d[j].slice(0, -1).join`,`);
                        indicies.add(d[j][4]);
                    }
                }
            }
        }
        
        if(data[t[i][0]]) {
            data[t[i][0]].push([...t[i], i])            
        }else{
            data[t[i][0]] = [[...t[i], i]];
        }
        
        
    }
    
    return invalid;
};
