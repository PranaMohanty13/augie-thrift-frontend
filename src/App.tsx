import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  // This useEffect will run once when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Thrift Platform</h1>
      <p>Backend says: {data}</p>
    </div>
  );
};

export default App;
