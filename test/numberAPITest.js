import getRandomNumber from '../numberAPI.js';
import recursivePoll from '../polling.js';
import { expect } from 'chai';

describe('Number API', () => {

    it('Demonstrates poll in action, by setting limits to force a recursive execution, but force test pass state', async function () {
        const pollDelayMs = 100;
        const pollAttempts = 10;
        const cumulativeOutboundPollTime = pollDelayMs * pollAttempts;
        const timeoutLatencyBuffer = cumulativeOutboundPollTime * (pollAttempts * 1.5);

        console.log(`Poll time in seconds (without latency) : ${cumulativeOutboundPollTime / 1000}`); // needs work to read real time delays using perf_hooks
        console.log(`Timeout limit in seconds: ${timeoutLatencyBuffer / 1000}`);

        this.timeout(timeoutLatencyBuffer);

        const randomNumber = getRandomNumber;

        const result = await recursivePoll(pollAttempts, randomNumber, (outcome) => { return outcome[0] < 0.9 }, pollDelayMs);

        expect(result[0]).greaterThan(0);

    });

    it('Should Fail The Poll', async function () {
        const pollDelayMs = 100;
        const pollAttempts = 10;
        const cumulativeOutboundPollTime = pollDelayMs * pollAttempts;
        const timeoutLatencyBuffer = cumulativeOutboundPollTime * (pollAttempts * 1.5);

        console.log(`Poll time in seconds (without latency) : ${cumulativeOutboundPollTime / 1000}`); // needs work to read real time delays
        console.log(`Timeout limit in seconds: ${timeoutLatencyBuffer / 1000}`);

        this.timeout(timeoutLatencyBuffer);

        const randomNumber = getRandomNumber;

        const result = await recursivePoll(pollAttempts, randomNumber, (outcome) => { return outcome[0] <= 100 }, pollDelayMs);

        expect(result[0]).greaterThan(100);

    });

    it('Should Run An Attempt To Be Less Than 10', async function () {
        const pollDelayMs = 100;
        const pollAttempts = 10;
        const cumulativeOutboundPollTime = pollDelayMs * pollAttempts;
        const timeoutLatencyBuffer = cumulativeOutboundPollTime * (pollAttempts * 1.5);

        console.log(`Poll time in seconds (without latency) : ${cumulativeOutboundPollTime / 1000}`); // needs work to read real time delays
        console.log(`Timeout limit in seconds: ${timeoutLatencyBuffer / 1000}`);

        this.timeout(timeoutLatencyBuffer);

        const randomNumber = getRandomNumber;

        const result = await recursivePoll(pollAttempts, randomNumber, (outcome) => { return outcome[0] < 10 }, pollDelayMs);

        expect(result[0]).lessThan(10);

    });

    it.skip('should poll basic math random function', () => {

        const generateRandomNumber = () => {
            return Math.random();
        };

        recursivePoll(10, generateRandomNumber, (outcome) => {return outcome < 0.05}); // have to pass in generateRandomNumber as reference since internally poll calls the function

    });

});