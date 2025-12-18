import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Navbar from '../../components/Navbar';

import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/functions';
import { useEffect, useState } from 'react';

// --- NEW IMPORT: Sanity Client ---
import { sanity as client } from '../../lib/sanity'; // **UPDATE PATH IF NEEDED**

import Announcement from '../../components/Announcement';
// Import all 7 section components
import First from './First';
import Sec from './Sec';
import DayInLife from './DayInLife';
import Benifits from './Benfits'; // Note: Renamed to 'Benifits' in your original code
import CamperChoice from './CamperChoice';
import Community from './Community';
import LastSec from './LastSec'; // Must be imported to use below

// --- SANITY GROQ QUERY (Text-Only) ---
const HOMEPAGE_QUERY = `
  *[_type == "homePageContent"][0] {
    firstSection,
    secSection,
    dayInLifeSection,
    benefitsSection,
    camperChoiceSection,
    communitySection,
    lastCtaSection // Matches the key name in your schema
  }
`;

function Home() {
	let navigate = useNavigate();

	// --- NEW STATE & FETCHING LOGIC ---
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// 1. Fetch data when the component mounts
		client
			.fetch(HOMEPAGE_QUERY)
			.then((fetchedData) => {
				setData(fetchedData);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Failed to fetch homepage data: ', error);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center h-screen text-xl'>
				Loading Homepage Content...
			</div>
		);
	}

	if (!data) {
		return (
			<div className='flex justify-center items-center h-screen text-xl text-red-600'>
				Error: Could not find homepage data. Please check Sanity Studio.
			</div>
		);
	}

	// 2. Destructure data for clean prop passing
	const {
		firstSection,
		secSection,
		dayInLifeSection,
		benefitsSection, // Corresponds to your <Benifits> component
		camperChoiceSection,
		communitySection,
		lastCtaSection,
	} = data;

	// --- END NEW STATE & FETCHING LOGIC ---

	return (
		<div className='relative lg:-mt-[5px]'>
			{/* 3. Dispatch the specific section data to each component */}
			<First {...firstSection} />
			<Sec {...secSection} />
			<DayInLife {...dayInLifeSection} />
			<Benifits {...benefitsSection} />{' '}
			{/* Matches 'benefitsSection' from query to your <Benifits> component */}
			<CamperChoice {...camperChoiceSection} />
			<Community {...communitySection} />
		</div>
	);
}

export default Home;
