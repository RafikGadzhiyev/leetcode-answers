/*
  Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
*/
var FreqStack = function() {
    this.map = {};
    this.counted = {};
    this.max = 0;
};

FreqStack.prototype.push = function(val) {
    let counted = this.map[val] = (this.map[val] || 0) + 1;
    let values = this.counted[counted] || [];
    values.push(val);
    this.counted[counted] = values;
    this.max = Math.max(this.max, counted);
};

FreqStack.prototype.pop = function() {
    let values = this.counted[this.max],
        value = values.pop();
        this.map[value] --;
    if(values.length === 0){
        this.max--;
    }
    return value;
};
