const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { outputJSON } = require('fs-extra');
const config = require("../config.json");

const hypixelApiUrl = config.hypixelApiUrl;
const hypixelApiKey = config.hypixelApiKey;
const sampleUUID = config.sampleUUID;
const sampleName = config.sampleName;

const linkAndFileArray = [
	[`key?key=${hypixelApiKey}`, "./data/key.json"],
	[`player?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/player_${sampleName}.json`],
	[`friends?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/friends_${sampleName}.json`],
	[`recentgames?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/recentgames_${sampleName}.json`],
	[`status?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/status_${sampleName}.json`],
	[`guild?key=${hypixelApiKey}&player=${sampleUUID}`, `./data/guild_${sampleName}.json`],
	["resources/games", "./data/resources/games.json"],
	["resources/achievements", "./data/resources/achievements.json"],
	["resources/challenges", "./data/resources/challenges.json"],
	["resources/quests", "./data/resources/quests.json"],
	["resources/guilds/achievements", "./data/resources/guilds/achievements.json"],
	["resources/vanity/pets", "./data/resources/vanity/pets.json"],
	["resources/vanity/companions", "./data/resources/vanity/companions.json"],
	["resources/skyblock/collections", "./data/resources/skyblock/collections.json"],
	["resources/skyblock/skills", "./data/resources/skyblock/skills.json"],
	["resources/skyblock/items", "./data/resources/skyblock/items.json"],
	["resources/skyblock/election", "./data/resources/skyblock/election.json"],
	["resources/skyblock/bingo", "./data/resources/skyblock/bingo.json"],
	[`skyblock/news?key=${hypixelApiKey}`, "./data/skyblock/news.json"],
	[`skyblock/auction?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/skyblock/auction_${sampleName}.json`],
	["skyblock/auctions", "./data/skyblock/auctions.json"],
	["skyblock/auctions_ended", "./data/skyblock/auctions_ended.json"],
	["skyblock/bazaar", "./data/skyblock/bazaar.json"],
	[`skyblock/profiles?key=${hypixelApiKey}&uuid=${sampleUUID}`, `./data/skyblock/profiles_${sampleName}.json`],
	[`skyblock/bingo?key=${hypixelApiKey}&uuid=${sampleUUID}`, "./data/skyblock/bingo.json"],
	["skyblock/firesales", "./data/skyblock/firesales.json"],
	[`boosters?key=${hypixelApiKey}`, "./data/boosters.json"],
	[`counts?key=${hypixelApiKey}`, "./data/counts.json"],
	[`leaderboards?key=${hypixelApiKey}`, "./data/leaderboards.json"],
	[`punishmentstats?key=${hypixelApiKey}`, "./data/punishmentstats.json"]
];

async function downloadResource(dataURL, filePath) {
	dataURL = hypixelApiUrl + dataURL;

	try {
		const data = await fetch(dataURL).then(response => response.json());

		if (filePath) {
			outputJSON(filePath, data, { spaces: "\t" }, (err) => {
				if (err) throw err;
	
				console.log(`LINK: ${dataURL}`);
				console.log(data.success ? `SUCCESS: ${data.success}` : `SUCCESS: ${data.success}, CAUSE: ${data.cause}`);
				console.log(`CREATED ${filePath}\n`);
			});
	
			return true;
		} else {
			return await data;
		}
	} catch (err) {
		console.log(err);
	}
}

async function downloadAllResources() {
	for (let index in linkAndFileArray) {
		await downloadResource(linkAndFileArray[index][0], linkAndFileArray[index][1]);
	}
}

// downloadAllResources();

module.exports = { downloadResource, downloadAllResources };