import React, { useState, useEffect } from 'react';

const Home = () => {
  const [ number, setNumber ] = useState('');

  const handleSend = () => {
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  }

  useEffect(() => {
    console.log('number:', number);
  }, [number]);

  return (
    <div>
      <h1>WA Saja</h1>
      <form>
      <input 
        type="text"
        pattern="[0-9]*"
        inputMode="tel"
        name="number"
        onChange={handleNumberChange} />

      <br />
      <br />
      <button type="submit" onClick={handleSend}>Kirim Pesan</button>
      </form>
    </div>
  );
}

export default Home;
