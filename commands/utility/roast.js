const { SlashCommandBuilder } = require("discord.js");

const roasts = [
	"I’d call you a tool, but that implies you’re actually useful",
	"You bring everyone so much joy… when you leave the room",
	"If I wanted to hear from an a**hole, I’d fart",
	"I’m not saying you’re stupid, but you make me feel smart",
	"You're like a cloud. When you disappear, it's a beautiful day",
	"You're proof that even evolution makes mistakes",
	"I'd agree with you, but then we'd both be wrong",
	"Were you born this stupid or did you have to take classes to get that way?!",
	"You should buy a potted plant and carry it around with you, so it replaces the oxygen you waste!",
	"You’re so useless you’d waste even the six feet of dirt they’d bury you in when you die!",
	"I’ve seen smarter bricks than you!",
	"Are you fucking kidding me?",
	"The monkeys we tested this game on have outperformed you so far",
	"You're the reason shampoo has instructions.",
	"I'd call you average, but that would be an insult to average people.",
	"In order to be born, you needed 2 parents 4 grandparents 8 great-grandparents 16 second great-grandparents 32 third great-grandparents 64 fourth great-grandparents 128 fifth great-grandparents 256 sixth great-grandparents 512 seventh great-grandparents 1,024 eighth great-grandparents 2,048 ninth great-grandparents. For you to be born today from 12 previous generations, you needed a total sum of 4,094 ancestors over the last 400 years. Think for a moment - How many struggles? How many battles? How many difficulties? How much sadness? How much happiness? How many love stories? How many expressions of hope for the future? - did your ancestors have to undergo for you to exist and all you do is mess up fail and end up dying a meaningless worthless death having achieved nothing in life. Out of every single possible thing you chose to do you sit there and play video games you worthless piece of trash. Think about all your life’s choices and tell me how many times you chose to be lazy instead of being productive, how many times you procrastinated instead of doing it? Then how many times you could have got up off your lazy butt and done something good with your life for a change? Tell me how many times you sat there and messed up your life by being the worthless piece of garbage that you are. ",
];
const emojis = [
	"💀",
	"😂",
	"🤡",
	"💩",
	"🗑️",
	"🤢",
	"😬",
	"🙄",
	"🤦",
	"😤",
	"💸",
	"🤮",
	"👎",
	"🤷",
	"😵",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("roast")
		.setDescription("Get roasted by this shitty bot"),

	async execute(interaction) {
		const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
		const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

		await interaction.reply(`${randomRoast} ${randomEmoji}`);
	},
};
