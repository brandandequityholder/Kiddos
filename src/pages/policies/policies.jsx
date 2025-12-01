import React from 'react';

import rightBlob from './rightBlob.svg';
import videoMask from './videoSvg.svg';
import VidCurveMob from './VidCurveMob.svg';

import {
	curveFiveTop,
	curveFourBottom,
	curveFourTop,
	curveOneButtom,
	curveOneTop,
	curveSevenTop,
	curveSixBottom,
	curveSixTop,
	curveThreeTop,
	curveTwoButtom,
	curveTwoTop,
} from './bgCurves';
import AnythingElse from '../../components/AnythingElse';
import bg from './bg.jpg';
function Policies() {
	const colOne = [
		{
			title: (
				<>
					Camper <br />
					Conduct
				</>
			),
			text: 'We expect campers to abide by the Kiddos Way even in summer – being kind, a good listener, and safe. Please remind your camper- that while camp is full of fun- we can only have fun if we follow camp rules- We find that due to campers choosing a new activity they want to do every 30-60 minutes that behavior just requires our Counselors redirect and coach. Serious issues are addressed with safety in mind and involve parents when needed.',
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute top-[-55.9px] left-[-28px]'>
						{curveOneTop}
					</div>
					<div className='absolute bottom-[20px] right-[-36px]'>
						{curveOneButtom}
					</div>
				</div>
			),
		},
		{
			title: (
				<>
					Activity <br />
					Participation
				</>
			),
			text: (
				<>
					Get ready for a blast because all our camp activities are crafted to
					be age-appropriate, safe, and super FUN! Our golden rule? Pick an
					activity, give it a shot, and stick with it until the next period.
					We’re all about getting active—think playing in the dirt, splatter
					paint, and running through hoses on a hot day! Please note: campers
					won’t be sidelined from activities for aesthetic reasons like clothing
					or hair—parents we ask you to prepare them for all the fun, let’s keep
					it fun and free! Just a heads-up: it’s on parents to inform us about
					any medical reasons that might prevent a camper from participating.{' '}
				</>
			),
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute z-10 -top-[40px] left-[-50px]'>
						{curveTwoTop}
					</div>
					<div className='absolute top-[140.9px] left-[-60px]'>
						{curveTwoButtom}
					</div>
				</div>
			),
			specialStyle: 'mb-[90px]',
		},
		{
			title: (
				<>
					Electronics <br />
					Policy
				</>
			),
			text: (
				<>
					Heads up, tech enthusiasts—we’re totally tech-free at camp! Any toys,
					phones or gadgets your camper brings to camp are their own
					responsibility. And here’s the deal: no electronics, including phones,
					are allowed during camp hours. Campers can stash them in their bags,
					but direct contact with your kiddo is a no-go; it just makes those
					rules go haywire! If you need to reach out, give us a ring at
					404.955.3184. Let’s keep the focus on fun!
				</>
			),
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute z-10 left-[-40px] top-[60px]'>
						{curveThreeTop}
					</div>
				</div>
			),
		},

		{
			title: (
				<>
					Communication <br />
					Policy
				</>
			),
			text: (
				<>
					During camp hours, our directors carry a camp phone, 404.955.3184.
					You’ll have that number to reach us in case of urgent messages. Text
					if it’s something quick and easy you need to get to us. Otherwise give
					us a call. Transparency and communication are key to our parent
					partnership.
				</>
			),
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute z-10 top-[30px] left-[-40px]'>
						{curveFourTop}
					</div>
					<div className='absolute bottom-[30.9px] left-[-45px]'>
						{curveFourBottom}
					</div>
				</div>
			),
		},
	];
	const colTwo = [
		{
			title: (
				<>
					What to Bring <br />& Wear
				</>
			),
			text: (
				<>
					Wear comfy play clothes, with a bathing suit underneath and closed-toe
					shoes. Pack a peanut- free lunch, fill a water bottle, change of
					clothes, and towel. Apply sunscreen everywhere- every morning, bring
					extra for reapplication mid day. Label everything with your child’s
					name. We ask that breakfast be fed prior to camp. On Wednesdays we
					wear our Kiddos Shirts!
				</>
			),
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute z-10 -top-[65px] left-[-40px]'>
						{curveSixTop}
					</div>
				</div>
			),
			specialStyle: 'mb-[100px]',
		},
		{
			title: (
				<>
					Medical <br />
					Needs
				</>
			),
			text: 'All medication (daily meds or emergency inhalers/EpiPens) must be checked in with our camp director at sign in. We carry required medications, have the prescriptions attached and ensure proper administration per your instructions. Minor scrapes and bumps will be treated on site (you’ll get an incident note). If anything more serious occurs, we will contact you immediately and, if needed, arrange medical care as outlined in our emergency plan. We are proud of our safety record – and we plan to keep it that way.',
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute -top-[70.9px] left-[-25px]'>
						<svg
							width='435'
							height='370'
							viewBox='0 0 435 370'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M257.899 365.367C257.899 365.367 310.386 355.259 344.914 341C369.965 330.655 404.653 288.787 420.396 265.518C438.583 238.636 436.816 206.928 429.28 176.829C425.844 163.108 417.885 131.374 384.409 97.8988C376.117 89.6072 378.211 33.7091 322.682 36.1719C291.832 37.5401 262.826 42.5928 242.106 43.0445C221.386 43.4961 176.707 8.02214 146.775 1.1026C116.843 -5.81694 50.5491 20.861 19.2517 52.1583C-12.0456 83.4557 0.130171 127.849 18.3709 146.09C51.9982 179.717 91.1543 221.635 104.975 238.217C118.795 254.799 121.111 284.729 131.713 313.742C142.316 342.756 151.064 342.299 177.778 359.807C204.492 377.316 257.899 365.367 257.899 365.367Z'
								fill='#75CB31'
							/>
						</svg>
					</div>
					<div className='absolute -bottom-[40.9px] left-[25px]'>
						<svg
							width='385'
							height='463'
							viewBox='0 0 385 463'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M6.03804 283.303C6.03804 283.303 19.032 338.042 35.5827 373.708C47.5908 399.585 93.181 434.176 118.36 449.682C147.448 467.596 180.712 464.309 212.024 455.028C226.298 450.796 259.31 440.996 293.003 404.285C301.348 395.192 360.224 394.875 355.132 336.593C352.303 304.214 345.682 273.939 344.274 252.171C342.865 230.402 378.155 181.82 384.083 150.032C390.011 118.244 358.969 49.7337 324.647 18.2324C290.325 -13.2688 244.19 1.53553 225.831 21.5391C191.985 58.4162 149.669 101.481 132.855 116.762C116.04 132.042 84.6708 135.826 54.6388 148.283C24.6068 160.739 25.4817 169.919 8.2739 198.799C-8.9339 227.68 6.03804 283.303 6.03804 283.303Z'
								fill='#004AAD'
							/>
						</svg>
					</div>
				</div>
			),
			specialStyle: '120px',
		},
		{
			title: (
				<>
					Hydration <br />& Sun Safety
				</>
			),
			text: 'We take Atlanta heat seriously. Campers get water breaks every 30-45 minutes. We encourage hats for sun, and we keep to shade or indoors during peak sun when possible. Our schedule may adjust on extremely hot days – Safety first, fun second!',
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute top-[-55.9px] left-[-38px]'>
						{curveOneTop}
					</div>
				</div>
			),
		},
		{
			title: (
				<>
					Weather <br /> Plans
				</>
			),
			text: 'Camp runs rain or shine. We have indoor activities ready for stormy days, and we monitor weather closely for safe outdoor play. In extreme weather events, we’ll notify you of any schedule changes. Safety is always the priority, but a little rain won’t stop our fun – we’ll just dance in it (unless it’s a thunderstorm).',
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute z-10 -top-[40px] left-[-30px]'>
						<svg
							width='368'
							height='417'
							viewBox='0 0 368 417'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M123.583 399.484C123.583 399.484 175.85 413.598 213.614 415.955C241.013 417.665 291.187 394.962 315.852 380.774C344.349 364.382 356.826 334.734 363.335 303.988C366.302 289.972 373.153 257.55 357.55 212.208C353.685 200.977 380.421 151.024 328.78 128.601C300.091 116.143 271.442 107.858 252.381 99.0649C233.319 90.2722 208.406 38.1349 184.233 18.5404C160.06 -1.05408 87.8642 -6.21709 45.4728 8.37008C3.08128 22.9573 -5.55482 68.7763 2.94688 93.4829C18.62 139.03 35.6434 194.58 40.8583 215.814C46.0732 237.047 34.8862 265.32 31.6497 296.44C28.4133 327.56 36.5801 331.03 53.1198 358.833C69.6594 386.637 123.583 399.484 123.583 399.484Z'
								fill='#004AAD'
							/>
						</svg>
					</div>
					<div className='absolute -bottom-[20.9px] left-[-25px]'>
						<svg
							width='335'
							height='413'
							viewBox='0 0 335 413'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M277.947 47.134C277.947 47.134 236.499 19.0759 204.193 5.65683C180.755 -4.07915 130.062 0.67363 104.23 5.65683C74.3861 11.4139 54.5597 33.576 39.6196 58.4931C32.8088 69.8521 17.0664 96.1317 17.0669 140.458C17.067 151.437 -21.3336 187.059 17.0667 222.192C38.4004 241.711 60.9533 257.57 74.9726 270.989C88.9918 284.408 95.0868 337.474 110.325 361.872C125.563 386.271 187.126 412.499 228.574 412.499C270.023 412.499 291.356 375.046 291.356 350.893C291.356 306.366 293.185 252.69 295.014 232.561C296.842 212.433 315.128 191.084 327.319 164.856C339.51 138.628 333.414 133.138 327.319 103.86C321.223 74.5821 277.947 47.134 277.947 47.134Z'
								fill='#F8EA2B'
							/>
						</svg>
					</div>
				</div>
			),
		},
		{
			title: (
				<>
					Photos <br />& Social Media
				</>
			),
			text: 'We love capturing the joy of camp! We often post photos on our private Facebook/Instagram for parents (only first names, no tags). If you prefer your child not be photographed, let us know on your registration form. Otherwise, enjoy the snapshots of their fun – and feel free to share with family and friends to show what your awesome kiddo is doing this summer!',
			bg: (
				<div className=' h-full z-0 absolute w-full top-0 left-0'>
					<div className='absolute -top-[40.9px] left-[-55px]'>
						<svg
							width='335'
							height='330'
							viewBox='0 0 335 330'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M182.149 1.45472C182.149 1.45472 137.062 -2.06007 105.697 1.83675C82.9401 4.66403 45.2571 31.0494 27.1995 46.5064C6.33757 64.3638 0.673606 90.629 0.07797 116.874C-0.193568 128.839 -0.810353 156.513 19.0006 191.325C23.9076 199.948 9.6737 245.085 55.5299 255.518C81.0057 261.314 105.803 263.692 122.809 267.966C139.815 272.24 168.318 311.194 191.189 323.546C214.059 335.899 274.124 328.988 306.671 310.467C339.219 291.945 339.232 252.998 328.438 234.028C308.537 199.058 285.984 156.084 278.424 139.459C270.864 122.833 275.681 97.8954 273.532 71.8486C271.383 45.8019 264.143 44.2144 246.271 23.9438C228.4 3.67329 182.149 1.45472 182.149 1.45472Z'
								fill='#75CB31'
							/>
						</svg>
					</div>
					<div className='absolute top-[30.9px] left-[-30px]'>
						<svg
							width='444'
							height='566'
							viewBox='0 0 444 566'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M27.5459 413.219C27.5459 413.219 60.5434 470.349 91.1261 504.856C113.315 529.892 176.161 553.43 209.661 562.387C248.363 572.736 284.629 557.863 316.687 536.91C331.302 527.359 365.096 505.252 390.61 452.683C396.929 439.662 462.968 419.516 437.657 355.749C423.596 320.323 405.981 288.535 397.082 264.552C388.182 240.569 411.501 174.127 407.475 136.421C403.45 98.7158 345.548 32.1793 296.399 8.32484C247.251 -15.5296 200.396 16.6098 186.493 45.2545C160.862 98.0618 127.797 160.667 114.043 183.487C100.288 206.306 66.3172 221.101 36.7639 245.19C7.21066 269.28 11.279 279.299 1.65393 317.529C-7.97118 355.76 27.5459 413.219 27.5459 413.219Z'
								fill='#004AAD'
							/>
						</svg>
					</div>
				</div>
			),
		},
	];
	// 1. Array Merging Logic (Put it here!)
	const mobilePolicies = [];
	const maxLen = Math.max(colOne.length, colTwo.length);

	for (let i = 0; i < maxLen; i++) {
		if (colOne[i]) mobilePolicies.push(colOne[i]);
		if (colTwo[i]) mobilePolicies.push(colTwo[i]);
	}
	return (
		<div className='relative'>
			<section className='w-full relative z-0 b  bg-[#F8FBFF] lg:bg-[#F8FBFF] mt-[78px] pt-[78px]'>
				<div className=' lg:block hidden'>
					<div className='absolute top-[163px] right-0'>
						<img
							src={rightBlob}
							alt=''
							className=' z-30  right-0 '
						/>
						<div className=' z-40  top-[50px] lg:block hidden absolute right-[-140px] w-fit h-fit'>
							<div
								style={{
									WebkitMaskImage: `url(${videoMask})`,
									maskImage: `url(${videoMask})`,
									WebkitMaskSize: 'contain',
									maskSize: 'contain',
									WebkitMaskRepeat: 'no-repeat',
									maskRepeat: 'no-repeat',
									WebkitMaskPosition: 'center',
									maskPosition: 'center',
								}}
								className='relative'>
								<img
									src={bg}
									className='h-[596.36px] w-[892.51px] object-cover'
								/>
								<div className='w-full absolute top-0 left-0 h-full opacity-20 bg-[#004AAD]'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[410px] relative lg:hidden overflow-hidden'>
					<img
						src={bg}
						className=' w-full h-full  object-cover '
					/>
					<img
						src={VidCurveMob}
						alt=''
						className='absolute z-20 -bottom-1 w-full'
					/>
				</div>
				<div className='max-w-[1243.406px]   w-full relative lg:px-[73px] px-[60px] pb-[50px]  lg:pb-[200px] pt-[50px] lg:pt-[137px] mx-auto'>
					<div className=' lg:block hidden space-y-[20px] '>
						<p className="max-w-[524.92px]  justify-start text-[#004aad] text-[75px] leading-[100%] font-bold font-['League_Spartan']">
							Tips for Parents
							<br />& Guardians
						</p>

						<p className="max-w-[391px] justify-center text-[#004aad] text-[25px] font-medium font-['Montserrat'] leading-8">
							To ensure a smooth and enjoyable camp experience for everyone,
							please take note of our key policies and some tips for parents.{' '}
							<br />
							<br />
							Our full camp handbook will be provided after registration, but
							here are the highlights.
						</p>
					</div>
					<div className='space-y-[30px] lg:hidden'>
						<p className="max-w-[309px]  justify-start text-[#004aad] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
							Tips for Parents & Guardians
							<br />
						</p>

						<p className="max-w-[261px] justify-start text-[#004aad] text-sm font-medium font-['Montserrat'] leading-[27.10px]">
							To ensure a smooth and enjoyable camp experience for everyone,
							please take note of our key policies and some tips for parents.{' '}
							<br />
							<br />
							Our full camp handbook will be provided after registration, but
							here are the highlights.
						</p>
					</div>

					<div className=' lg:hidden'>
						<div className=' absolute left-0 top-0'>
							<svg
								width='49'
								height='94'
								viewBox='0 0 49 94'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M-6.39633 88.7717C-33.8997 100.507 -53.4873 88.071 -63.6318 64.2968C-73.7764 40.5225 -59.7043 11.7359 -32.2009 0.000126499C1.73753 6.09091 48.3915 10.1705 48.3915 10.1705C20.4399 27.9187 21.107 77.036 -6.39633 88.7717Z'
									fill='#86D24A'
								/>
							</svg>
						</div>
						<div className=' absolute right-0 bottom-1/2 translate-y-1/2'>
							<svg
								width='90'
								height='197'
								viewBox='0 0 90 197'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M174.289 0.000215701C238.44 0.000216466 266.619 41.0323 266.619 96.4856C266.619 151.939 214.614 196.893 150.463 196.893C88.6236 156.299 4.7133e-05 108.967 4.7133e-05 108.967C70.0982 97.4808 110.137 0.000214936 174.289 0.000215701Z'
									fill='#86D24A'
								/>
							</svg>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full relative  min-h-screen bg-[#F8FBFF] lg:bg-[#F8FBFF] '>
				<div className=' lg:block hidden'>
					<div className=' absolute left-0 top-[80px]'>
						<svg
							width='115'
							height='201'
							viewBox='0 0 115 201'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M-2.80466 190.446C-61.8089 215.623 -103.831 188.942 -125.595 137.938C-147.358 86.9344 -117.169 25.1772 -58.1643 -2.76066e-05C14.6453 13.0668 114.734 21.8189 114.734 21.8189C54.7684 59.895 56.1996 165.268 -2.80466 190.446Z'
								fill='#75CB31'
							/>
						</svg>
					</div>
					<div className=' absolute right-0 top-[30px]'>
						<svg
							width='136'
							height='197'
							viewBox='0 0 136 197'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M174.289 0.000215701C238.44 0.000216466 266.619 41.0323 266.619 96.4856C266.619 151.939 214.614 196.893 150.463 196.893C88.6236 156.299 4.7133e-05 108.967 4.7133e-05 108.967C70.0982 97.4808 110.137 0.000214936 174.289 0.000215701Z'
								fill='#75CB31'
							/>
						</svg>
					</div>
				</div>
				<div className='max-w-[1243.406px]   w-full relative lg:px-0 px-[50px] pb-[100px] lg:pb-[200px] pt-[50px] lg:pt-[240px] mx-auto'>
					<div className='flex lg:flex-row items-center lg:items-start flex-col justify-center space-y-[51px] lg:space-y-0 lg:space-x-[141px]'>
						<div className='w-[331px] '>
							<div className='lg:block hidden'>
								{colOne.map((col) => (
									<div
										style={{
											marginBottom: col.specialStyle
												? col.specialStyle
												: '51px',
										}}
										className={`w-full max-w-[360px] lg:w-[360px]  relative space-y-[22px] pb-[60px] py-[26px] lg:py-[31.56px] pl-[32px] lg:pl-[50px] px-[26px]  ${
											col?.specialStyle ? col.specialStyle : 'mb-[51px]'
										} `}>
										<div className='h-full w-full z-10  bg-white rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] absolute inset-0'></div>
										{col?.bg}
										<p className='max-w-[507.17px] z-20 relative  justify-center text-[#004aad] text-[35.712px] font-normal MadeGentle leading-[40px]'>
											{col.title}
										</p>
										<p className="max-w-[272.745px relative   z-20 justify-center text-[#004aad] text-[15px]font-[400] font-['Montserrat'] leading-[29.303px]">
											{col.text}
										</p>
									</div>
								))}
							</div>
							<div className='lg:hidden'>
								{mobilePolicies.map((col) => (
									<div
										style={{
											marginBottom: col.specialStyle
												? col.specialStyle
												: '51px',
										}}
										className={`w-full max-w-[360px] lg:w-[360px]  relative space-y-[22px] pb-[60px] py-[26px] lg:py-[31.56px] pl-[32px] lg:pl-[50px] px-[26px]  ${
											col?.specialStyle ? col.specialStyle : 'mb-[51px]'
										} `}>
										<div className='h-full w-full z-10  bg-white rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] absolute inset-0'></div>
										{col?.bg}
										<p className='max-w-[507.17px] z-20 relative  justify-center text-[#004aad] text-[35.712px] font-normal MadeGentle leading-[40px]'>
											{col.title}
										</p>
										<p className="max-w-[272.745px relative   z-20 justify-center text-[#004aad] text-[15px]font-[400] font-['Montserrat'] leading-[29.303px]">
											{col.text}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='w-[331px] lg:block hidden space-y-[51px]'>
							{colTwo.map((col) => (
								<div
									style={{
										marginBottom: col.specialStyle ? col.specialStyle : '51px',
									}}
									className={`w-full max-w-[360px] lg:w-[360px]  relative space-y-[22px] pb-[60px] py-[26px] lg:py-[31.56px] pl-[32px] lg:pl-[50px] px-[26px]  ${
										col?.specialStyle ? col.specialStyle : 'mb-[51px]'
									} `}>
									<div className='h-full w-full z-10  bg-white rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] absolute inset-0'></div>
									{col?.bg}
									<p className='max-w-[507.17px] z-20 relative  justify-center text-[#004aad] text-[35.712px] font-normal MadeGentle leading-[40px]'>
										{col.title}
									</p>
									<p className="max-w-[272.745px relative   z-20 justify-center text-[#004aad] text-[15px]font-[400] font-['Montserrat'] leading-[29.303px]">
										{col.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<AnythingElse></AnythingElse>
		</div>
	);
}

export default Policies;
