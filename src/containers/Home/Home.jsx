import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './Home.css';

const Home = () => {
  const [ number, setNumber ]   = useState('');
  const [ disable, setDisable ] = useState(true)

  const handleSend = () => {
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  }

  useEffect(() => {
    console.log('number:', number);
    (number !== '') ? setDisable(false) : setDisable(true);
  }, [number]);

  return (
    <div className="container">
      <form noValidate autoComplete="off">
        <input
          name="number"
          label="Nomor WhatsApp"
          variant="outlined"
          pattern="[0-9]"
          inputMode="tel"
          autoFocus
          onChange={handleNumberChange} placeholder="62"/>
          
        <button
          disabled={disable}
          onClick={handleSend}>
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default Home;
