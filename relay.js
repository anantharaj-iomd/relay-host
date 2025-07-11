(() => {
  return;
  console.log("[nodeAI Relay] relay.js loaded ✅");

   if (!window.location.pathname.includes("/checkouts") && !window.location.pathname.includes("/thank_you")) {
    console.log("[nodeAI Relay] Not on checkout or thank you page — skipping.");
    return;
  }

  console.log("[nodeAI Relay] Thank You page detected ✅");

  try {
    const bc = new BroadcastChannel("nodeAI-BroadCastChannel");

    bc.onmessage = (event) => {
      console.log("[nodeAI Relay] Message received via BroadcastChannel:", event.data);

      // Relay to Safari extension
      window.postMessage(event.data, "*");
      console.log("[nodeAI Relay] Message relayed to window.postMessage ✅");
    };
  } catch (error) {
    console.error("[nodeAI Relay] BroadcastChannel failed ❌", error);
  }
})();
