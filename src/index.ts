import "@logseq/libs";

const main = () => {
	console.log("logseq-helloworld-plugin LOADED!");

	logseq.Editor.registerSlashCommand("Say Hello World!", async () => {
		const currBlock = await logseq.Editor.getCurrentBlock();

		await logseq.Editor.insertBlock(
			currBlock.uuid,
			`Hello World!`,
			{
				sibling: false,
				before: false,
			}
		);
	});
};

logseq.ready(main).catch(console.error);
