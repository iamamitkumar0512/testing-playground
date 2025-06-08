import { useAccount, useDisconnect, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="m-2 rounded-2xl p-6 border border-white flex flex-col items-center">
      {address && (
        <div className="text-center text-white text-lg font-medium">
          {ensName ? (
            <span>
              {ensName}{" "}
              <span className="text-xs text-gray-300">({address})</span>
            </span>
          ) : (
            address
          )}
        </div>
      )}
      <button
        onClick={() => disconnect()}
        className="bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-2 px-2 rounded-l"
      >
        Disconnect
      </button>
    </div>
  );
}
