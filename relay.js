(() => {
  const CHANNEL_NAME = "nodeAI-BroadCastChannel";

  try {
    const bc = new BroadcastChannel(CHANNEL_NAME);

    bc.onmessage = (event) => {
      console.log("[nodeAI Relay] Forwarding message from BroadcastChannel to window:", event.data);
      window.postMessage(event, "*");
    };

    console.log(`[nodeAI Relay] Listening on BroadcastChannel: ${CHANNEL_NAME}`);
  } catch (e) {
    console.error("[nodeAI Relay] Error setting up BroadcastChannel:", e);
  }
})();
