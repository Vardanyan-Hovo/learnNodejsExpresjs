import React from 'react';
import {useEffect, useState} from 'react'

export default function Component() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    console.log("Hello React Native");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/data");//we have in package.json "proxy":"http://localhost:5000",
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      setAllData(data);
      console.log("Data received:", data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  return (
    <div>
      {allData.length ? (
        allData.map((element, index) => (
          <div key={index}>
            <p>{element.id}</p>
            <p>{element.name}</p>
            <p>{element.type}</p>
            <p>{element.email}</p>
            <p>{element.password}</p>
          </div>
        ))
      ) : (
        <p>Empty</p>
      )}
      <p>FetchData</p>
    </div>
  );
}