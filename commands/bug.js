const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("bug").setDescription("Get information on how to draft a bug report."),
  async execute(interaction) {
    const consoleEmbed = new MessageEmbed()
      .setTitle("How to submit a bug report for Lost Ark Helper")
      .setDescription("A clear and concise description of what the bug is.")
      .addField("Steps to reproduce!", "A bug that can't be reproduced can't be fixed. Explain in detail what needs to be done to create the bug you are experiencing.")
      .addField("Expected Behavior!", "A clear and concise description of what you expected to happen.")
      .addField(
        "Screenshots!",
        "Please provide any screenshots you can of what is happening. Opening the console via CTRL + SHIFT + I and clicking the console tab can also help us diagnose the issue."
      )
      .addField("Additional Information", "Any additional context can help diagnose the issue. The more info the better!")
      .addField(
        "Bug Template",
        "```**Issue:** \n> \n**Steps to Reproduce:**\n> \n**Expected Behaviour:**\n> \n**Additional Information:**\n> \n**Screenshots:**\n\nCopy this and fill next to the > ```"
      );
    return interaction.reply({ embeds: [consoleEmbed] });
  },
};
