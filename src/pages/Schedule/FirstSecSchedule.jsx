import FirstLeft from './FirstLeft.svg';
import FirstLeftMb from './FirstLeftMb.svg';
import kidVid from '../../assets/KidVid.mp4';
import Logo from '../../assets/logo.svg';
import { chevDown } from '../../assets/icons';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import firstCurve from './Assets/FirstCurve.svg';
function FirstSecSchedule() {
	return (
		<section className='pt-[78px] lg:min-h-[920px]  relative'>
			<div className='relative'>
				<video
					playsInline
					src={kidVid}
					loop
					autoPlay
					muted
					className='min-h-[800px]   lg:h-[920px] w-full object-cover object-center lg:object-left mix-blend-multiply'></video>

				{/* Black overlay */}
				<img
					src={firstCurve}
					className=' absolute bottom-[0] z-20 w-full'></img>
				<div className='absolute inset-0 bg-black/60 lg:bg-black/30'></div>
			</div>
			<div className='absolute top-[78px] z-10 w-full h-full'>
				<div className='max-w-[1284.2811px] space-y-[45px] pt-[80px] relative     top-0  h-full w-full text-white mx-auto'>
					<div className='max-w-[278.94px] w-full  lg:max-w-[771px] ml-[40px] lg:ml-[132px] mt-[100px] lg:mt-[100px]  space-y-[22px]    flex flex-col justify-center items-start '>
						<p className=" text-white  lg:w-full text-[50.04px] lg:text-[77.49px] font-bold font-['League_Spartan'] lg:leading-[66.97px] leading-[48.18px]">
							For Kiddos <br />
							at our Camp Every Day is a New{' '}
							<span className='text-[#75CB31]'>Adventure</span>
						</p>
					</div>
					<div className="w-full ml-[40px] lg:ml-[132px]  max-w-[266.502px] lg:max-w-[890px] min-h-[117px] justify-start text-white text-[15px] lg:text-[25px] font-[400] font-['Montserrat'] leading-[22.135px] lg:leading-[100%]">
						<p className="w-full   justify-start text-white text-[17.809px]  lg:text-[23.4588px] leading-[22.13px] lg:leading-normal font-[400] font-['Montserrat']">
							What happens when you give campers a little structure, with a lot
							of choice-making power, and a safe space to try new things? Magic-
							and we make it everyday.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FirstSecSchedule;
