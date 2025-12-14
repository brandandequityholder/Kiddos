export default {
	name: 'announcement',
	title: 'Announcement Bar',
	type: 'document',
	__experimental_actions: ['update', 'publish'], // client-safe
	fields: [
		{ name: 'text', title: 'Left Text', type: 'string' },
		{ name: 'linkText', title: 'Link Text', type: 'string' },
		{ name: 'linkUrl', title: 'Link URL', type: 'url' },
		{
			name: 'enabled',
			title: 'Show Announcement',
			type: 'boolean',
			initialValue: true,
		},
	],
};
