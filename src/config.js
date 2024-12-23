require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTMxOTU5ODk3MDE4MzYxNDUxNQ.GudVpk.IIbF8miJ0ncY-FoqFKxlaUZupGDD611gsAJ0bY",
    clientID: process.env.CLIENT_ID || "1319598970183614515", 
    prefix: process.env.PREFIX || "&", 
    ownerID: process.env.OWNER_ID || "977229749539713116",
    guildID: process.env.GUILD_ID || "1268154469305290753",
    SpotifyID: process.env.SPOTIFY_ID || "40c5ee08678d4e60aef46bedc6761fd4",
    SpotifySecret: process.env.SPOTIFY_SECRET || "2e8ef57a93454b31b035569f64fea7c8",
    mongourl: process.env.MONGO_URL || "mongodb+srv://CodeXDev:CodeX007@codex-public.lo930xf.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1317423941945659477",
    logs1: process.env.LOGS1 || "1317423941945659477",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1317423941945659477",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1317423941945659477",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1113836769058750585/1320419705756061768/standard.gif?ex=6769882e&is=676836ae&hm=cb04937ed7caca0f5f1f821e5cd1a5edcb4c8575b60316ee96d3b04d8715b698&', 
        support: process.env.SUPPORT || 'https://discord.gg/zhQp8PtjTN',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1319598970183614515&permissions=8&integration_type=0&scope=bot+applications.commands' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "85.88.163.80",
            port: parseInt(process.env.NODE_PORT || "3128"),
            password: process.env.NODE_PASSWORD || "saher.inzeworld.com",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}



/*
 * Modified By Gamer CodeX
 * Discord username - ray.dev
 * Youtube - https://www.youtube.com/@GamerCodeX
 * Discord Server - https://dsc.gg/codexdev
 */
