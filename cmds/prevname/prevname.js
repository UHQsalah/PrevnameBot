module.exports = {
    name: 'prevname',
    description: "Affiche la liste des anciens pseudos d'un utilisateur",
    type: 1,
    options: [
        {
            name: 'user',
            description: "Utilisateur dont vous voulez afficher les anciens pseudos",
            type: 6,
            required: true
        }
    ],

    go: async (client, db, config, interaction, args) => {
        const user = interaction.options.getUser('user');

        const data = db.all().filter(data => data.ID.startsWith(`prevname_${user.id}`)).sort((a, b) => b.data - a.data);

        let desc = "Aucune donnée trouvée";

        if (data.length > 0) {
            desc = data.map(m => `**${m.ID.split('_')[3]}**`).join("\n");
        }

        const embed = {
            title: `Liste des anciens pseudos de ${user.username}`,
            timestamp: new Date(),
            description: desc,
            color: 0x2E3136,
        };

        interaction.reply({ embeds: [embed] }).catch(e => {});
    }
};
