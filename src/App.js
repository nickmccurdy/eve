/* global  ethereum:false, Web3:false */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const web3 = new Web3(ethereum);

web3.eth.getAccounts((error, [account]) => {
  web3.eth.getBalance(account, (error, balanceWei) => {
    const balance = web3.fromWei(balanceWei.toNumber(), "ether");
    console.log(balance);
  });
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
