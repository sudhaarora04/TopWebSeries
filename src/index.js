import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import {getDataRecords} from './Data';

const records = getDataRecords();
ReactDOM.render(
<>
  <Card dataRecord={records}/>
</>
  , document.getElementById("root")
);

