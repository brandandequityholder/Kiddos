import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/functions';
import { useEffect, useState } from 'react';
import { sanity as client } from '../../lib/sanity';
import Announcement from '../../components/Announcement';
import First from './First';
import Sec from './Sec';
import DayInLife from './DayInLife';
import Benifits from './Benfits';
import CamperChoice from './CamperChoice';
import Community from './Community';
import LastSec from './LastSec';

const HOMEPAGE_QUERY = `
  *[_type == "homePageContent"][0] {
    firstSection,
    secSection,
    dayInLifeSection,
    benefitsSection,
    camperChoiceSection,
    communitySection,
    lastCtaSection
  }
`;

const INIT_DATA = {
	firstSection: {
		ctaLink: 'schedule',
		ctaText: 'LEARN MORE',
		description:
			'Kiddos Summer Camps transform summer into an experience. Think of camp songs being belted, kids just being kids, silly camp counselor names, no technology in the way, and a smorgasbord of activities to choose from!',
		mainTitle: "Atlanta's Best Camp \nFor Your Kiddos",
	},
	secSection: {
		ctaLink: 'schedule',
		ctaText: 'LEARN MORE',
		description:
			'A day camp located in Buckhead, Atlanta for 150 campers - rising Kindergarten through 6th grade. Each summer is filled with over 720 activity choices - ranging from Arts, Sports and Cooking to Wood Working, Gymnastics and Science. And with Campers Choice campers tailor their day, their way!',
		mainHeadline: 'Kiddos Day Camp is..',
		infoBlocks: [
			{
				_key: '5eadfbd8f9f3',
				blockTitle: 'Dates',
				mainValue: 'Summer 2026,\nJune 8- July 10',
				subText:
					'We have weekly sessions to allow for flexibility- Join for one or multiple weeks! (Closed on June 19 & July 3)',
			},
			{
				_key: 'bb7c7a302d30',
				blockTitle: 'Hours',
				mainValue: "We're Open\n7:45 AM – 6:00 PM.",
				subText:
					'Camp Day is\n9am-2:30pm. We offer Before camp starting at 7:45am and After Camp until 6pm.',
			},
			{
				_key: '91113b523ac7',
				blockTitle: 'Ages',
				mainValue: 'We Accept\n5 - 11 year olds.',
				subText:
					'We offer camp to Rising K (5 by Sept 1 2026) up to Rising 6th Grade (11ish years old.)',
			},
			{
				_key: '207c946dd4f5',
				blockTitle: 'Enroll',
				mainValue: 'Registration Opens\nDecember 8, 2026',
				subText:
					'Choose the weeks that work for you while space remains. A small deposit holds your spot!',
			},
		],
	},
	dayInLifeSection: {
		ctaLink: 'schedule',
		ctaText: 'LEARN MORE',
		mainHeadline: 'A Day in the Life of a <br> Kiddos Camper',
		steps: [
			{
				_key: 'cfc350a9be2c',
				stepText:
					'The morning is a time to catch up with friends and play outside.',
			},
			{
				_key: '1026e0188a86',
				stepText: 'Then the camp day is split up into 6 activity periods.',
			},
			{
				_key: '5ba8dcb424bf',
				stepText:
					'Campers gather around our chart before each period and are given 6 choices of activities.',
			},
			{
				_key: '0dde2d3499e3',
				stepText:
					'Every period we like to offer 2 sports, a visual art and/or performing art, science or nature, and then something else fun ranging from cooking, Gardening, Wood Working Etc.',
			},
			{
				_key: '1baace7a3272',
				stepText:
					'We also have backyard style water play as option each day and Fridays a big water slide!',
			},
		],
	},
	benefitsSection: {
		mainHeadline:
			'What Makes Kiddos Camp the <br>best Camp For <green>Your Kiddos?</green>',
		summary:
			"Kiddos has been recognized as one of Buckhead's best summer camps – and we can't wait to show your family why. If you're looking for a summer camp in Atlanta that combines good ole' fashion fun, learning experiences, and a caring atmosphere, you've found it!",
	},
	camperChoiceSection: {
		ctaLink: 'schedule',
		ctaText: 'LEARN MORE',
		description:
			'With Campers Choice, every camper designs their own day.<br>\nKids explore passions, try something new, and take ownership of their fun through art, athletics, science, dance, and more — all within a safe, supportive, and wildly creative environment.',
		headline: 'THEIR DAY, <yellow>THEIR WAY</yellow>.',
		tagline: 'CAMPERS CHOICE',
	},
	communitySection: {
		headline: 'OUR COMMUNITY LOVES KIDDOS !\n',
		tagline: 'TESTIMONIALS',
		testimonials: [
			{
				_key: 'bd966070ab4b',
				reviewText:
					'We have complete faith and trust in Kiddos to do the right thing and help our village raise respectful, bright, creative and compassionate kids. WE LOVE KIDDOS',
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Abby T. ,',
			},
			{
				_key: 'de0e8138779d',
				reviewText:
					"My girls jump out of the car and have a full day of activities.  It's exactly how summer camp should be. My campers can't wait for next year! I have and love recommending Kiddos!",
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Sybille B.,',
			},
			{
				_key: '8c5789411d91',
				reviewText:
					"Kiddos has a structure and an atmosphere that I haven't seen replicated anywhere else - and we've lived all across the country! Kiddos is truly a unique experience and gives me such peace of mind.",
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Lynn S.,',
			},
			{
				_key: '4e11e7b2fd23',
				reviewText:
					'I love Kiddos because it reminds me of the old-school summer camps I attended in the outdoors with NO screens. I plan to sign him up again every year.',
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Dianna H.,',
			},
			{
				_key: 'e814e1501d06',
				reviewText:
					'My son has participated in the Kiddos summer program for several years. I can say without a doubt, it is his favorite time of the year besides Christmas.',
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Jasmine H.,',
			},
			{
				_key: 'bd50264746e4',
				reviewText:
					'You all are truly and one of the best parts of my "kiddo\'s" childhood...\nand have given them some of the best memories I could ask for as a single Mother.',
				reviewerItentity: 'CAMP PARENT',
				reviewerName: 'Aiso R.,',
			},
		],
	},
	lastCtaSection: null,
};

function Home() {
	let navigate = useNavigate();
	const [data, setData] = useState(INIT_DATA);

	useEffect(() => {
		client
			.fetch(HOMEPAGE_QUERY)
			.then((fetchedData) => {
				setData(fetchedData);
				console.log(fetchedData);
			})
			.catch((error) => {
				console.error('Failed to fetch homepage data: ', error);
			});
	}, []);

	const {
		firstSection,
		secSection,
		dayInLifeSection,
		benefitsSection,
		camperChoiceSection,
		communitySection,
		lastCtaSection,
	} = data;

	return (
		<div className='relative lg:-mt-[5px]'>
			<First {...firstSection} />
			<Sec {...secSection} />
			<DayInLife {...dayInLifeSection} />
			<Benifits {...benefitsSection} />
			<CamperChoice {...camperChoiceSection} />
			<Community {...communitySection} />
		</div>
	);
}

export default Home;
