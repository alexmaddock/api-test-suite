import getRandomNumber from '../numberAPI.js';
import recursivePoll from '../polling.js';
import { expect } from 'chai';

describe('Number API', ()=> {

    it('Demonstrate poll in action, by setting limits to force a recursive execution, but force test pass state', async function() {
        const pollDelayMs = 100;
        const pollAttempts = 10;
        const cumulativeOutboundPollTime = pollDelayMs * pollAttempts;
        const timeoutLatencyBuffer = cumulativeOutboundPollTime * (pollAttempts * 1.5);

        console.log(`Poll time in seconds (without latency) : ${maximumPollTime / 1000}`); // needs work to read real time delays
        console.log(`Timeout limit: ${timeoutLatencyBuffer / 1000}`);

        this.timeout(timeoutLatencyBuffer);

        const randomNumber = getRandomNumber;

        const result = await recursivePoll(pollAttempts, randomNumber, (outcome) => {return outcome[0] < 0.9}, pollDelayMs);

        expect(result[0]).greaterThan(0);

    });

    it.skip('should poll basic math random function', ()=> {

        const generateRandomNumber = () => {
            return Math.random();
        };

        recursivePoll(10, generateRandomNumber, (outcome) => {return outcome < 0.5}); // have to pass in generateRandomNumber as reference since internally poll calls the function

    });

});