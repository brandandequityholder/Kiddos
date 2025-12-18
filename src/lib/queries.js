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


  export const getAnythingElseData = async () => {
		const query = `
    *[_type == "anythingElseSection"][0]{
        mainHeadline,
        summerTime,
        contactDescription,
        availabilityText,
        secCurve,
        lastCurve,
        contactUsLink{linkText, urlSlug},
        emailLink{linkText, url},
        phoneLink{linkText, url}
    }
  `;
		// Replace client with your actual Sanity client import
		const data = await sanity.fetch(query);
		return data;
	};

	// Example: In your /lib/queries.js file

	/**
	 * Fetches all content data for the 'Kiddos Way / Values Page' from Sanity.
	 * @returns {Promise<Object>} A promise that resolves to the page content data.
	 */
	export const getKiddosWayPageTextData = () =>
		sanity.fetch(`
    *[_type == "KiddosWayPage"][0]{
      
      // 1. HERO SECTION (TEXT ONLY)
      heroSection{
        mainHeadline,
        description,
      },

      // 2. PINKY PROMISE SECTION
      pinkyPromiseSection{
        pinkyPromiseTitle,
        pinkyPromiseSubtitle,
      },

      // 3. STORY & MISSION SECTION
      storyMissionSection{
        headline,
        bodyText,
      },

      // 4. GROWTH SECTION
      growthSection{
        headline,
        bodyText,
      },

      // 5. TEAM SECTION
      teamSection{
        headline,
        bodyText,
      },

      // 6. RECOGNITION SECTION
      recognitionSection{
        headline,
        bodyText,
      },

      // All asset/curve fields are excluded as requested.
    }
  `);

	export async function getFAQPageData() {
		const query = `
    *[_type == "faqPage"][0]{
      heroSection{
        mainHeadline,
        description,
      },
      faqs[]{
        question,
        answer,
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching FAQ page data:', error);
			// Return a default structure or null in case of error
			return null;
		}
	}
	export async function getPoliciesPageData() {
		const query = `
    *[_type == "policiesPage"][0]{
      pageTitle,
      pageDescription,
      policies[]{
        headline,
        bodyText
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching Policies page data:', error);
			// Return null or a safe fallback
			return null;
		}
	}
	export async function getContactPageData() {
		const query = `
    *[_type == "contactPage"][0]{
      heroSection{
        mainHeadline,
        description
      },
      locationSection{
        headline,
        description,
        address,
        mapLink
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching contact page data:', error);
			return null;
		}
	}

	export async function getTeamPageData() {
		const query = `
    *[_type == "teamPage"][0]{
      title,
      heroSection{
        title,
        subtitle
      },
      founderSection{
        title,
        name,
        description
      },
      FoundersSection{
        title,
        subtitle,
      },
      founders[]{
        name,
        role,
        description,
        "videoUrl": video.asset->url,
        "blobUrl": blob.asset->url,
        blobPosition
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching team page data:', error);
			return null;
		}
	}

	export async function getSchedulePageData() {
		const query = `
    *[_type == "schedulePage"][0]{
      firstSection{
        title,
        description
      },
      heroSection{
        titleBlue,
        titleGreen,
        description
      },
      campersChoice{
        titleWhite,
        titleYellow,
        description
      },
      activitiesSection{
        activities[]{
          title,
          description,
          maxwidth, 
          icon{
            asset->{
              url
            }
          }
        }
      },
      questsSection{
        titleMainOne,
        titleMainTwo,
        description
      },
      dailyProgram{
        headline,
        schedule[]{
          time,
          label,
          description
        }
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching Schedule page data:', error);
			return null;
		}
	}
	export async function getPricingPageData() {
		const query = `
    *[_type == "homePage"][0]{
      title,
      heroSection{
        headline,
        subHeadline
      },
      steps[]{
        title,
        description,
        icon{
          asset->{
            url
          }
        }
      },
      ratesSection{
        heading,
        baseRate,
        deposit,
        paySchedule,
        details
      },
      discountsSection{
        first{
          heading,
          subHeadiing
        },
        second{
          heading,
          subHeadiing
        },
        third{
          heading,
          subHeadiing
        },
        paySchedule{
          heading,
          subHeadiing
        }
      },
      policiesSection{
        Scholarshipheading,
        Cancelationheading
      }
    }
  `;

		try {
			const data = await sanity.fetch(query);
			return data;
		} catch (error) {
			console.error('Error fetching Pricing page data:', error);
			return null;
		}
	}
