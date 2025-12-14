import { createClient } from '@sanity/client';

export const sanity = createClient({
	projectId: 'mpky4rym', // get this from Sanity dashboard
	dataset: 'production',
	apiVersion: '2024-01-01', // use today's date
	useCdn: true, // fast, cached data
});
