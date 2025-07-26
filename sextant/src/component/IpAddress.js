import React, { useEffect, useState } from "react";
import axios from "axios";

const IpAddress = ({ version = "v4" }) => {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);

  const endpoint =
    version === "v6"
      ? "https://api64.ipify.org?format=json"
      : "https://api.ipify.org?format=json";

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setIp(res.data.ip))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch IP");
      });
  }, [endpoint]);

  return (
    <div className="text-gray-700 text-lg">
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : ip ? (
        <span>
          Your public IPv{version === "v6" ? "6" : "4"} address: {ip}
        </span>
      ) : (
        <span>Loading your IPv{version === "v6" ? "6" : "4"} address...</span>
      )}
    </div>
  );
};

export default IpAddress;
