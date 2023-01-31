/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let arr = []
    for(let i =0; i<scores.length;i++){
        arr.push([ages[i],scores[i]])
    }
    arr.sort((a,b)=>a[0]==b[0] ? a[1] - b[1] : a[0] - b[0])
    
    let res = new Array(scores.length).fill(0);
    res[0] = arr[0][1];

    for(let i = 1; i<arr.length; i++){
        let [fa , fs] = arr[i]
        res[i] = fs;
        for(let j =i-1; j>=0; j--){
            let [sa, ss] = arr[j]
            if(sa == fa) res[i] = Math.max(res[i], res[j] + fs);
            else{
                if(fs >= ss ){
                    res[i] = Math.max(res[i], res[j] + fs);
                }
            }
        }
    }
    return Math.max(...res)
};