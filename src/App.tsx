/* global ethereum:false */
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const App: React.FC = () => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function fetchBalance() {
      try {
        const web3 = new Web3(ethereum);
        const [account] = await ethereum.enable();
        setBalance(web3.utils.fromWei(await web3.eth.getBalance(account)));
      } catch (error) {
        console.error(error);
      }
    }

    fetchBalance();
  });

  return <>{balance || "Loading..."}</>;
};

export default App;
