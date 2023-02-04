import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

function WalletCard({ walletName, tokenAmount, tokenValue, withdrawalLimit, walletLimit }) {
  return (
    <div className={`container w-[400px] rounded-lg p-4 font-Grotesk text-white ${walletLimit == null ? "bg-[#589530]" : "bg-[#0069B3]"}`}>
      <div className="flex flex-col justify-between h-[220px]">
        <div className="text-xl font-bold flex">
          <MdOutlineAccountBalanceWallet className='h-10 w-10' /> <p className='flex  items-center h-full'>{walletName}</p> 
        </div>
        <div className={`text-center font-semibold text-xl ${walletLimit == null && "mb-[80px]"}`}>
          {/**tokenIcon */} {tokenAmount} <br/><span>{tokenValue}</span>
        </div>
        {withdrawalLimit && walletLimit && <div className="flex w-full justify-between">
          <div>Withdrawal Limit: {withdrawalLimit}</div>
          <div>Wallet Limit: {walletLimit}</div>
        </div>}
      </div>
    </div>
  );
}

export default WalletCard;
