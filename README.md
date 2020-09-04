# discord.js-command-handler
A command handler for discord.js
# Intro
For every file, you must have this:
```js
module.exports.run = async (client, message, args) => {
    // code here
}

module.exports.config = {
    name: 'command-name',
    description: 'Command Description',
    usage: 'Command Usage',
    botPerms: ['ADMINISTRATOR'], // Administrator permission for an example
    userPerms: [], // You can also leave blank if you want the command to be used by anybody.
    aliases: ['cool'] // Command aliases
}
```
# More Examples
You can also see **commands/test.js** for more examples. **commands/help.js** has a dynamic help command that you may use.
