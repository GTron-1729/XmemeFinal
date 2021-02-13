import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const footerStyle = {
  backgroundColor: "rgba(0,0,0,0.6)",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  paddingTop:"2px",
  borderRadius:"5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "2px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Footer>
      <span> 
        <a href="https://www.linkedin.com/in/ganeshtarone/" style={{color: "white"}}>
          @Developed by Ganesh Tarone 
        </a>
        </span>
    </Footer>
  </Provider>,
  document.getElementById('root'),
);
