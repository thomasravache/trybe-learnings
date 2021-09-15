import React, { useEffect, useState } from 'react';

function App() {
  const generateRandomNumber = (minNumber, maxNumber) => {
    const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

    return Math.ceil(randomNumber);
  }

  const [number, setNumber] = useState(generateRandomNumber(1, 100));
  const [hit, setHit] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setNumber(generateRandomNumber(1, 100));
    }, 10000);

  }, []);

  useEffect(() => {
    if (number % 3 === 0 || number % 5 === 0) {
      setHit(true);
      setTimeout(() => {
        setHit(false);
      }, 4000)
    }

  }, [number])

  return (
    <div>
      <p>{number}</p>
      <p>{hit && 'Acerto'}</p>
    </div>
  );
}

export default App;
