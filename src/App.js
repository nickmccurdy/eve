/* global ethereum:false*/
import { useEffect, useState } from "react";
import Web3 from "web3";

export default function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function fetchBalance() {
      const web3 = new Web3(ethereum);

      try {
        const [account] = await ethereum.enable();

        web3.eth.getBalance(account, (error, balanceWei) => {
          if (error) {
            console.error(error);
          } else {
            setBalance(web3.fromWei(balanceWei.toNumber(), "ether"));
          }
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchBalance();
  });

  return balance || "Loading...";
}
