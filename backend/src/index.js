const WebSocket = require("ws");

let streams = [
    "ethbtc@miniTicker",
    "bnbbtc@miniTicker",
    "wavesbtc@miniTicker",
    "bchabcbtc@miniTicker",
    "bchsvbtc@miniTicker",
    "xrpbtc@miniTicker",
    "tusdbtc@miniTicker",
    "eosbtc@miniTicker",
    "trxbtc@miniTicker",
    "ltcbtc@miniTicker",
    "xlmbtc@miniTicker",
    "bcptbtc@miniTicker",
    "adabtc@miniTicker",
    "zilbtc@miniTicker",
    "xmrbtc@miniTicker",
    "stratbtc@miniTicker",
    "zecbtc@miniTicker",
    "qkcbtc@miniTicker",
    "neobtc@miniTicker",
    "dashbtc@miniTicker",
    "zrxbtc@miniTicker",
];

let trackedStreams = [];

//let ws = new WebSocket("wss://stream.binance.com:9443/ws/" + streams.join('/'));
let ws = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");

ws.onopen = function () {
    console.log("Binance connected...");
};

ws.onmessage = function (evt) {
    try {
        let msgs = JSON.parse(evt.data);
        // if (Array.isArray(msgs)) {
        //     for (let msg of msgs) {
        //         handleMessage(msg);
        //     }
        // } else {
        //     handleMessage(msgs);
        // }
        console.log(msgs);
    } catch (e) {
        console.log("Unknown message: " + evt.data, e);
    }
};

ws.onclose = function () {
    console.log("Binance disconnected");
};

function handleMessage(msg) {
    const stream = msg.s;
    if (trackedStreams.indexOf(stream) === -1) {
        document.getElementById("streams").innerHTML +=
            "<br/>" + stream + ': <span id="stream_' + stream + '"></span>';
        trackedStreams.push(stream);
        document.getElementById("totalstreams").innerText =
            trackedStreams.length;
    }

    document.getElementById("stream_" + stream).innerText = msg.v;
}
