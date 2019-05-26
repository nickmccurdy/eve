/* global ethereum:false, Web3:false */
import { useEffect, useState } from "react";

export default function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function fetchBalance() {
      const web3 = new Web3(ethereum);

      try {
        await ethereum.enable();

        web3.eth.getAccounts((error, [account]) => {
          if (error) {
            console.error(error);
          } else {
            web3.eth.getBalance(account, (error, balanceWei) => {
              if (error) {
                console.error(error);
              } else {
                setBalance(web3.fromWei(balanceWei.toNumber(), "ether"));
              }
            });
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
