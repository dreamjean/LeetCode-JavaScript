/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    
    for (const [boxes, unitPerBox] of boxTypes) {
        let x = Math.min(boxes, truckSize);
        res += (x * unitPerBox)
        truckSize -= x;
        if (!truckSize) break;
    }
    
    return res;
};
   
