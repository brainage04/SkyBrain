# Description
A Node.js and Express-based webserver that allows browsing of processed Hypixel Skyblock API data.
This project was heavily inspired by SkyCrypt and attempts to process Skyblock data where it does not, such as the Auction House and Bazaar.
The goal of this project is to process all publicly available Hypixel Skyblock API branches, and even create pages where API data is not available (such as the Skyblock Events Calendar).
If you wish to contact me, please do so at Brainage#6832 on Discord. If I am not available there, I will be available on the SkyBrain Discord Server: https://discord.gg/hAfkNtWFE5

# Installation Instructions
1. Download the .zip file for the source code and extract it.
2. Open the extracted folder in Visual Studio Code.
3. Open the terminal (Ctrl+\`) and run "npm ci" to install dependencies.
4. Create a "config.json" file in the top-most directory with the following contents:
<pre>
{
	"mojangApiUrlGetUUID": "https://api.mojang.com/users/profiles/minecraft/",
	"mojangApiUrlGetUser": "https://sessionserver.mojang.com/session/minecraft/profile/",
	"sampleUUID": "bfc42df4-5025-483f-8601-5ed1206d5f9b",
	"sampleName": "Brainage",
	"hypixelApiUrl": "https://api.hypixel.net/",
	"hypixelApiKey": "insert-api-key-here",
	"sampleCuteName": "Grapes"
}
</pre>
Replace "insert-api-key-here" with your personal Hypixel API key, which you can obtain by logging onto Hypixel and running "/api new".

5. Run "node .\scripts\downloadResources.js" to download data from all public branches of the Hypixel API.
6. Open a new Command Prompt terminal and run "SET DEBUG=skybrain:* & npm start" to start the webserver.

# To-do List:
1. Use 3D block models instead of block face textures.
	- Find a package that can render Minecraft blocks (minecraft-blocks-render, minecraft-render) - including player heads (these are used a lot in Skyblock for things like helmets, talismans, etc.). If the package can render player skins too, that is a plus.
	- These packages will probably use the Three.js JavaScript library, so if an appropriate one can not be found, make your own code using that library.
2. Change "index" to "bazaar" in routes and views folders and create a new index page showcasing all the features and pages on the website.
3. Create separate files for head, nav and footer elements with the ability to export variables such as titles into them.