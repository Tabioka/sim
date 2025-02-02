// File: ban.js

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the server')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option => 
            option.setName('target')
                .setDescription('The user to ban')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
                .setDescription('Reason for the ban')
                .setRequired(false)),

    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            return interaction.reply({ content: 'User not found in the server.', ephemeral: true });
        }
        
        if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ content: 'You do not have permission to ban members.', ephemeral: true });
        }

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ content: 'I do not have permission to ban members.', ephemeral: true });
        }

        if (interaction.user.id === user.id) {
            return interaction.reply({ content: 'You cannot ban yourself.', ephemeral: true });
        }

        if (member.roles.highest.position >= interaction.member.roles.highest.position) {
            return interaction.reply({ content: 'You cannot ban this user as they have a higher role than you.', ephemeral: true });
        }

        try {
            await member.ban({ reason });
            await interaction.reply({ content: `✅ Successfully banned **${user.tag}**. Reason: ${reason}` });
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: 'An error occurred while trying to ban this user.', ephemeral: true });
        }
    }
};
