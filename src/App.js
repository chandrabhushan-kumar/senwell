
import * as React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, SetData] = useState([
    {
      
      name: 'Sagar',
    },
    {
      name: 'Suraj',
    },
    {
      name: 'Suraj',
    },
    {
    
      name: 'chandra',
    },
    {
     
      name: 'Ranjan',
    },
    {
     
      name: 'Suraj',
    },
    
    {
      name: 'Suraj',
    },
    {
      name: 'Suraj',
    },
    {
      name: 'Suraj',
    },
    {
     
      name: 'Sagar',
    },
    {
    
      name: 'chandra',
    },
    {
     
      name: 'Ranjan',
    },
    {
     
      name: 'Suraj',
    },
    {
     
      name: 'Suraj',
    },

    {
      name: 'Suraj',
    },
    {
      name: 'chandra',
    },
    {
      name: 'Suraj',
    },
    {
      name: 'Suraj',
    },
    {
      name: 'chandra',
    },
  ]);
  const [shortedData, setShortedData] = useState([]);
  useEffect(() => {
     mock();
    //  countNumberOfInstance(data,"name");
    //  console.log(" ", countNumberOfInstance(data,"name"))
  }, []);

  const mock = () => {
    var newArr = countNumberOfInstance(data, 'name');
    setShortedData(newArr);
  //  console.log('abchchc ', newArr);
  };

  const countNumberOfInstance = (arr, key) => {
    var arr2 = [];
    arr.forEach((x) => {
      
      if (
        arr2.some((val) => {
          return val[key] == x[key];
        })
      ) {
       
        arr2.forEach((k) => {
          if (k[key] === x[key]) {
            k['occurrence']++;
          }
        });
      } else {
       
        let a = {};
        a[key] = x[key];
        a['occurrence'] = 1;
        arr2.push(a);
      }
    });
   

    return arr2;
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
     
      <table>
        <tr>
          <th>Name</th>
          <th>Count</th>
        </tr>
        {shortedData && shortedData.length > 0
          ? shortedData.map((value, index) => {
              let bgColor = '';
              value.occurrence < 3
                ? (bgColor = 'bgRed')
                : value.occurrence > 2 && value.occurrence < 10
                ? (bgColor = 'bgYellow')
                : (bgColor = 'bgGreen');
              return (
                <tr key={index} className={bgColor}>
                  <td>{value.name}</td>
                  <td>{value.occurrence}</td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
}
