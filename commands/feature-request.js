const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("feature").setDescription("Get information on how to draft a feature request."),
  async execute(interaction) {
    const consoleEmbed = new MessageEmbed()
      .setTitle("How to submit a feature request for Lost Ark Helper")
      .addField("Is your feature request related to a problem?", "A clear and concise description of what the problem is.")
      .addField("Describe the solution you'd like.", "A clear and concise description of what you want to happen.")
      .addField("Describe alternatives you've considered.", "A clear and concise description of any alternative solutions or features you've considered.")
      .addField("Additional context", "Add any other context or screenshots about the feature request here.")
      .addField("Additional Information", "Any additional context can help diagnose the issue. The more info the better!")
      .addField(
        "Feature Request Template",
        "```**Is your feature request related to a problem? Please describe.**\n> \n**Describe the solution you'd like**\n> \n**Describe alternatives you've considered**\n> \n**Additional context**\n> \n\nCopy this and fill next to the >```"
      );
    return interaction.reply({ embeds: [consoleEmbed] });
  },
};
