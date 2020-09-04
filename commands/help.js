const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        const commands = client.commands.filter(x => x.config.name !== 'help').map(x => x.config.name).join('\`, \`');
        const noArguments = new MessageEmbed()
            .setTitle('Commands')
            .setDescription(`\`${commands}\``)
            .setColor('BLUE')
            .setFooter('Say ?help [command] for more info about a command.');
        return message.channel.send(noArguments);
    } else {
        const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
        if (command) {
            const foundEmbed = new MessageEmbed()
                .addField('❯ Name', `${command.config.name}`, true)
                .addField('❯ Aliases', `\`${command.config.aliases.join('\`, \`') ? command.config.aliases : "No Aliases"}\``)
                .addField('❯ Usage', `\`${command.config.usage}\``, true)
                .addField('❯ Description', `${command.config.description}`)
                .addField('❯ Bot Permissions', `\`${command.config.botPerms.join('\`, \`') ? command.config.botPerms : "No Bot Permissions"}\``)
                .addField('❯ User Permissions', `\`${command.config.userPerms.join('\`, \`') ? command.config.userPerms : "No User Permissions"}\``)
                .setColor('BLUE');
            message.channel.send(foundEmbed);
        }
    }
} 

module.exports.config = {
    name: 'help',
    description: 'Sends help.',
    usage: '?help [command]',
    botPerms: [],
    userPerms: [],
    aliases: []
}