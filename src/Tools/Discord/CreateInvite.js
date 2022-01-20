const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('message', message => {
    if (message.content === "-invites") {
        var user = null;
        user = message.author || message.mentions.users.first()

        message.guild.fetchInvites().then(invites => {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for (var i = 0; i < userInvites.length; i++) {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                message.reply(`You have invited ${userInviteCount} user(s) to this server. Keep up the good work!`);
            }
        )
    }
});