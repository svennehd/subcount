import svencount from './svencount.jpg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import useInterval from '@use-it/interval';

function App() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    const result = await axios(
      'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWbMGyXXdOqlUf_6bWyhwqg&key=AIzaSyBeNbq8rtdqxFgT3P8SLAY6Vd2jq0ewciw',
    );

    setData(result.data.items[0].statistics.subscriberCount);
  };

  fetchData()

  useInterval(() => {
    fetchData();
  }, 5000);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWbMGyXXdOqlUf_6bWyhwqg&key=AIzaSyBeNbq8rtdqxFgT3P8SLAY6Vd2jq0ewciw',
  //     );

  //     setData(result.data.items[0].statistics.subscriberCount);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={svencount} className="App-logo" alt="Svenne HD" />
        <p className="rubrik">
          Svennes Live YouTube Subscriber Count
        </p>
        <p className="count">
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
