/* global ethereum:false */
import ENS from "ethereum-ens";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const App: React.FC = () => {
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchBalance() {
      try {
        const web3 = new Web3(ethereum);
        const [account] = await ethereum.enable();
        setBalance(web3.utils.fromWei(await web3.eth.getBalance(account)));

        const ens = new ENS(ethereum);
        setName(await ens.reverse(account).name());
      } catch (error) {
        console.error(error);
      }
    }

    fetchBalance();
  });

  return name && balance ? (
    <>
      {name}: {balance}
    </>
  ) : (
    <>Loading...</>
  );
};

export default App;
