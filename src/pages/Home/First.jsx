import FirstLeft from './FirstLeft.svg';
import FirstLeftMb from './FirstLeftMb.svg';
import bgVid from '../../assets/bgVid.mp4';
import Logo from '../../assets/logo.svg';
import { chevDown } from '../../assets/icons';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import { useEffect } from 'react';
import curveOne from './Curves/CurveOne.svg';
function First() {
	return (
		<section className='pt-[78px] z-20 h-[920px] relative'>
			<div className='relative'>
				<video
					playsInline
					src={bgVid}
					muted
					webkit-playsinline='true'
					autoPlay
					loop
					preload='auto'
					style={{ width: '100%', display: 'block' }}
					className='h-[920px] w-full object-cover  '></video>

				{/* Black overlay */}

				<div className='absolute inset-0 bg-black/40'></div>
			</div>
			<div className='absolute top-[78px] z-10 w-full h-full'>
				<img
					src={FirstLeft}
					alt=''
					className='h-[1216.778px] hidden lg:block absolute left-0 top-0'
				/>
				<img
					src={FirstLeftMb}
					alt=''
					className='h-[1216.778px] lg:hidden  absolute left-0 top-0'
				/>
				<div className='max-w-[1284.2811px] relative     top-0  h-full w-full text-white mx-auto'>
					<div className='h-[80px] w-full '></div>
					<div className='max-w-[278.94px] lg:max-w-[738px] lg:px-0 mt-[100px] lg:mt-[202px] mx-auto space-y-[30px] lg:space-y-[40px]    flex flex-col justify-center items-start '>
						<div className='space-y-[20px] lg:space-y-[30px]'>
							<p className=" text-white  lg:w-full text-[55.749px] lg:text-[77.49px] font-bold font-['League_Spartan'] lg:leading-[66.97px] leading-[48.18px]">
								Atlanta's Best Camp
								<br />
								For Your Kiddos
							</p>

							<p className="w-full lg:max-w-[738.65px]  justify-start text-white text-[17.809px]  lg:text-[23.4588px] leading-[22.13px] lg:leading-normal font-[400] font-['Montserrat']">
								Kiddos Summer Camps transform summer into an experience. Think
								of camp songs being belted, kids just being kids, silly camp
								counselor names, no technology in the way, and a smorgasbord of
								activities to choose from!
							</p>
						</div>
						<button className='w-[189.598px] lg:w-[261.29px] flex justify-center items-center text-[#004AAD] text-[14.149px] lg:text-xl font-[600] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] h-[43.688px] lg:h-[60.207px] bg-[#F8EA2B] rounded-[4.36px] lg:rounded-[6px]'>
							LEARN MORE
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default First;
