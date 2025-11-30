import React from 'react';

import leftAsset from './leftAsset.svg';
import rightAsset from './rightAsset.svg';
import rightBlob from './rightBlob.svg';
import videoMask from './videoSvg.svg';
import TopVid from '../../assets/TopVid.mp4';
import VidCurveMob from './VidCurveMob.svg';
import preview from './preview.png';
import midCurveOne from './midCurveOne.svg';
import midCurveTwo from './midCurveTwo.svg';
import lastCurve from './LastCurve.svg';
import secCurve from './secCurve.svg';
import AnythingElse from '../../components/AnythingElse';
import bg from './bg.jpg';
function Values() {
	return (
		<div>
			<section className='w-full relative z-10 lg:min-h-screen bg-[#F8FBFF]  mt-[78px] pt-[78px]'>
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
								}}>
								<img
									src={bg}
									className='h-[596.36px] w-[892.51px] object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[410px] relative lg:hidden overflow-hidden'>
					<img
						src={bg}
						className='h-[596.36px] w-[892.51px] object-cover'
					/>
					<img
						src={VidCurveMob}
						alt=''
						className='absolute z-20 -bottom-1 w-full'
					/>
				</div>
				<div className='max-w-[1243.406px]   w-full relative lg:px-0 px-[40px] pb-[50px]  lg:pb-[240px] pt-[50px] lg:pt-[150px] mx-auto'>
					<div className='pl-[70px] lg:block hidden space-y-[20px] '>
						<p className="w-full max-w-[524.92px]  justify-center text-[#004aad] text-[67.80px] leading-[100%] font-bold font-['League_Spartan']">
							A Camp that <br /> Truly Cares <br />
							About Your <br />
							<span className='text-[#64ad2a]'>Kiddos</span>
						</p>
						<p className="max-w-[382px]  justify-center text-[#004AAD] text-[20px] font-normal font-['Montserrat'] leading-[28.3px]">
							Since 2011, Kiddos Day Camp has been all about engaging, educating
							and empowering our campers! With a team that’s as passionate as
							they come, we create a summer experience where kids thrive and
							make lifelong memories in a fun and safe environment. Let the
							adventures begin!
						</p>
					</div>
					<div className="w-[345px] lg:hidden h-[200px] justify-start text-[#004aad] text-[50px] font-bold font-['League_Spartan'] leading-[44.50px]">
						A Camp that <br /> Truly Cares <br />
						About Your <br />
						<span className='text-[#64ad2a]'>Kiddos</span>
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
				<div className='max-w-[1243.406px] pb-[50px] lg:pb-[150px] space-y-[50px]  w-full relative lg:px-[126px] px-[40px]  mx-auto'>
					<div className='space-y-[30px] text-center lg:pt-0 pt-[100px] lg:text-start text-ce'>
						<p className='w-full max-w-[1037px] justify-center'>
							<span class='text-[#86D24A] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
								Our Pinky {'  '}
							</span>

							<span class='text-[#004aad] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
								Promise <br />
							</span>
						</p>
						<p class='text-[#004aad] text-[28px] lg:text-[47px] font-normal font-["Montserrat"] leading-[28px] lg:leading-[36.08px]'>
							We Take Care of Each Other
						</p>
					</div>
				</div>
				<img
					src={midCurveOne}
					alt=''
					className='w-full'
				/>
			</section>

			<section className='bg-[#EBF2FB] '>
				<div className='max-w-[1243.406px] pt-[100px]  space-y-[50px]  w-full relative lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<p className='w-full max-w-[1037px] justify-center'>
						<span class='text-[#86D24A] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Our Story <br />{' '}
							<span className='text-[#004AAD]'>& Our Mission</span>{' '}
						</span>
					</p>
					<p className="w-full max-w-[953px]  justify-start text-[#004aad] text-base lg:text-lg font-medium font-['Montserrat'] leading-7 lg:leading-9">
						Kiddos Camps was born from a simple idea: combine all the good
						things we’ve seen in youth programs and leave out the not-so-good.
						Founded by Atlanta native Lara Cornett in 2011, Kiddos started as a
						humble summer camp with just 25 children, and quickly grew to 70
						campers in just three weeks of its first summer. From that early
						success, Lara knew she was onto something special. Her “aha moment”
						on New Year’s Day 2011 sparked what she called “The Kiddos Way” – an
						approach to childcare that provides a fun place to play, where kids
						get to make choices, feel safe, and build confidence – all under the
						guidance of energetic role models who truly care about them.
					</p>
				</div>
				<div className='max-w-[1243.406px]  space-y-[50px]  w-full relative lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<p className='w-full max-w-[1037px] justify-center'>
						<span class='text-[#86D24A] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Our Growth
						</span>
					</p>
					<p className="w-full max-w-[953px]  justify-start text-[#004aad] text-base lg:text-lg font-medium font-['Montserrat'] leading-7 lg:leading-9">
						What began as a summer day camp expanded over the years into
						year-round offerings. Today, Kiddos is proud to run not only our
						flagship Day Camp each summer, but also several after-school
						programs at Atlanta elementary schools (E. Rivers, Atlanta Classical
						Academy, Garden Hills) during the school year. Additionally, we
						offer a year round Kiddos Early Learning Center for our younger
						kiddos just next door to Camp. We’ve stayed true to our roots even
						as we’ve grown – keeping “The Kiddos Way” alive requires an AMAZING
						team that feels more like family (“framily,” as we say). We are
						incredibly proud of our team’s dedication, which has enabled Kiddos
						Camps to consistently improve every year. Each summer is better than
						the last, as we learn, adapt, and add new fun traditions. 
					</p>
				</div>
				<div className='max-w-[1243.406px]   space-y-[50px]  w-full relative lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<p className='w-full max-w-[1037px] justify-center'>
						<span class='text-[#86D24A] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Our Team
						</span>
					</p>
					<p className="w-full max-w-[953px]  justify-start text-[#004aad] text-base lg:text-lg font-medium font-['Montserrat'] leading-7 lg:leading-9">
						Kiddos is run by a team of extraordinary leaders and camp
						counselors, many of whom have been with us for years. All team
						members undergo background checks and rigorous training each season.
						We train our counselors to not only prioritize safety, but also to
						be engaging role models who bring creativity, enthusiasm, and
						empathy to camp. Most of our counselors either work with the after
						school year round or started as campers and went through our
						counselor training program.  Our leadership team works closely with
						the counselors every day to maintain our high standards. We’re proud
						to say that some of our staff literally grew up with Kiddos – for
						example, a former Camper from 2011 is now a Camp Director. This
						continuity means our culture and knowledge are strong. When you drop
						your child off at Kiddos Day Camp, you can rest assured they are in
						capable hands.
					</p>
				</div>
			</section>
			<section className='bg-[#F8FBFF] pb-[50px] lg:pb-[100px]'>
				<img
					src={midCurveTwo}
					className='w-full'
					alt=''
				/>
				<div className='max-w-[1243.406px]  space-y-[50px]  w-full relative lg:px-[126px] px-[40px] pb-[50px]  mx-auto'>
					<p className='w-full text-[#004aad] max-w-[1037px] justify-center'>
						<span class=' text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Recognition
							<br /> &
						</span>
						<span class='text-[#86D24A] text-[40px] lg:text-[63px] font-normal MadeGentle leading-[42px] lg:leading-[58.72px]'>
							Community Trust
						</span>
					</p>
					<p className="w-full max-w-[1017px] justify-start text-[#004aad] text-base lg:text-lg font-medium font-['Montserrat'] leading-7 lg:leading-9">
						Kiddos Camps has been recognized in the community for excellence. We
						were honored to be voted “Best Summer Camp in Atlanta” in Red
						Tricycle’s Totally Awesome Awards. We’ve also received accolades for
						our after-school programs (earning a “Best Afterschool Program”
						title in a local Buckhaven poll).
						<br />
						<br />
						These awards mean a lot to us because they come from the families we
						serve – there’s no greater compliment than our parents and community
						saying we’re the best at what we do. Additionally, Newsweek’s 2024
						national camp rankings highlighted the importance of things we pride
						ourselves on – like diverse activities, great staff-to-camper
						ratios, and strong safety measures. <br />
						<br />
						We’re delighted to see our approach aligning with what experts and
						parents nationwide look for in a quality camp. But the true reward
						for us is the smiling faces of campers and the glowing feedback from
						parents who tell us their kids can’t wait to come back each day.
					</p>
				</div>
			</section>
			<div className='bg-[#F8FBFF]'>
				<AnythingElse></AnythingElse>
			</div>
		</div>
	);
}

export default Values;
