import { getStars } from '#lib/server/stars.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => ({ stars: await getStars() });
