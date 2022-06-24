import axios from "axios";
import { useState, useEffect } from "react";
import SingleCryptoList from "./SingleCrypto";

const CryptoList = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/v1/crypto-dashboard/get-coins"
      );
      setCrypto(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="antialiased  text-gray-600 min-h-[300px] px-4">
        <div className="flex flex-col mt-4 h-full">
          <div className="w-full max-w-7xl mx-auto bg-green-500 shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-black font-bold">Market Lists</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-medium uppercase text-gray-800 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Rank</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Crypto</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Market Cap
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Change</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {crypto?.map((coin) => (
                      <SingleCryptoList coin={coin} key={coin.uuid} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoList;
