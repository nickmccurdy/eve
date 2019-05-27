/* global ethereum:false */
import ENS from "ethereum-ens";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const App: React.FC = () => {
  const [state, setState] = useState({ balance: "", name: "" });

  useEffect(() => {
    async function fetchBalance() {
      try {
        const web3 = new Web3(ethereum);
        const [account] = await ethereum.enable();
        const balance = web3.utils.fromWei(await web3.eth.getBalance(account));

        const ens = new ENS(ethereum);
        const name = await ens.reverse(account).name();

        setState({ balance, name });
      } catch (error) {
        console.error(error);
      }
    }

    fetchBalance();
  });

  return state.name && state.balance ? (
    <>
      {state.name}: {state.balance}
    </>
  ) : (
    <>Loading...</>
  );
};

export default App;
