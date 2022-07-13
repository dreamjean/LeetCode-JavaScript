/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for (let i = 0; i < asteroids.length; i++) {
        const num = asteroids[i];
        if (num > 0 || !stack.length || stack.at(-1) < 0)stack.push(num);
        else if (stack.at(-1) <= -num) 
            if (stack.pop() < -num) i--;     
    }
    
    return stack;
};