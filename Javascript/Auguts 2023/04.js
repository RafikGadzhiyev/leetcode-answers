// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.


var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict);
    const queue = [0];
    const visited = Array(s.length + 1).fill(false);

    while(queue.length) {
        let offset = queue.shift();
        if(offset === s.length) return true;
        for(let part = offset + 1; part <= s.length; ++part){
            if(visited[part]) continue;
            if(words.has(s.substring(offset, part))) {
                queue.push(part);
                visited[part] = true;
            }
        }
    }

    return false;
};
