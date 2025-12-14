// pages/Home/LastSec.jsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLastSecData } from '../../lib/queries'; // Assuming path to queries

function LastSec() {
	const [data, setData] = useState(null);

	useEffect(() => {
		getLastSecData().then(setData);
	}, []);

	// Display a fallback while loading or if data is not available
	if (!data) {
		// You can return a loading state or the original hardcoded section
		return (
			<section className='bg-[#fdf9ef] pt-[30px] lg:pt-0 pb-[120px] lg:pb-[260px] min-h-[591px] w-full overflow-hidden relative h-fit lg:min-h-[500px]'>
				{/* Minimal loading state */}
			</section>
		);
	}

	const { preTitle, boldTitle, description, ctaText, ctaUrl } = data;

	// Helper to render the preTitle with dynamic line breaks
	const renderPreTitle = (text) => {
		return text.split('<br>').map((line, index) => (
			<span key={index}>
				{line}
				{index < text.length - 1 && <br />}
			</span>
		));
	};

	return (
		<section className='bg-[#fdf9ef] pt-[30px] lg:pt-0 pb-[120px] lg:pb-[260px] min-h-[591px] w-full overflow-hidden relative h-fit lg:min-h-[500px]'>
			<div className='max-w-[1277.294px] space-y-[100px] mx-auto flex flex-col justify-center items-center w-full'>
				<div className='space-y-[40px]'>
					<div className='max-w-[1033.51px] h-fit relative lg:min-h-[192.91px] text-center justify-center'>
						<p className="text-[#004aad] leading-[100%] text-[27.313px] lg:text-[64.97px] font-normal font-['League_Spartan'] uppercase">
							{/* Render the pre-title content dynamically */}
							{renderPreTitle(preTitle)}

							<span className="text-[#004aad] h-fit text-[27.313px] lg:text-[64.97px] font-bold font-['League_Spartan'] uppercase">
								{' '}
								{boldTitle}
							</span>
						</p>
					</div>

					{/* Dynamic Description */}
					<p className="max-w-[327px] lg:max-w-[965px] min-h-[64.97px] text-center justify-start text-[#004aad] text-[17px] lg:text-[20px] font-medium font-['Montserrat'] leading-[24.451px] lg:leading-[33.08px]">
						{description}
					</p>
				</div>

				{/* Dynamic CTA Button */}
				<Link
					target='_blank'
					rel='noopener noreferrer'
					to={ctaUrl} // Dynamic URL
					className='w-[189.598px] lg:w-[261.29px] flex justify-center items-center text-[#fff] text-[14.149px] lg:text-xl font-[600] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] h-[43.688px] lg:h-[60.207px] bg-[#004AAD] rounded-[4.36px] lg:rounded-[6px]'>
					{ctaText} {/* Dynamic Button Text */}
				</Link>
			</div>
		</section>
	);
}

export default LastSec;
