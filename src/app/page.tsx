"use client";
import { WalletOptions } from "./Components/walletOptions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAccount, WagmiProvider } from "wagmi";
import { config } from "./config/wagmiConfig";
import { Account } from "./Components/account";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-row items-center justify-between w-full gap-8 px-4">
          <div className="flex-1 flex items-center justify-start">
            <h1 className=" text-5xl font-bold">Testing Playground</h1>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <ConnectWallet />
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
