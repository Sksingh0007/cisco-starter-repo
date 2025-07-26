import React, { useEffect, useState } from "react";

function LatencyMonitor() {
  const [latency, setLatency] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");

    socket.onopen = () => {
      console.log("WebSocket connected to Pylon");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      const packetTimestamp = Number(event.data);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Packet Latency</h2>
      <p>
        {isConnected
          ? latency !== null
            ? `Latency: ${latency} ms`
            : "Waiting for packets..."
          : "Connecting to WebSocket..."}
      </p>
    </div>
  );
}

export default LatencyMonitor;
