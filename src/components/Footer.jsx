// components/Footer.jsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFooterData } from '../lib/queries'; // Import your new query function

// Other imports remain the same
// import { mailTo } from '../utils/functions' // Assuming this is defined elsewhere
import { email, location, phone } from '../assets/icons';
import footerVid from '../assets/FooterVideo.mp4';
import LogoFooter from '../assets/Kiddos/LogoFooter.svg';
import { instagram, facebook } from '../assets/icons';
import LastSec from '../pages/Home/LastSec';

// Helper function to find a social link by platform name
const findSocialLink = (links, platformName) => {
	return links.find((link) => link.platform === platformName)?.url;
};

// Helper function for mailto/tel href generation
const formatEmailLink = (email) => `mailto:${email}`;
const formatPhoneLink = (phone) => `tel:${phone.replace(/[^0-9+]/g, '')}`;

function Footer() {
	const [data, setData] = useState(null);

	useEffect(() => {
		getFooterData().then(setData);
	}, []);

	// Display a fallback while loading or if data is not available
	if (!data) {
		// You might return a minimal structure or a spinner here if needed
		return <footer className='h-[500px] w-full bg-white'></footer>;
	}

	// De-structure the Sanity data for cleaner use
	const {
		title,
		description,
		address,
		addressLink,
		email: contactEmail, // Renaming to avoid conflict with imported icon
		phone: contactPhone, // Renaming to avoid conflict with imported icon
		socialsText,
		socialLinks,
		externalLinks,
	} = data;

	// Split the address text into lines for rendering
	const addressLines = address ? address.split('\n') : [];

	// Find specific social media links
	const instagramUrl = findSocialLink(socialLinks || [], 'Instagram');
	const facebookUrl = findSocialLink(socialLinks || [], 'Facebook');

	return (
		<footer className=''>
			<LastSec></LastSec>
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
					className='bg-[#fdf9ef] w-full lg:h-[725.653px] absolute -top-[240px] lg:-top-[400px] lg:w-full object-center'></video>{' '}
				<div className='bg-white lg:mb-[70px] w-full relative bottom-0 '>
					<div className='flex py-[50px] space-y-[22px] lg:space-y-0 px-[50px] w-full lg:flex-row flex-col max-w-[1293.38px] mx-auto justify-between lg:px-[100px] lg:py-[60px]'>
						<img
							src={LogoFooter}
							alt=''
							className='lg:w-fit w-[211.593px]'
						/>
						<div className='flex space-y-[30px] lg:space-y-0 flex-col lg:flex-row lg:space-x-[30px]'>
							{/* Company Info (Title & Description) */}
							<div className='flex space-y-[20px] flex-col lg:space-y-[10px]'>
								<p className='justify-start text-[#004AAD] lg:text-[15.305px] text-[11.312px] font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
									{title}
								</p>
								<p className="max-w-96 justify-start text-[#004AAD] text-[12px] lg:text-[15px] font-medium font-['League_Spartan'] leading-[16.99px] lg:leading-[22.989px]">
									{description}
								</p>
							</div>

							{/* Contact Info (Location, Email, Phone) */}
							<div className='flex flex-col space-y-[21px]'>
								{/* Location */}
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{location}</div>
									<a
										href={addressLink}
										target='_blank'
										rel='noopener noreferrer'
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										{/* Map over the address lines */}
										{addressLines.map((line, index) => (
											<span key={index}>
												{line}
												{index < addressLines.length - 1 && <br />}
											</span>
										))}
									</a>
								</div>

								{/* Email */}
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{email}</div>
									<a
										href={formatEmailLink(contactEmail)}
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										{contactEmail}
									</a>
								</div>

								{/* Phone */}
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

					{/* Colored External Links Bar */}
					<div className='w-screen flex lg:flex-row flex-col lg:h-[36.98px] text-white text-xs font-normal MadeGentle uppercase leading-6 tracking-[2.76px]'>
						{externalLinks.map((link, index) => (
							<Link
								key={index}
								to={link.url}
								target='_blank'
								rel='noopener noreferrer'
								// Use the bgColor from Sanity
								className={`lg:flex-1 h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center ${link.bgColor}`}>
								{link.name}
							</Link>
						))}
					</div>

					{/* Socials and Copyright */}
					<div className='lg:h-[70px] py-[33px] space-y-[20px] lg:py-0 lg:px-[80px] flex lg:flex-row flex-col justify-end w-full bg-[#004AAD]'>
						<div className='flex lg:w-fit w-full justify-center items-center'>
							<p className='justify-start text-white text-[11.312px] lg:text-base font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
								{socialsText}
							</p>

							{/* Socials */}
							<div className='flex flex-row-reverse mr-[20px] lg:mr-0 space-x-[20px] lg:space-x-[26px]'>
								{/* Instagram */}
								{instagramUrl && (
									<button
										onClick={() => {
											window.open(
												instagramUrl,
												'_blank',
												'noopener,noreferrer'
											);
										}}
										className='ml-[26px] lg:w-fit w-[14.787px]'>
										{instagram}
									</button>
								)}

								{/* Facebook */}
								{facebookUrl && (
									<button
										onClick={() => {
											window.open(facebookUrl, '_blank', 'noopener,noreferrer');
										}}>
										{facebook}
									</button>
								)}
							</div>
						</div>
						<div className='lg:hidden w-full flex items-end justify-center '>
							<div className='max-w-[276px] flex justify-center items-center mx-0 text-center w-fit h-8 text-white text-xs font-normal MadeGentle uppercase leading-[17.01px] tracking-[2.60px]'>
								{/* Note: The year/company name here could also be dynamic if needed, but it's often static. */}
								<p>© 2025 KIDDOS ATLANTA, LLC. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
