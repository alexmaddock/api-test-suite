# api-test-suite
A test suite with different api functions and tests to demonstrate concepts and experiment with ideas. 

My hope is to come up with any number of solutions to the problems encountered over the years in testing. Obviously they are not absolute, but maybe act as guiding principles for future considerations.

## API Modules In Use
Samples will be primarily in Fetch, and some in Axios.

## Concepts To Try And Cover
1. Polling function
- A way to retry endpoints should the results not give us what we want the first time. Either record hasn't updated, or is waiting x number of minutes / seconds to process based on some rules we do not control.
- Ideally want a way to emulate this as unit tests
- Possibly build our own API to connect to, to simulate such scenarios
2. Determine X scenarios based on Y inputs for a set of tests
- The practical scenario of this is we have any number of inputs, and based on these we want to know how many scenarios need to be tested.
- Factorial perhaps sheds light on this?
- Algorithm to test all permutations of a set - Heap's Algorithm?
- Travelling Salesman Problem perhaps? Fac(n)/2

