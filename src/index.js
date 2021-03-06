import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from './firebase';
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // swiper 사용을 위해 StrickMode 주석처리
  // <React.StrictMode>
     <RecoilRoot>
       <App />
     </RecoilRoot>
  // </React.StrictMode>
);
