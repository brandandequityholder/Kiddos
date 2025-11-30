import React from 'react';

import leftAsset from './leftAsset.svg';
import rightAsset from './rightAsset.svg';
import rightBlob from './rightBlob.svg';
import videoMask from './videoSvg.svg';
import TopVid from '../../assets/TopVid.mp4';
import VidCurveMob from './VidCurveMob.svg';
import preview from './preview.png';
import bg from './bg.jpg';
import lastCurve from './LastCurve.svg';
import secCurve from './secCurve.svg';
import { stepFour, stepThree, stepTwo, stepOne, stepFive } from './stepsIcons';
import { Link } from 'react-router-dom';
import AnythingElse from '../../components/AnythingElse';
import { Four, One, Three, Two } from './Assets/icons';
function Pricing() {
	const steps = [
		{
			title: '1. Setup Your Account: ',
			text: (
				<>
					Click the “Enroll” button below (or on our menu) to go to our online
					registration portal. You’ll be prompted to create a Kiddos account (or
					sign in if you already have one from a previous year or our
					after-school programs).{' '}
					<strong>
						{' '}
						This only takes a minute – you’ll provide basic parent/guardian info
						and camper info.
					</strong>
				</>
			),
			icon: stepOne,
		},
		{
			title: '2. Week Selection: ',
			text: (
				<>
					Once logged in, choose Kiddos Day Camp 20XX (current summer season)
					and you’ll see the schedule of camp weeks (e.g., Week 1: early June,
					Week 2, etc., through July). Select the weeks you want your child to
					attend. You can pick one week or multiple – whatever fits your summer
					plans! Remember, you get benefits for enrolling in 4 or more weeks
					(like discounted aftercare), and siblings get a tuition discount as
					well. The system will automatically apply these discounts when you
					register.{' '}
					<strong>
						{' '}
						<span className='text-[#75CB31]'>
							<u>Click Here to Learn More About Fees & Discounts. </u>
						</span>
					</strong>
				</>
			),
			icon: stepTwo,
		},
		{
			title: '3. Complete Forms',
			text: 'Fill out the required registration form for each camper. This will include emergency contacts, authorized pick-ups, medical information (allergies, medications, etc.), t-shirt size, and other important details. Please answer all questions thoroughly – the more we know, the better we can ensure your kiddo is safe and has a great time.',
			icon: stepThree,
		},
		{
			title: '4. Pay Deposit',
			text: (
				<>
					To secure your spot, a $75 deposit per week per child is due at
					registration. If you opt for After Camp, the fee for that ($50/week)
					is added to your deposit, except if you qualify for a 4-week+ discount
					on after camp (then you pay only $15/week). You can pay by
					credit/debit card through the secure system. This deposit counts
					toward your camp tuition. You will receive an email confirmation and
					receipt once payment is processed.
					<strong>
						<span className='text-[#75CB31]'>
							<u>Click Here to Learn More About Fees & Discounts. </u>
						</span>
					</strong>
				</>
			),
			icon: stepFour,
		},
		{
			title: '5. Confirmation & Next Steps',
			text: (
				<>
					After you’ve registered and paid the deposit, you’ll get a detailed
					confirmation email. This email will list the weeks you’ve enrolled,
					and any balance due dates. We’ll also send you the Camp Orientation
					Packet a couple weeks before camp starts! If you register early in the
					year (which we recommend, as weeks do fill up), we’ll keep in touch
					with periodic updates leading up to summer.
					<span className='font-bold text-[#75CB31]'>
						<strong>
							{' '}
							<u>Camp tuition balances are due May 1.</u>
						</strong>
					</span>
					<br /> <span className='font-bold'>IMPORTANT NOTE:</span> <br /> Our
					system will auto-charge the card on file at that time unless you make
					other arrangements.
				</>
			),
			icon: stepFive,
		},
	];
	return (
		<div>
			<section className='w-full relative min-h-screen bg-[#F8FBFF]  mt-[78px] pt-[78px]'>
				<div className=' lg:block hidden'>
					<img
						src={leftAsset}
						alt=''
						className='absolute lg:block hidden bottom-[-220px] left-0'
					/>
					<img
						src={rightAsset}
						alt=''
						className='absolute  lg:block hidden bottom-[-220px] right-0'
					/>
					<div className='absolute top-[163px] right-0'>
						<img
							src={rightBlob}
							alt=''
							className=' z-30  right-0 '
						/>
						<div className=' z-40  top-[50px] lg:block hidden absolute right-[-100px] w-fit h-fit'>
							{/* <video
								playsInline
								src={TopVid}
								loop
								autoPlay
								muted
								preload='none'
								poster={preview}
								className='h-[596.36px] w-[892.51px] object-cover '
								style={{
									WebkitMaskImage: `url(${videoMask})`,
									maskImage: `url(${videoMask})`,
									WebkitMaskSize: 'contain',
									maskSize: 'contain',
									WebkitMaskRepeat: 'no-repeat',
									maskRepeat: 'no-repeat',
									WebkitMaskPosition: 'center',
									maskPosition: 'center',
									WebkitMaskMode: 'alpha',
									maskMode: 'alpha',
								}}
							/> */}
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
				<div className='max-w-[1243.406px]   w-full relative lg:px-0 px-[40px] pb-[50px]  lg:pb-[240px] pt-[50px] lg:pt-[160px] mx-auto'>
					<div className='pl-[70px] lg:block hidden space-y-[20px] '>
						<p className="w-full max-w-[524.92px]  justify-center text-[#004aad] text-[67.80px] leading-[100%] font-bold font-['League_Spartan']">
							Camp Rate <br /> & Registration Information
						</p>
						<p className="max-w-[377px] w-full  justify-center text-[#004aad] text-[20px] font-normal font-['Montserrat'] leading-[28.3px]">
							Enrolling in Kiddos Day Camp is easy and secure. We use an online
							registration system to streamline your sign-up process and ensure
							we have all the information we need to take the best care of your
							child. Follow the steps below to get started:
						</p>
					</div>
					<div className="w-[345px] lg:hidden h-[200px] justify-start text-[#004aad] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
						Camp Rate & Registration Information
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
						<div className=' absolute right-0 -bottom-0'>
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
			<section className='bg-[#F8FBFF]'>
				<div className='max-w-[1243.406px] space-y-[100px]  w-full relative lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<p className='w-full text-[#004aad] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px] max-w-[1037px] justify-center'>
						Enrollment in
						<span class='text-[#75CB31] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							{' '}
							5 Easy Steps!
						</span>
					</p>
					<div className='space-y-[120px] lg:space-y-[30px]'>
						{steps.map((el) => (
							<div className='flex lg:flex-row flex-col space-y-[20px] lg:space-y-0'>
								<div className='lg:w-[183px]'>
									<div className=' max-w-[150px] lg:min-w-[243px] lg:max-w-[244px] h-fit '>
										{el.icon}
									</div>
								</div>
								<div className="font-['Montserrat'] space-y-[10px] ">
									<p className='text-[20px] lg:text-[24px] leading-8 lg:leading-9 font-bold text-[#75CB31]'>
										{el.title}
									</p>
									<p className='leading-[24px] lg:text-base text-sm lg:leading-[36px] text-[#004AAD] font-[500]'>
										{el.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='max-w-[1243.406px] space-y-[50px]  w-full relative pt-[50px] lg:pt-[100px] lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<div className='w-full lg:w-[1037px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Summer Camp Rates, <br />
						</span>
						<span class='text-[#004aad] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Fees & Discounts
						</span>
					</div>
					<div className=' lg:max-w-[819.69px] min-h-[100px] mx-auto  border-[0.80px] border-[#75CB31]'>
						<div className='border-b-[0.80px] items-center lg:space-y-0 space-y-[10px] justify-between lg:flex-row flex flex-col pl-[15px] lg:py-0 py-[20px] lg:px-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center  w-full lg:w-[391px]  text-[#004AAD] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								Base Rate:{' '}
							</div>
							<div className='justify-center text-[#75CB31] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								$275.00 / Per Week
							</div>
						</div>
						<div className='border-b-[0.80px] items-center lg:space-y-0 space-y-[10px] justify-between lg:flex-row flex flex-col pl-[15px] lg:py-0 py-[20px] lg:px-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center  w-full lg:w-[391px]  text-[#004aad] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								One Time Deposit:
							</div>
							<div className='justify-center text-[#75CB31] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								$75/ Per Camper
							</div>
						</div>
						<div className='border-b-[0.80px] items-center lg:space-y-0 space-y-[10px] justify-between lg:flex-row flex flex-col pl-[15px] lg:py-0 py-[20px] lg:px-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center   text-[#004aad] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								Pay Schedule:
							</div>
							<div className='justify-center text-[#75CB31] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								Full Balance Due May 1, 2026{' '}
							</div>
						</div>
						<div className='border-b-[0.80px] items-center flex px-[40.86px] py-[20px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=" justify-center text-[#004aad] text-[17px] font-medium font-['Montserrat'] leading-[30.42px]">
								To secure your spot, a $75 deposit per week per child is due at
								registration. If you opt for After Camp, the fee for that
								($50/week) is added to your deposit, except if you qualify for a
								4-week+ discount on after camp (then you pay only $15/week). You
								can pay by credit/debit card through the secure system. This
								deposit counts toward your camp tuition. The remaining balance
								will be charged to card on file on May 1st, 2026
								<br />
							</div>
						</div>
						<div className='border-b-[0.80px] items-center lg:space-y-0 space-y-[10px] lg:flex-row flex flex-col pl-[15px] lg:py-0 py-[20px] lg:pl-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center  text-[#004aad] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								Other Add-Ons & Discounts
							</div>
						</div>
						<div className='border-b-[0.80px]  flex  items-center    min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' lg:flex-1  '>
								<div className=' h-[250px] lg:h-[212.93px] lg:pt-[40px] flex items-center justify-center'>
									{One}
								</div>
								<div className='h-[250px] lg:h-[212.93px] lg:pt-[40px] flex items-center justify-center'>
									{Two}
								</div>
								<div className='h-[239.34px] lg:pt-[40px] flex items-center justify-center'>
									{Three}
								</div>
								<div className='h-[212.93px] lg:pt-[40px] flex items-center justify-center'>
									{Four}
								</div>
							</div>
							<div className='w-full lg:w-[553.93px] h-full pb-[18px] lg:border-l-[0.80px] border-[#75CB31]'>
								<div className=' h-[250px] lg:h-[212.93px]  space-y-[10px] relative flex flex-col justify-center  lg:pl-[34.42px] w-full'>
									<div className='absolute right-[-55.23px] bottom-0'>
										<svg
											width='902'
											height='204'
											viewBox='0 0 902 204'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M793.591 197.258C797.573 196.761 801.532 196.573 805.487 195.89C818.772 193.596 852.163 182.132 885.211 125.487C914.331 75.576 897.613 40.0503 884.142 22.583C877.342 13.767 866.527 9.80549 855.424 8.98805C817.738 6.21359 723.157 2.31946e-05 631.957 1.94456e-05C530.636 1.52805e-05 176.898 7.66921 81.8344 9.77148C66.51 10.1104 52.0811 16.4071 42.9912 28.7491C32.3652 43.177 18.5478 65.1875 9.76026 91.6106C4.26947 108.121 1.47235 125.702 0.164554 141.656C-2.35571 172.399 24.4446 195.187 55.267 193.972C147.28 190.347 338.094 185.175 492.134 196.451C673.257 209.708 769.77 200.228 793.591 197.258Z'
												fill='#004AAD'
												fill-opacity='0.07'
											/>
										</svg>
									</div>

									<p className=" text-[#004aad]  text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[22px] lg:leading-[34.42px] justify-center">
										<span className='uppercase'>
											Register Early-by January 15
										</span>{' '}
										<br />
										<span className="text-[#004aad] text-[14px] lg:text-[20.012px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											Register early and get a Kiddos mesh back pack and a fun
											Kiddos water bottle. Hydration and snacks? You’re all set
											for camp fun! <br />
										</span>
									</p>
									<Link to={'/contact'}>
										<button className='w-[140px] lg:w-[165.87px] h-[38.22px] justify-center text-white text-[11px] lg:text-[13.18px] font-bold font-["Montserrat"] leading-[29.77px] tracking-widest bg-[#75CB31] rounded-[6px]'>
											ENROLL NOW
										</button>
									</Link>
								</div>
								<div className='h-[250px] lg:h-[212.93px]  relative flex flex-col justify-center  lg:pl-[34.42px] w-full'>
									<div className='absolute right-[-77.23px] bottom-1/2 lg:translate-y-0 translate-y-1/2 lg:bottom-0'>
										<svg
											width='955'
											height='199'
											viewBox='0 0 955 199'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M91.1277 198.888C91.1277 198.888 -33.9183 195.124 8.95051 153.052C26.8078 135.527 31.8534 105.275 31.6624 75.9406C31.4022 35.9966 62.0655 -1.9587 101.958 0.078426C168.651 3.48408 262.989 7.57317 331.488 7.57317C434.2 7.57316 796.384 15.4455 885.294 17.4129C898.149 17.6974 910.648 22.1224 919.718 31.2365C935.672 47.2687 958.364 74.9796 953.502 99.0287C949.339 119.623 934.393 148.886 922.201 170.412C912.049 188.335 892.555 198.424 871.968 197.717C795.74 195.101 603.961 188.954 466.219 188.259C290.661 187.373 91.1277 198.888 91.1277 198.888Z'
												fill='#004AAD'
												fill-opacity='0.07'
											/>
										</svg>
									</div>

									<p className=' text-[#004aad] text-[14px] lg:text-xl font-bold font-["League_Spartan"] leading-[22px] lg:leading-[34.42px] justify-center'>
										ADD BONUS HOURS: <br />
										<span className="text-[#004aad] text-[14px] lg:text-xl font-normal font-['League_Spartan'] leading-[26px] lg:leading-[34.42px]">
											Extended After Camp (2:30–6:00){' '}
										</span>
										<span className="text-[#75CB31] text-[14px] lg:text-xl font-bold font-['League_Spartan'] leading-[34.42px]">
											+ $50.00 per week{' '}
										</span>
										<br />
										<span className="text-[#004aad] text-[14px] lg:text-xl font-normal font-['League_Spartan'] leading-[26px] lg:leading-[34.42px]">
											(or $15/day if 4 days or more). <br /> Before Camp
											(7:45–9:00){' '}
										</span>
										<span className="text-[#75CB31] text-[14px] lg:text-xl font-bold font-['League_Spartan'] leading-[34.42px]">
											is complimentary.
											<br />
										</span>
									</p>
								</div>
								<div className='h-[250px] lg:h-[239.34px] pt-[15px]   relative flex flex-col justify-center  lg:pl-[34.42px] w-full'>
									<div className='absolute right-[-77.23px] bottom-0'>
										<svg
											width='955'
											height='215'
											viewBox='0 0 955 215'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M863.044 214.528C863.044 214.528 988.09 210.308 945.221 163.131C917.962 133.133 892.143 79.9877 876.954 45.2612C867.998 24.7865 848.976 10.2162 826.692 8.53053C781.535 5.11462 700.867 -0.000163001 622.683 -0.000166215C520.587 -0.000170412 162.117 8.72197 70.5042 10.9932C56.5725 11.3385 43.2485 16.5681 34.0267 27.0165C18.0984 45.0636 -4.14983 75.8248 0.669073 102.553C4.87592 125.886 20.0902 159.142 32.3497 183.347C42.1806 202.757 62.6253 213.967 84.3669 213.133C162.005 210.154 351.495 203.382 487.953 202.61C663.511 201.617 863.044 214.528 863.044 214.528Z'
												fill='#004AAD'
												fill-opacity='0.07'
											/>
										</svg>
									</div>

									<p className=' justify-center'>
										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											SIBLING DISCOUNT:{' '}
										</span>{' '}
										<br />
										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											Discounted rates to make it easier for siblings to attend
											together. <br />
											Second child
										</span>
										<span class="text-[#75CB31] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											{' '}
										</span>
										<span class="text-[#75CB31] text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											+ $240/week
											<br />
										</span>
										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											Third child{' '}
										</span>
										<span class="text-[#75CB31] text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[34.42px]">
											+ $150/week.{' '}
										</span>
									</p>
								</div>
								<div className='h-[250px] lg:h-[212.13px]  pt-[25px]  relative flex flex-col justify-center  lg:pl-[34.42px] w-full'>
									<div className='absolute right-[-52.23px] bottom-0'>
										<svg
											width='902'
											height='197'
											viewBox='0 0 902 197'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M130.178 15.6751C130.178 15.6751 58.6573 -1.73416 16.0859 71.0113C-13.0389 120.779 3.68907 156.201 17.1621 173.612C23.9609 182.398 34.7569 186.341 45.8363 187.154C83.4979 189.919 178.111 196.117 269.34 196.117C370.678 196.117 724.519 188.469 819.511 186.375C834.806 186.037 849.211 179.766 858.302 167.461C868.929 153.077 882.748 131.131 891.537 104.785C897.428 87.1241 900.218 68.2335 901.395 51.4372C903.445 22.1852 878.922 0.0214991 849.599 0.00160397C758.484 -0.060214 562.698 1.64541 404.11 15.6751C189.778 34.6364 130.178 15.6751 130.178 15.6751Z'
												fill='#004AAD'
												fill-opacity='0.07'
											/>
										</svg>
									</div>

									<p className=' justify-center'>
										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[34.42px]">
											MULTI-WEEK DISCOUNT: <br />
										</span>
										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											If a camper attends 4 or more weeks: <br />
											You can save {` `}
										</span>
										<span class="text-[#75CB31] text-[14px] lg:text-xl font-semibold font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											$140.00!{' '}
										</span>

										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											or more per child for After camp!
										</span>

										<span class="text-[#004aad] text-[14px] lg:text-[20px] font-normal font-['League_Spartan'] leading-[22px] lg:leading-[34.42px]">
											<br />
											The discount takes the rate to
										</span>
										<span class="text-[#75CB31] text-[14px] lg:text-[20px] font-bold font-['League_Spartan'] leading-[34.42px]">
											$15/week.
											<br />
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className='border-b-[0.80px] items-center justify-between lg:flex-row flex-col flex px-[15px] lg:py-0 py-[20px] space-y-[15px] lg:space-y-0 lg:px-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center    text-[#004aad] text-[26px] lg:text-[31.64px] font-normal MadeGentle leading-[28px] leading-[26px] lg:leading-[34.42px]'>
								Scholarships
							</div>
							<button className='w-[276.97px] flex items-center h-[38.42px] bg-[#75CB31] justify-center text-white text-[13.184px] font-[600] font-["Montserrat"] leading-[29.77px] tracking-[1.676px] rounded-md'>
								APPLY FOR A SCHOLARSHIP
							</button>
						</div>
						<div className='border-b-[0.80px] items-center flex px-[30.86px] py-[20px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=" justify-center text-[#004aad] text-[17px] font-medium font-['Montserrat'] leading-[31.219px]">
								We believe every child should have the chance to go to camp. We
								offer a limited number of scholarship spots each summer for
								families with financial need. These are typically partial
								scholarships (covering a portion of tuition) awarded to
								returning campers and then on a first-come, first-considered
								basis. If you could use assistance, please apply for a
								scholarship or contact us for the simple application form. We
								consider income and any special circumstances, and handle all
								inquiries confidentially.  <br />
								<br /> The deadline for scholarship applications is February 15.
								Email{' '}
								<Link
									to={'mailto::info@KiddosAtlanta.com'}
									className='text-[#75CB31] font-bold text-[17px] underline'>
									info@KiddosAtlanta.com
								</Link>{' '}
								to see if scholarships are still available and to receive the
								link to our scholarship application.
							</div>
						</div>
						<div className='border-b-[0.80px] items-center  flex px-[40.86px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=' justify-center    text-[#004aad] text-[31.64px] font-normal MadeGentle leading-[34.42px]'>
								Cancelation Policy
							</div>
						</div>
						<div className=' items-center flex px-[30.86px] py-[20px]  min-h-[84.851px] w-full border-[#75CB31]'>
							<div className=" justify-center text-[#004aad] text-[17px] font-medium font-['Montserrat'] leading-[30.42px]">
								If you need to cancel, just shoot us an email at
								info@KiddosAtlanta.com by Friday May 22, and we’ll only keep the
								$75 per week deposit. No last-minute cancellations,
								please—summer school is not an exception! If you bail without
								that notice or forget to show up, the full balance will still be
								charged. And remember, until that balance is settled, campers
								can’t return to camp or any Kiddos program. So, please plan
								ahead!
							</div>
						</div>
					</div>
				</div>
			</section>
			<AnythingElse></AnythingElse>
		</div>
	);
}

export default Pricing;
