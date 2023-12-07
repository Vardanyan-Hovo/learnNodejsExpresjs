import React from 'react';
import {useEffect} from 'react'

export default function Component(){
    useEffect(() => {
        console.log("Hello  React");
       // "proxy":"http://localhost:5000"
        fetch("/data")
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log("Data received:", data);
            
            alert(JSON.stringify(data));
          })
          .catch((err) => {
            console.log("Fetch error:", err);
          });
      }, []);
    return(<div>
        <h1>Hello</h1>
    </div>)
}