//it is bridge between component created in App.js and web browser
//following 4 lines put all necessary pieces togeter
import React from 'react'; //React
import ReactDOM from 'react-dom/client'; //React's library to talk to web browser(React dom)
import './styles.css'; //styles for our component
import App from './App'; //component i createdd in App.js


//following lines bring all peices together and injects the final product into index.html in public folder
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
