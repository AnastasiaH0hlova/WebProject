import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DishStore from './store/DishStore';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import BasketStore from './store/BasketStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      dish: new DishStore(),
      basket: new BasketStore()
    } }>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

