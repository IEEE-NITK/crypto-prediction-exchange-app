import React, {useState, useEffect} from 'react'
import "./CardList.css"
import Card from './Card'

const CardList = (coins) => {
    var axios = require("axios").default;
    // console.log(coins)
    // const [coins, setCoins] = useState([])
    const [filteredCoins, setFilteredCoins] = useState([])

//     var options = {
//     method: 'GET',
//     url: 'https://coingecko.p.rapidapi.com/coins/markets',
//     params: {vs_currency: 'inr', page: '1', per_page: '100', order: 'market_cap_desc'},
//     headers: {
//         'x-rapidapi-host': 'coingecko.p.rapidapi.com',
//         'x-rapidapi-key': 'c5e2097ab3mshcb4d461a0617cb5p1b05e0jsndb394edbe645'
//     }
// };
    
//     const fetchData = async () => {
//         axios.request(options).then(function (response) {
//             // console.log(response.data.coin);
//             setCoins(response.data);
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }
//     console.log(coins)

//     useEffect(() => {
//         fetchData()
//         const interval = setInterval(() => {
//             fetchData()
//         }, 2000)

//         return () => clearInterval(interval)
//     }, [])

    const coinsList = coins.coins.map(coin => <Card key={coin.id} coin={coin}></Card>)
    // coinsList =[];
    return (
        <div className='card-list'>
            {
                coinsList
            }
        </div>
    )
}

export default CardList
