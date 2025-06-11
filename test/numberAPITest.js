import getRandomNumber from '../numberAPI.js';
import recursivePoll from '../polling.js';

describe('Number API', ()=> {
    
    it.skip('should poll basic math random function', ()=> {
        
        const generateRandomNumber = () => {
            return Math.random();
        };
    
        recursivePoll(10, generateRandomNumber); // have to pass in generateRandomNumber as reference since internally poll calls the function

    });


    it('should poll actual number endpoint', async()=> {

        const randomNumber = getRandomNumber;

        await recursivePoll(10, randomNumber, (outcome) => {return outcome[0] < 10});

    }).timeout(5000);

});