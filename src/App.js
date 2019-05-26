/* global ethereum:false, Web3:false */
import { useEffect, useState } from "react";

export default function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function fetchBalance() {
      const web3 = new Web3(ethereum);

      await ethereum.enable();

      web3.eth.getAccounts((error, [account]) => {
        web3.eth.getBalance(account, (error, balanceWei) => {
          setBalance(web3.fromWei(balanceWei.toNumber(), "ether"));
        });
      });
    }

    fetchBalance();
  });

  return balance || "Loading...";
}
