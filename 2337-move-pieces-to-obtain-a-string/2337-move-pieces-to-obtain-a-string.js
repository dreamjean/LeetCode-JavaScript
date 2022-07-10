/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    const n = start.length;
    let [i, j] = [-1, -1];
    
    if (edit(start) !== edit(target)) return false;
    
    while (i++ < n && j++ < n) {    
        while (i < n && start[i] === '_') i++;
        while (j < n && target[j] === '_') j++;
        
        if ((start[i] === 'L' && i < j) || (start[i] === 'R' && i > j)) return false;
    }
    
    return true;
};

const edit = str => str.replace(/_/g, '');