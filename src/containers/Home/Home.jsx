import React, { useState, useEffect, Fragment } from 'react';
import {AppBar, Button, Toolbar, Typography, TextField} from '@material-ui/core';

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
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className="judul">
            Mau Wasap
          </Typography>
        </Toolbar>
      </AppBar>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

      <form className="form" noValidate autoComplete="off">
        <TextField
          label="Nomor WhatsApp"
          variant="outlined"
          pattern="[0-9]"
          inputMode="tel"
          name="number"
          onChange={handleNumberChange} placeholder="62"/>

        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}>
          Kirim Pesan
        </Button>
      </form>
    </Fragment>
  );
}

export default Home;
