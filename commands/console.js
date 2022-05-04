const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('console')
        .setDescription('Get information on how to open the chrome dev tools and access the console.'),
    async execute(interaction) {
        const consoleEmbed = new MessageEmbed()
            .setTitle("How to open the console")
            .setDescription("Please open the console and take a screenshot of it to post in <#639503745176174592>.")
            .addField("Website", "Please press F12 on the keyboard and click the ``Console`` tab.")
        return interaction.reply({ embeds: [consoleEmbed] });
    },
};