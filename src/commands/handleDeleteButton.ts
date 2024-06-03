import {
  ModalBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  TextInputStyle,
  ButtonStyle,
} from "discord.js";

export const handleDeleteButton = async (
  interaction: any,
  surveyName: any,
) => {
  const modal = new ModalBuilder()
    .setCustomId(`deleteModal-${surveyName}`)
    .setTitle(`Delete Survey: ${surveyName}`)

  const yesInput = new TextInputBuilder()
    .setCustomId(`confirmDelete-${surveyName}`)
    .setLabel("Please rewrite the surveyName to delete.")
    .setStyle(TextInputStyle.Paragraph)
    .setPlaceholder("This action cannot be undone!")
  modal.addComponents(new ActionRowBuilder().addComponents(yesInput));

  await interaction.showModal(modal);
};
