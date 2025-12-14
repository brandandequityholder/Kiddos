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
export const getFooterData = () =>
	sanity.fetch(`
    *[_type == "footer"][0]{
      title,
      description,
      address,
      addressLink,
      email,
      phone,
      socialsText,
      socialLinks[] {
          platform,
          url
      },
      externalLinks[] {
          name,
          url,
          bgColor
      }
    }
  `);