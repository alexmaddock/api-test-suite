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
const recursivePoll = async(attemptsRemaining = 10, fn, conditionToSatisfy) => {
    attemptsRemaining --; // 2. Decrement value to avoid forever loop.
    const result = await fn(); // call function from reference passed in.
    console.log('My result is:', result);
    // 1. Base Case
    if(attemptsRemaining == 0) {
        return result; // 3. Return statement to have a final result.
    }

    console.log("Is this true:", conditionToSatisfy(result))

    if(conditionToSatisfy(result)) { // add a truth statement to resolve - ideal for cb function use
        console.log("Condition satisfied:", result)
        return result;
    }
 
    else {
        console.log(`Return statement not resolved, result was ${result}, rerunning function.`);
        console.log(`Attempts remaining ${attemptsRemaining}`);
        // 3. Return statement to continue executing
        return recursivePoll(attemptsRemaining, fn, conditionToSatisfy) // 4. function self reference.
    }
}

export default recursivePoll;