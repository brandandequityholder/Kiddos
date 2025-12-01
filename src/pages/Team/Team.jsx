import founderVid from './FounderVid.mp4';
import React from 'react';
import curveOne from './curveOne.svg';
import lastCurve from './LastCurve.svg';
import leftAsset from './leftAsset.svg';
import rightAsset from './rightAsset.svg';
import rightBlob from './RightBlob.svg';
import videoMask from './videoSvg.svg';
import TopVid from './TopVid.mp4';
import VidCurveMob from './VidCurveMob.svg';
import preview from './preview.png';
import founderSvg from './FounderSvg.svg';
import founderOne from './01.mp4';
import founderTwo from './02.mp4';
import founderThree from './03.mp4';
import founderFour from './05.mp4';
import founderFive from './04.mp4';
import BlobOne from './BlobOne.svg';
import BlobTwo from './BlobTwo.svg';
import BlobThree from './BlobThree.svg';
import BlobFour from './BlobFour.svg';
import BlobFive from './BlobFive.svg';
function FounderCard({
	videoSrc,
	name,
	description,
	surname = 'PROGRAMS DIRECTOR',
	blob = BlobOne,
	blobPos,
}) {
	return (
		<div className='bg-white overflow-hidden  space-y-[20px]   lg:pl-[48px]  pt-[48px] px-[30px] py-[24px] w-full lg:w-[359px] rounded-[30px] h-fit  lg:h-[730px] '>
			<div className='relative  rounded-[20px] overflow-hidden'>
				<video
					playsInline
					src={videoSrc}
					loop
					autoPlay
					muted
					className=' w-[265px] rounded-[20px] h-[265px] object-cover'></video>

				<img
					className={`absolute w-full bottom-0 ${blobPos}`}
					src={blob}
					alt=''
				/>
			</div>

			<div className='space-y-[5px]'>
				<div className='w-full justify-center text-[#004aad] text-[28.38px] font-normal MadeGentle leading-[25.68px]'>
					{name}
				</div>
				<div className='w-[403.09px] justify-center text-[#74ca31] text-[15px] font-normal MadeGentle leading-[25.68px]'>
					{surname}
				</div>
				<div className=" w-full justify-start text-[#004aad] text-[15px] font-[500] font-['Montserrat'] leading-[23.29px]">
					{description}
				</div>
			</div>
		</div>
	);
}

