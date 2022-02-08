import axios from 'axios';


const DiscordClient = axios.create({
    baseURL: 'https://pets-hub.herokuapp.com/',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});


export const addRole = async (name, discriminator, principal, addresses) => {
    return await DiscordClient.post('/api/user/addRole', {user: name, principal, discriminator, addresses});
}

export const removeRole = async (name, discriminator, principal) => {
    return await DiscordClient.post('/api/user/removeRole', {user: name, principal, discriminator});
}

export const getRoleUser = async (principal) => {
    return await DiscordClient.post('/api/user/getUser', {principal}).then(r => r.data)
}


