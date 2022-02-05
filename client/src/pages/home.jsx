import React from 'react';
import { Link } from 'react-router-dom';
import User from '../components/user';
import data from '../resources/user';

export default function home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chemical">Chemical</Link>
          </li>
          <li>
          <Link to="/test">test</Link>

          </li>
          
      </ul>
      {data.map((user,index)=>{
        return(
          <User key={index}/>
        )
      })}
    </div>
  );
}
