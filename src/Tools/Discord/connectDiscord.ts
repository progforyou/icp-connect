import Discord from 'discord.js';

/*export const connectDiscord = */
/*(() => {
    /!*const client = new Discord.Client({});*!/
    /!*client.login("Your Token");*!/
    /!*console.log(client.guilds.fetch("933304785396977716"))*!/

})()*/
const guildId = "933304785396977716";

(
    function DiscordWidgetData() {
        let load = async function (guildId: string) {
            return new Promise(function (resolve, reject) {
                fetch("https://discord.com/api/guilds/" + guildId + "/widget.json", {
                    method: "GET",
                    mode: "cors",
                    cache: "reload",
                    redirect: "follow"
                }).then(response => {
                    if (!response.ok) {
                        reject(new Error(response.statusText));

                        return;
                    }

                    resolve(response.json());
                }).catch(e => {
                    console.log(e);

                    reject(e);
                });
            });
        }
        load(guildId).then(r => {
            console.log(r);
        });
    })()
