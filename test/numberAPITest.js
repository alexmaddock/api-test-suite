import assert from 'assert';
import getRandomNumber from '../numberAPI.js';
import recursivePoll from '../polling.js';

describe('Number API', ()=> {
    
    it('should poll basic math random function', ()=> {
        
        const generateRandomNumber = () => {
            return Math.random();
        };
    
        // const randomNumber = generateRandomNumber();
        recursivePoll(10, generateRandomNumber); // have to pass in generateRandomNumber as reference since internally poll calls the function

    });


    it('should poll actual number endpoint', async()=> {
        const randomNumber = await getRandomNumber();
        console.log('Random Number is: ', randomNumber[0]);


    });

});