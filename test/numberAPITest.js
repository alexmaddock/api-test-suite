import assert from 'assert';
import getRandomNumber from '../numberAPI.js';
import recursivePoll from '../polling.js';

describe('Number API', ()=> {
    
    it.skip('should poll basic math random function', ()=> {
        
        const generateRandomNumber = () => {
            return Math.random();
        };
    
        // const randomNumber = generateRandomNumber();
        recursivePoll(10, generateRandomNumber); // have to pass in generateRandomNumber as reference since internally poll calls the function

    });


    it('should poll actual number endpoint', async()=> {
        const randomNumber = getRandomNumber;
        // console.log('Random Number is: ', randomNumber[0]);

        await recursivePoll(10, randomNumber, (outcome) => {outcome < 50});

        // Might have to try something like const randomNumber = getRandomNumber(); await randomNumber[0]; to get index result


    }).timeout(5000);

});