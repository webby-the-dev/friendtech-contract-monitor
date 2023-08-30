import { ethers } from "ethers";
import { contract } from "./contract";

contract
  .on(
    "Trade",
    async (
      trader,
      subject,
      isBuy,
      shareAmount,
      ethAmount,
      protocolEthAmount,
      subjectEthAmount,
      supply
    ) => {
      const basicTradeDetails = {
        traderAddress: trader,
        subjectAddress: subject,
        isBuy: isBuy ? "Buy" : "Sell",
        shareAmount,
        ethAmount: ethers.formatEther(ethAmount),
        protocolEthAmount: ethers.formatEther(protocolEthAmount),
        subjectEthAmount: ethers.formatEther(subjectEthAmount),
        supply,
      };

      if (
        basicTradeDetails.traderAddress === basicTradeDetails.subjectAddress &&
        basicTradeDetails.isBuy === "Buy" &&
        basicTradeDetails.ethAmount === "0.0" &&
        basicTradeDetails.shareAmount === 1n &&
        basicTradeDetails.supply === 1n
      ) {
        const formattedTradeDetails = {
          ...basicTradeDetails,
          shareAmount: basicTradeDetails.shareAmount.toString(),
          supply: basicTradeDetails.supply.toString(),
        };

        console.log(formattedTradeDetails);
      }
    }
  )
  .catch((err) => console.log(err));
