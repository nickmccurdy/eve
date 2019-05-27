/* global ethereum:false */
import ENS from "ethereum-ens";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const web3 = new Web3(ethereum);
const ens = new ENS(ethereum);

const App: React.FC = () => {
  const [state, setState] = useState({ balance: "", name: "" });

  useEffect(() => {
    async function fetchBalance() {
      try {
        const [account] = await ethereum.enable();
        const [balanceWei, name] = await Promise.all([
          web3.eth.getBalance(account),
          ens.reverse(account).name()
        ]);
        setState({ balance: web3.utils.fromWei(balanceWei), name });
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
