import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>WA Saja</h1>
      <input type="text" pattern="[0-9]*" inputMode="tel" name="number"/>
      <br />
      <br />
      <button>Kirim Pesan</button>
    </div>
  );
}

export default Home;
