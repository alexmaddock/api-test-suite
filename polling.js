// helper functions to hit endpoint repeatedly should should results not be present yet

// standard async await poll

// recursive function
/**
 * Conditions for a recursive function are
 * 1. Base case - need an exit criteria to evaluate usually in the form of a conditional check: if input = 0; return
 * 2. Decrement to ensure we are going down in the number off attempts we make: attempts--
 * 3. Return statements on the values we return (cannot build without these otherwise it will fill run till it fills stack): return result / return functionName(params...)
 * 4. A means by which the functions nature is self referential i.e. calling itself has all the necessary conditions to gracefully resolve: return recursivePoll(param1, param2NewState, param--)
 */
const recursivePoll = () => {
    // 1. Base Case
    if(attemptsRemaining == 0) {
        return $something; // 3
    }
    // 
    else {
        // 3. Return statement to continue executing
        return recursivePoll() // 4. function self reference + 2. Decrement
    }
}