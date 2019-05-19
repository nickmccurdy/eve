/* global ethereum:false, Web3:false */
import { useEffect, useState } from "react";

export default function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    const web3 = new Web3(ethereum);

    web3.eth.getAccounts((error, [account]) => {
      web3.eth.getBalance(account, (error, balanceWei) => {
        setBalance(web3.fromWei(balanceWei.toNumber(), "ether"));
      });
    });
  });

  return balance || "Loading...";
}
