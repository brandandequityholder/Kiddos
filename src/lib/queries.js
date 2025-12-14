import { sanity } from './sanity';

export const getAnnouncement = () =>
	sanity.fetch(`
    *[_type == "announcement"][0]{
      text,
      linkText,
      linkUrl,
      enabled
    }
  `);
