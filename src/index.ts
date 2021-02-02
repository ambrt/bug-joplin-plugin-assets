import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation, ContentScriptType } from 'api/types';
joplin.plugins.register({
	onStart: async function() {
		console.info('Test plugin started!');
		let contentScriptId = "for-bug"
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			contentScriptId,
			'./fence.js'
		);
	},
});
