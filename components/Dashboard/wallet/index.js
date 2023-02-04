import Transactions from "./transactions";
import WalletCard from "./walletCard";
import { useState } from "react";
import {walletTypeData, walletData} from './walletData'
import {FiDownload} from 'react-icons/fi';
import {GrAdd} from 'react-icons/gr'

function WalletComp() {
  
  const [walletDisplay, setWalletDisplay] = useState(walletTypeData[0]);
  return (
    <div className="container flex flex-col gap-4">
      <div>
        <WalletCard
          walletName={walletDisplay.walletName}
          tokenAmount={walletDisplay.tokenAmount}
          tokenValue={walletDisplay.tokenValue}
          withdrawalLimit={walletDisplay.withdrawalLimit}
          walletLimit={walletDisplay.walletLimit}
          bgcolor={walletDisplay.bgcolor}
        />
        <p className="flex gap-1 mt-2 justify-center text-center w-[400px]">
          <span
            onClick={() => setWalletDisplay(walletTypeData[0])}
            className={`rounded-full p-1 border border-primary ${walletDisplay.walletLimit == null && "bg-primary"}`}
          ></span>{" "}
          <span
            onClick={() => setWalletDisplay(walletTypeData[1])}
            className={`rounded-full p-1 border border-primary ${walletDisplay.walletLimit != null && "bg-primary"}`}
          ></span>
        </p>
      </div>
       {walletDisplay.walletLimit ? <div className="flex gap-2">
            <div className="bg-gradient-to-b from-slate-50 to-slate-300 py-4 px-8">
                {/**Add climecheck logo */}
                <p className="font-semibold">
                    2341 <br /> {/**variable */}
                <span>Sensor</span> 
                </p>
               
            </div>
            <div className="bg-gradient-to-b from-slate-50 to-slate-300 py-4 px-8">
                {/**Add climecheck logo */}
                <p className="font-semibold">
                    2 <br /> {/**variable */}
                <span>Footprint</span> 
                </p>
               
            </div>

        </div> 
        : 
        <div className="flex gap-4 w-[400px] justify-center">
            <div className="bg-gradient-to-b from-slate-50 to-slate-300 p-4 rounded-full text-primary">
                <GrAdd  className="h-8 w-8"/>
            </div>
            <div className="bg-gradient-to-b from-slate-50 to-slate-300 p-4 rounded-full text-secondary">
                <FiDownload  className="h-8 w-8"/>
            </div>
        </div>}
        <div className="flex flex-col mt-3">
            <div className="justify-between flex w-full">
            <p className="font-semibold text-lg">
            Transaction History
            </p>
            <button className="border-2 border-primary text-primary py-2 px-4 hover:bg-primary hover:text-white rounded-md">view all</button>
            </div>
            <div className="h-[400px] overflow-y-auto overflow-x-auto w-full">
                 {walletData.map(({type, txDesc, txDate, txAmount}, key) =>{
                return <Transactions type={type} txDesc={txDesc} txDate={txDate} txAmount={txAmount} key={key} />
            })}
            </div>
           
            
        </div>
    </div>
  );
}

export default WalletComp;
