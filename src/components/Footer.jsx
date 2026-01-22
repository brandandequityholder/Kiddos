import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFooterData } from '../lib/queries';
import { email, location, phone } from '../assets/icons';
import footerVid from '../assets/FooterVideo.mp4';
import LogoFooter from '../assets/Kiddos/LogoFooter.svg';
import { instagram, facebook } from '../assets/icons';
import LastSec from '../pages/Home/LastSec';

// 1. Define the fallback data based on your screenshot
const INITIAL_FOOTER_DATA = {
	title: 'KIDDOS SUMMER CAMP',
	description:
		'A day camp located in Buckhead for 150 campers - rising Kindergarten through 6th grade. Each summer is filled with over 720 activity choices - ranging from Arts, Sports and Cooking to Wood Working, Gymnastics and Science.',
	address:
		'Atlanta Classical Academy\n3260 Northside Dr NW,\nAtlanta, GA 30305',
	addressLink:
		'https://maps.google.com/?q=3260+Northside+Dr+NW+Atlanta+GA+30305',
	email: 'Info@KiddosAtlanta.com',
	phone: '404.955.3184',
	copyrightText: '© 2025 KIDDOS ATLANTA, LLC.',
	socialsText: '@KIDDOSCAMP',
	socialLinks: [
		{ platform: 'Instagram', url: 'https://instagram.com/kiddoscamp' },
		{ platform: 'Facebook', url: 'https://facebook.com/kiddoscamp' },
	],
	externalLinks: [
		{ name: 'Kiddos Atlanta', url: '/', bgColor: '#D14A96' },
		{ name: 'Kiddos Early Learning Center', url: '/', bgColor: '#3FC7D1' },
		{ name: 'Kiddos Afterschool', url: '/', bgColor: '#F59E61' },
		{ name: 'Kiddos Day Camp', url: '/', bgColor: '#8ED14A' },
	],
};

const findSocialLink = (links, platformName) => {
	return links.find((link) => link.platform === platformName)?.url;
};

const formatEmailLink = (email) => `mailto:${email}`;
const formatPhoneLink = (phone) => `tel:${phone?.replace(/[^0-9+]/g, '')}`;

function Footer() {
	// 2. Initialize state with the fallback data
	const [data, setData] = useState(INITIAL_FOOTER_DATA);

	useEffect(() => {
		getFooterData()
			.then((fetchedData) => {
				// Only update if we actually got valid data back
				if (fetchedData) {
					setData(fetchedData);
				}
			})
			.catch((err) => {
				console.error('Failed to fetch footer data, using fallback:', err);
			});
	}, []);

	// 3. We no longer need the "if (!data)" return because state is never null
	const {
		title,
		description,
		address,
		addressLink,
		email: contactEmail,
		phone: contactPhone,
		copyrightText,
		socialsText,
		socialLinks,
		externalLinks,
	} = data;

	const addressLines = address ? address.split('\n') : [];
	const instagramUrl = findSocialLink(socialLinks || [], 'Instagram');
	const facebookUrl = findSocialLink(socialLinks || [], 'Facebook');

	return (
		<footer className='overflow-hidden'>
			<LastSec />
			<div className='lg:mt-[260px] lg:-mb-[70px] lg:h-fit mt-[131px] relative '>
				<video
					playsInline
					src={footerVid}
					muted
					webkit-playsinline='true'
					autoPlay
					loop
					preload='auto'
					style={{ width: '100%', display: 'block' }}
					className='bg-[#fdf9ef] w-full lg:h-[725.653px] absolute -top-[240px] lg:-top-[400px] lg:w-full object-center'
				/>
				<div className='bg-white lg:mb-[70px] w-full relative bottom-0 '>
					<div className='flex py-[50px] space-y-[22px] lg:space-y-0 px-[50px] w-full lg:flex-row flex-col max-w-[1293.38px] mx-auto justify-between lg:px-[100px] lg:py-[60px]'>
						<img
							src={LogoFooter}
							alt='Kiddos Logo'
							className='lg:w-fit w-[211.593px]'
						/>
						<div className='flex space-y-[30px] lg:space-y-0 flex-col lg:flex-row lg:space-x-[30px]'>
							<div className='flex space-y-[20px] flex-col lg:space-y-[10px]'>
								<p className='justify-start text-[#004AAD] lg:text-[15.305px] text-[11.312px] font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
									{title}
								</p>
								<p className="max-w-96 justify-start text-[#004AAD] text-[12px] lg:text-[15px] font-medium font-['League_Spartan'] leading-[16.99px] lg:leading-[22.989px]">
									{description}
								</p>
							</div>

							<div className='flex flex-col space-y-[21px]'>
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{location}</div>
									<a
										href={addressLink}
										target='_blank'
										rel='noopener noreferrer'
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										{addressLines.map((line, index) => (
											<span key={index}>
												{line}
												{index < addressLines.length - 1 && <br />}
											</span>
										))}
									</a>
								</div>

								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{email}</div>
									<a
										href={formatEmailLink(contactEmail)}
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										{contactEmail}
									</a>
								</div>

								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{phone}</div>
									<a
										href={formatPhoneLink(contactPhone)}
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										{contactPhone}
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='w-screen flex lg:flex-row flex-col lg:h-[36.98px] text-white text-xs font-normal MadeGentle uppercase leading-6 tracking-[2.76px]'>
						{externalLinks?.map((link, index) => (
							<Link
								key={index}
								to={link.url}
								target='_blank'
								style={{ backgroundColor: link.bgColor }}
								rel='noopener noreferrer'
								className={`lg:flex-1 h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center `}>
								{link.name}
							</Link>
						))}
					</div>

					<div className='lg:h-[70px] py-[33px] space-y-[20px] lg:py-0 lg:px-[80px] flex lg:flex-row flex-col justify-end w-full bg-[#004AAD]'>
						<div className='flex lg:w-fit w-full justify-center items-center'>
							<p className='justify-start text-white text-[11.312px] lg:text-base font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
								{socialsText}
							</p>

							<div className='flex flex-row-reverse mr-[20px] lg:mr-0 space-x-[20px] lg:space-x-[26px]'>
								{instagramUrl && (
									<button
										onClick={() =>
											window.open(instagramUrl, '_blank', 'noopener,noreferrer')
										}
										className='ml-[26px] lg:w-fit w-[14.787px]'>
										{instagram}
									</button>
								)}
								{facebookUrl && (
									<button
										onClick={() =>
											window.open(facebookUrl, '_blank', 'noopener,noreferrer')
										}>
										{facebook}
									</button>
								)}
							</div>
						</div>
						<div className='lg:hidden w-full flex items-end justify-center '>
							<div className='max-w-[276px] flex justify-center items-center mx-0 text-center w-fit h-8 text-white text-xs font-normal MadeGentle uppercase leading-[17.01px] tracking-[2.60px]'>
								<p>{copyrightText} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
