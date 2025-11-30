import bg from './Assets/bgCamper.svg';
import CamperCurveOne from './Curves/CampCurveOne.svg';
import CamperCurveTwo from './Curves/CampCurveTwo.svg';

function CamperChoice() {
	return (
		<section className='  relative bg-[#004AAD]  w-full'>
			<img
				src={CamperCurveOne}
				alt=''
				className='w-full -mt-1 relative z-30'
			/>
			<div className='py-[70px]    lg:py-[200px]  w-full'>
				<div className='absolute top-0 opacity-60 w-full   aspect-auto h-full'>
					<img
						src={bg}
						alt=''
						className='w-full h-full object-cover'
					/>
					<div className='absolute top-0 left-0 w-full h-full  '></div>
				</div>
				<div className='space-y-[50px] lg:max-w-[1229px] mx-auto px-[40px] lg:px-[88px] z-10 relative max-w-[340px] w-full'>
					<div className='space-y-[20px] lg:space-y-[50px]'>
						<p className=' MadeGentle '>
							<span class="text-white text-[16.223px]  lg:text-[30.99px] font-medium font-['League_Spartan'] uppercase tracking-[6.803px] lg:tracking-[12.99px]">
								CAMPERS CHOICE
							</span>
							<br />
							<span class="text-white lg:visible  hidden text-[64.97px] font-bold font-['League_Spartan'] uppercase"></span>
							<span class='text-white  text-[28.352px] lg:text-[57.97px] font-normal MadeGentle uppercase'>
								THEIR DAY,{' '}
							</span>
							<span class='text-[#F8EA2B] text-[28.352px] lg:text-[57.97px] font-normal MadeGentle uppercase'>
								THEIR WAY
							</span>
							<span class='text-white text-[28.352px] lg:text-[57.97px] font-normal MadeGentle uppercase'>
								.
							</span>
						</p>
						<div className="w-full max-w-[952px]  min-h-[64.97px] justify-start text-white text-[17px] lg:text-[25px] font-medium font-['Montserrat'] leading-[27.689px] lg:leading-[33.084px]">
							With Campers Choice, every camper designs their own day. <br />
							Kids explore passions, try something new, and take ownership of
							their fun through art, athletics, science, dance, and more — all
							within a safe, supportive, and wildly creative environment.
						</div>
					</div>
					<button className='w-[189.598px] lg:w-[261.29px] flex items-center text-center justify-center h-[44px] lg:h-[60.21px] text-[#004aad] text-[14.411px]  lg:text-xl font-[700] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] bg-[#F8EA2B] rounded-[4.354px] lg:rounded-[6px]'>
						LEARN MORE
					</button>
				</div>
			</div>
			<img
				src={CamperCurveTwo}
				alt=''
				className='w-full -mb-[2px] relative z-30'
			/>
		</section>
	);
}

export default CamperChoice;
