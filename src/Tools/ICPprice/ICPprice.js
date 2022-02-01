import axios from "axios";

export const getIPCtoUSD = async () => {
    try {
        let data = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd&include_24hr_change=true');
        return data.data;
    } catch (e) {
        throw e;
    }
}