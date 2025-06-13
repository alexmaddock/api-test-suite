# API Test Suite

Reference `polling.js` to see the core implementation of the retry function.

`test/numberAPITest.js` calls the function to run.

The core utility does not distinguish between success and failed network calls. It merely reruns based on the conditions set by the user, namely `conditionToSatisfy` in the parameter set. Ensure you return this result in the function call.

Further it is up to the user how they want to handle actual network responses, whether to exit on fail, or retry. You can also retry on success assuming you don't get the response you desire.

## Random Number API

https://www.randomnumberapi.com/

## Rapid API

https://rapidapi.com/search?sortBy=ByRelevance

# Improvements To Be Made

Currently the polling utility is a simple function that reruns every 1000 millseconds, 10 times over.

Improvements can be made to increment the timeout so it creates a backoff that grows exponentially. This can be added as a fourth parameter.

Would be worth considering how to stop people messing with the function, as the recursive nature can fill up the stack and make a lot of requests.

Could also put in extra logic to throw an error if `attemptsRemaining` param is set too high.

Some combination measuring starting timeout and attempts remaining could also be used to exit function based on the computed load it would put on a system.


