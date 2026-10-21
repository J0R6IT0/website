import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	GITHUB_TOKEN: {
		description: 'Optional GitHub token, raises the API rate limit when fetching star counts',
		schema: (value) => value || undefined
	}
});
