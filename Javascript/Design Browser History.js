/*
  You have a browser of one tab where you start on the homepage and you can visit another url, 
  get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. 
If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history.
If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
*/

var BrowserHistory = function(homepage) {
    this.history = {
        visited: [homepage],
        forward: [],
        lastPage: homepage
    }
};

BrowserHistory.prototype.visit = function(url) {
    this.history.forward = [];
    this.history.visited.push(url);
    this.history.lastPage = url;
    return this.history.lastPage;
};

BrowserHistory.prototype.back = function(steps) {
    while(steps-- && this.history.visited.length > 1){
        this.history.forward.push(this.history.visited.pop());
        this.history.lastPage = this.history.visited[this.history.visited.length - 1];
    }

    return this.history.lastPage
};

BrowserHistory.prototype.forward = function(steps) {
    while(steps-- && this.history.forward.length){
        this.history.visited.push(this.history.forward.pop());
        this.history.lastPage = this.history.visited[this.history.visited.length - 1];
    }

    return this.history.lastPage;
};
