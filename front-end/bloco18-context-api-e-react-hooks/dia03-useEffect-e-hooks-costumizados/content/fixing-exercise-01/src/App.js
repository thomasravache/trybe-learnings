import React, { useEffect, useState } from 'react';

function App() {
  const generateRandomNumber = (minNumber, maxNumber) => {
    const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

    return Math.ceil(randomNumber);
  }

  const [number, setNumber] = useState(generateRandomNumber(1, 100));
  const [hit, setHit] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);

    return () => {
      clearInterval(myTimer);
    }

  }, []);

  useEffect(() => {
    if (timer === -1) {
      setNumber(generateRandomNumber(1, 100));
      setTimer(10);
    }
  }, [timer])

  useEffect(() => {
    if (number % 3 === 0 || number % 5 === 0) {
      setHit(true);
      const myTimeout = setTimeout(() => {
        setHit(false);
      }, 4000);

      return () => {
        console.log('desmontei timeout');
        clearTimeout(myTimeout); // TODA VEZ QUE O COMPONENTE É DESMONTADO E FIZER PARTE DA CONDIÇÃO EU DOU CLEAR NO TIMEOUT
      }
    }
  }, [number])

  return (
    <div>
      <p>Timer: {timer}</p>
      <p>Número aleatório: {number}</p>
      <p>{hit && 'Acertou. Este número é divisível por 3 ou por 5!'}</p>
    </div>
  );
}

export default App;
