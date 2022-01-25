import axios from 'axios';


const DiscordClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});


export const addRole = async (name) => {
    return await DiscordClient.post('/api/user/addRole', {user: name});
}

export const removeRole = async (name) => {
    return await DiscordClient.post('/api/user/removeRole', {user: name});
}



