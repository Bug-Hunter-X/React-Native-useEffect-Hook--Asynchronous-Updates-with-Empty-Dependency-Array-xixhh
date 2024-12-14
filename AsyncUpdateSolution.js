import React, { useState, useEffect } from 'react';

const AsyncUpdateSolution = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
      setData({ message: 'Data fetched!' });
    };
    fetchData();
  }, [setData]); // Add setData to dependency array

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};
export default AsyncUpdateSolution;