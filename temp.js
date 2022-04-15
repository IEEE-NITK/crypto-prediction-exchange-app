const fs = require("fs");
const axios = require("axios");

const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
        vs_currency: "usd",
        page: "1",
        per_page: "100",
        order: "market_cap_desc",
    },
    headers: {
        "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        "X-RapidAPI-Key": "c5e2097ab3mshcb4d461a0617cb5p1b05e0jsndb394edbe645",
    },
};

axios
    .request(options)
    .then(function (response) {
        coinData = {};
        response.data.forEach((item) => {
            coinData[item.symbol] = item.image;
        });
        fs.writeFileSync("./cryptocurrency.json", JSON.stringify(coinData));
    })
    .catch(function (error) {
        console.error(error);
    });