function Team() {
	return (
		<div className='overflow-x-hidden relative'>
			<section className='w-full relative  bg-[#F8FBFF] lg:bg-[#F8FBFF] mt-[78px] pt-[78px]'>
				<div className=' lg:block hidden'>
					<img
						src={leftAsset}
						alt=''
						className='absolute lg:block hidden bottom-[-50px] left-0'
					/>
					<img
						src={rightAsset}
						alt=''
						className='absolute  lg:block hidden bottom-[-50px] right-0'
					/>
					<div className='absolute top-[163px] right-0'>
						<img
							src={rightBlob}
							alt=''
							className=' z-30  right-[60px] '
						/>
						<div className=' z-40  top-[60px] lg:block hidden absolute right-[-200px] h-[596.36px] w-[892.51px] '>
							<video
								playsInline
								src={TopVid}
								loop
								autoPlay
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
							/>
						</div>
					</div>
				</div>
				<div className='h-[410px]   relative lg:hidden overflow-hidden'>
					<video
						playsInline
						src={TopVid}
						loop
						autoPlay
						muted
						className=' w-full h-full  object-cover '
					/>
					<img
						src={VidCurveMob}
						alt=''
						className='absolute   z-20 -bottom-1 w-full'
					/>
				</div>
				<div className='max-w-[1243.406px]  w-full relative lg:pl-[40px] lg:px-0  px-[40px] pb-[100px] lg:pb-[300px] pt-[50px] lg:pt-[137px] mx-auto'>
					<p className='max-w-[671px] lg:block hidden  justify-start'>
						<span class="text-[#004aad] text-[75px] leading-[100%] font-bold font-['League_Spartan']">
							We Care for, <br /> Build Confidence in, <br />& Yield Creativity{' '}
							from, Your Kids.
						</span>
						<span class="text-[#74ca31] text-[75px] leading-[100%] font-bold font-['League_Spartan']">
							<br />
							Welcome <br />
							to Kiddos <br />
						</span>
					</p>

					<p className='max-w-[345px]  lg:hidden  justify-start'>
						<span class="text-[#004aad] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
							We Care for, Build Confidence in, & Yield Creativity
						</span>
						<br className='lg:hidden' />
						<span class="text-[#004aad] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
							from, <br /> Your Kids. <br />
						</span>
						<span class="text-[#71c92d] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
							Welcome <br />
							to Kiddos
						</span>
					</p>
					<div className='lg:hidden'>
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
			<section className='w-full h-fit bg-[#F8FBFF] lg:bg-[#F8FBFF]'>
				<div className='max-w-[1243.406px] lg:pl-[32px] px-[40px]  lg:space-x-[80px]  justify-start flex lg:flex-row flex-col w-full mx-auto'>
					<p className='w-full max-w-[815.77px] pb-[40px] lg:hidden  justify-center'>
						<span class='text-[#004aad] text-[39.333px] font-normal MadeGentle leading-[36.973px]'>
							Owner <br /> & Founder
							<br />
						</span>
						<span class='text-[#86d24a] text-[39.33px] font-normal MadeGentle leading-[36.97px]'>
							Lara Cornett
						</span>
					</p>

					<div className='relative'>
						<div className='bg-white z-10 relative rounded-[30px]     py-[24px] w-full max-w-[328px] lg:w-[328px] h-[534px]'>
							<video
								playsInline
								src={founderVid}
								loop
								autoPlay
								muted
								className='w-[85%] max-w-[268px] lg:w-[268px] relative h-[487px] z-10 rounded-[20px] mx-auto  object-cover'></video>

							<img
								src={founderSvg}
								alt=''
								className='lg:flex hidden z-10 w-[433px] absolute bottom-[23px] right-[35px]  justify-center '
							/>
						</div>
						<div className='absolute  -top-[10px] -left-[30px]'>
							<svg
								width='384'
								height='570'
								viewBox='0 0 384 570'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M345.308 294.64C340.538 265.656 353.461 230.638 358.035 190.304C365.374 125.597 320.638 63.9229 264.064 36.5124C191.496 -1.5707 134.779 -15.9273 58.9963 23.2347C28.1068 39.1975 13.7635 75.7708 5.72336 114.967C2.05809 132.835 -6.40562 174.171 8.52818 236.943C12.2272 252.492 -18.0139 312.987 36.064 352.692C66.1075 374.75 96.2592 391.307 116.202 406.642C136.144 421.977 160.727 495.532 185.709 526.096C210.691 556.66 287.249 577.692 332.843 566.846C378.438 555.999 389.288 497.377 381.15 463.173C366.149 400.116 350.078 323.623 345.308 294.64Z'
									fill='#004AAD'
									fill-opacity='0.17'
								/>
							</svg>
						</div>
					</div>
					<div className='  space-y-[20px] lg:space-y-[20px]'>
						<div className='max-w-[1037px] lg:block hidden  justify-center'>
							{' '}
							<span class='text-[#004aad] text-6xl font-normal MadeGentle leading-[58.72px]'>
								Owner & Founder
								<br />
							</span>
							<span class='text-[#74ca31] text-6xl font-normal MadeGentle leading-[58.72px]'>
								Lara Cornett
							</span>
						</div>

						<div className="w-full max-w-[320px] lg:max-w-[650px]  justify-start text-[#004AAD] text-[14px] lg:text-[20px] font-[500] lg:font-[500] font-['Montserrat'] leading-[27.8px] lg:leading-[33px] ">
							Lara is the founder and operator of Kiddos (our campers
							affectionately call her “Excel”). She grew up in Atlanta and
							attended Morris Brandon, Sutton, and North Atlanta before earning
							her BBA from Georgia State University. Lara has experienced camp
							life from all angles: she was a camper and after-school
							participant herself, and later became a counselor, teacher,
							mentor, and director. Creating Kiddos has been her way to give
							back to the community that raised her, and she leads our program
							with boundless energy, genuine care, and an eye for detail.
						</div>
					</div>
				</div>
			</section>
			<section className='bg-[#F8FBFF] lg:bg-[#F8FBFF] '>
				<div className='max-w-[1243.406px] space-y-[100px]  px-[40px] lg:pl-[115px] pb-[100px] pt-[100px] lg:pt-[240px] w-full mx-auto'>
					<div className='space-y-[30px]'>
						<h1 className='lg:block hidden w-full max-w-[1037px]  justify-center'>
							<span class='text-[#004aad] text-[63px] font-normal MadeGentle leading-[58.72px]'>
								Trusted Team
								<br />& Experienced Leadership
								<br />
							</span>
							<span class='text-[#75CB31] text-[63px] font-normal MadeGentle leading-[58.72px]'>
								Since 2011
							</span>
						</h1>
						<h1 className='max-w-[364px] w-full lg:hidden  justify-center'>
							<span class='text-[#004aad] text-[39.33px] font-normal MadeGentle leading-[36.97px]'>
								Trusted Team
								<br />& Experienced Leadership
								<br />
							</span>
							<span class='text-[#86d24a] text-[39.33px] font-normal MadeGentle leading-[36.97px]'>
								Since 2011
							</span>
						</h1>

						<div className="max-w-[1015px] lg:block hidden w-full justify-center text-[#004aad] text-xl font-medium font-['Montserrat'] leading-9">
							Our Kiddos team leaders are a group of extraordinary people who
							work to provide a caring, high energy, well organized, and over
							the top program!{' '}
						</div>

						<div className="max-w-80 w-full lg:hidden justify-start text-[#004aad] text-sm font-medium font-['Montserrat'] leading-[27.10px]">
							Our Kiddos team leaders are a group of extraordinary people who
							work to provide a caring, high energy, well organized, and over
							the top program!{' '}
						</div>
					</div>
				</div>
				<div className='relative pb-[200px]  px-[40px] lg:pl-[32px]  w-full mx-auto'>
					<div className='absolute h-[90%] bottom-0 left-0 w-full bg-[#004AAD2B]'></div>
					<img
						src={curveOne}
						className='absolute  bg-[#F8FBFF] top-[300px] lg:top-[136px] left-0 w-full'
						alt=''
					/>
					<div className='space-y-[44px] lg:space-y-[76px] lg:max-w-[1243.406px] w-full mx-auto   '>
						<div className='flex lg:flex-row justify-center items-center flex-col relative space-y-[44px]  lg:space-x-[32px]  lg:space-y-0 '>
							<FounderCard
								videoSrc={founderOne}
								name='Ms Chay'
								description={
									<>
										Our kiddos lovingly call her <strong>“Cornbread.”</strong>{' '}
										Ms. Chay is our Programs Director and has been with Kiddos
										since 2016 and truly embodies our fun-loving Kiddos culture.
										She makes sure all of our after-school programs and summer
										camps stay top-notch by overseeing all three sites. She’s
										often the friendly voice on the main phone, taking care of
										our families, leading our team, and making sure every kiddo
										is having a great time!
									</>
								}
								surname='PROGRAMS DIRECTOR'
							/>
							<FounderCard
								videoSrc={founderTwo}
								name='Ms Becca'
								description={
									<>
										Our kiddos lovingly call her <strong>“BK Thunder.”</strong>{' '}
										Ms. Becca has been part of the Kiddos family since 2016. She
										started as a teacher at our E. Rivers location and worked
										her way up to lead teacher and assistant director. In 2022,
										she proudly stepped into the role of Director at E. Rivers.
										Ms. Becca’s creativity, attention to detail, and genuine
										love for every kiddo are exactly why your child will beg to
										stay a little longer each day!
									</>
								}
								surname='DIRECTOR, E. RIVERS'
								blob={BlobTwo}
								blobPos='left-[-70px]'
							/>
							<FounderCard
								videoSrc={founderThree}
								name='Delaney Dunn'
								description={
									<>
										Our kiddos affectionately call her <strong>“Pepto.”</strong>{' '}
										Delaney has been with Kiddos since we first opened in 2011,
										when she started as a counselor-in-training and grew into a
										counselor, teacher, and assistant director. Now she shines
										as the Director at ACA (Atlanta Classical Academy).
										Delaney’s genuine love for every kiddo, her dedication to
										her job, and her willingness to jump in wherever needed make
										her a rockstar to her teammates and to the kiddos alike!
									</>
								}
								surname='DIRECTOR, ATL CLASSICAL ACADEMY'
								blob={BlobThree}
								blobPos='left-[-40px]'
							/>
						</div>
						<div className='flex lg:flex-row flex-col space-y-[44px] lg:space-y-0  relative justify-center lg:space-x-[32px] items-stretch'>
							<FounderCard
								videoSrc={founderFour}
								name='Sophie Quillin'
								description={
									<>
										Our kiddos fondly call her <strong>“Sassy.”</strong> Sophie
										joined Kiddos in 2014 as a high school helper and grew into
										roles as a teacher, lead teacher, office coordinator, and
										interim director. Today, she proudly serves as the Director
										at Garden Hills. Sophie truly embodies the Kiddos values and
										knows how to lead a highly motivated, happy team. She has a
										special way of keeping everyone organized and thoughtful
										while making sure everything stays fun!
									</>
								}
								surname='ASSISTANT DIRECTOR'
								blob={BlobFour}
							/>
							<FounderCard
								videoSrc={founderFive}
								name='Briaja Gilbert'
								description={
									<>
										Our kiddos fondly call her <strong>“Honey Bee.”</strong>{' '}
										Briaja joined Kiddos in 2024 and very quickly we realized
										she was not only drinking the “Kiddos Koolaid” but she was
										bringing creative ideas, exemplary with our kiddos and her
										attention to detail help make Kiddos better (and run even
										smoother). She works with Chay in the office as our Office
										coordinator and is the e. Eriver After School Asst.
										Director.
									</>
								}
								surname='DIRECTOR, GARDEN HILLS'
								blob={BlobFive}
							/>
						</div>
					</div>
				</div>
				<div>
					<img
						src={lastCurve}
						alt=''
						className='w-full -bottom- bg-[#CEDEF1]'
					/>
				</div>
			</section>
		</div>
	);
}

export default Team;
