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
      copyrightText,  // <-- ADDED THIS FIELD
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

export const getLastSecData = () =>
	sanity.fetch(`
    *[_type == "lastSec"][0]{
      preTitle,
      boldTitle,
      description,
      ctaText,
      ctaUrl
    }
  `);