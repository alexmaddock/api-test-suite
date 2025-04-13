import fetch from 'node-fetch';

const getRandomNumber = async() => {
    const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random')

    return response.json();
}

export default getRandomNumber;