async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 ╭────❒⁠DESTROYER-V1*

   📂 GitHub Repository:*
   https://github.com/macoder67/DESTROYER-V1

*├◈📢 Official Channel:*
https://youtube.com/@OntiretseManyaka

├◈_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'DESTROYER-V1',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 