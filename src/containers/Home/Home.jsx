import React, { useState, useEffect, Fragment } from 'react';
import 'normalize.css';

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
    <Fragment>
      <form className="form" noValidate autoComplete="off">
        <input
          label="Nomor WhatsApp"
          variant="outlined"
          pattern="[0-9]"
          inputMode="tel"
          name="number"
          onChange={handleNumberChange} placeholder="62"/>
          
        <button
          onClick={handleSend}
          disabled={disable}>
          Kirim Pesan
        </button>
      </form>
    </Fragment>
  );
}

export default Home;
