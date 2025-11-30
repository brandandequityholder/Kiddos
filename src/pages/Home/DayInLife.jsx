import KidVid from '../../assets/KidVid.mp4';
import CurveThree from '../Home/Curves/CurveThree.svg';
import CurveTwo from '../Home/Curves/CurveTwo.svg';

function DayInLife() {
	return (
		<section className='relative z-[5] pb-[30px] lg:pb-[200px]  '>
			<img
				src={CurveTwo}
				alt=''
				className=' -mt-[1px] relative z-10 w-full'
			/>{' '}
			{/* keep overflow-hidden so section shows the cropped portion */}
			{/* Video wrapper: positioned up -416px, doesn't force height. */}
			<div className='absolute  h-[1210px] lg:h-full left-0 right-0 top-[-70px] lg:top-[-416px] -z-5 opacity-30 pointer-events-none'>
				{/* Use w-full and h-auto so the video keeps its natural aspect and full height (scaled by width). */}
				<video
					playsInline
					src={KidVid}
					loop
					autoPlay
					muted
					className=' h-full w-full lg:h-auto object-cover object-center lg:object-left'
				/>
			</div>
			{/* Overlay that covers the visible section area (not the video wrapper) */}
			<div className='absolute inset-0 -z-10 bg-[#004AAD] pointer-events-none' />
			{/* Content (section height determined by this) */}
			<div className='relative space-y-[30px] lg:space-y-[50px] max-w-[306px] ml-[40px] w-full lg:px-[90px]  lg:max-w-[1291.28px]    lg:mx-auto py-[100px] lg:py-[100px] '>
				<div className='max-w-[749px]  justify-center'>
					<span class='text-white text-[45px] lg:text-[57.97px] lg:leading-normal leading-[46px] font-normal MadeGentle'>
						A Day in the <br className='lg:hidden' /> Life of a{' '}
					</span>
					<br className='lg:hidden' />
					<span class='text-[#74ca31] text-[45px] lg:text-[57.97px] lg:leading-normal leading-[46px] font-normal MadeGentle'>
						Kiddos Camper
					</span>
				</div>

				<div className='flex flex-col space-y-6'>
					<div className='lg:block hidden'>
						<div className='max-w-[1024px]  justify-center'>
							<span class="text-[#9ae85d] text-[21px] font-bold font-['Montserrat'] leading-9">
								1.{' '}
							</span>
							<span class="text-white text-[21px] font-medium font-['Montserrat'] leading-9">
								The morning is a time to catch up with friends and play outside.{' '}
								<br />
							</span>
							<span class="text-[#9ae85d] text-[21px] font-bold font-['Montserrat'] leading-9">
								2.{' '}
							</span>
							<span class="text-white text-[21px] font-medium font-['Montserrat'] leading-9">
								Then the camp day is split up into 6 activity periods. <br />
							</span>
							<span class="text-[#9ae85d] text-[21px] font-bold font-['Montserrat'] leading-9">
								3.{' '}
							</span>
							<span class="text-white text-[21px] font-medium font-['Montserrat'] leading-9">
								Campers gather around our chart before each period and are given
								6 choices of activities. <br />
							</span>
							<span class="text-[#9ae85d] text-[21px] font-bold font-['Montserrat'] leading-9">
								4.{' '}
							</span>
							<span class="text-white text-[21px] font-medium font-['Montserrat'] leading-9">
								Every period we like to offer 2 sports, a visual art and/or
								performing art, science or nature, and then something else fun
								ranging from cooking, Gardening, Wood Working Etc. <br />
							</span>
							<span class="text-[#9ae85d] text-[21px] font-bold font-['Montserrat'] leading-9">
								5.{' '}
							</span>
							<span class="text-white text-[21px] font-medium font-['Montserrat'] leading-9">
								We also have backyard style water play as option each day and
								Fridays a big water slide!{' '}
							</span>
						</div>
					</div>
					<div className='lg:hidden'>
						<div className='max-w-[307px] justify-center'>
							<span class="text-[#9ae85d] text-[17px] font-[600] font-['Montserrat'] leading-6">
								1.{' '}
							</span>
							<span class="text-white text-[17px] font-[600] font-['Montserrat'] leading-6">
								The morning is a time to catch up with friends and play outside.
								<br /> <br />
							</span>
							<span class="text-[#9ae85d] text-[17px] font-[600] font-['Montserrat'] leading-6">
								2.
							</span>
							<span class="text-white text-[17px] font-[600] font-['Montserrat'] leading-6">
								{' '}
								Then the camp day is split up into 6 activity periods. <br />{' '}
								<br />
							</span>
							<span class="text-[#9ae85d] text-[17px] font-[600] font-['Montserrat'] leading-6">
								3.{' '}
							</span>
							<span class="text-white text-[17px] font-[600] font-['Montserrat'] leading-6">
								Campers gather around our chart before each period and are given
								6 choices of activities. <br /> <br />
							</span>
							<span class="text-[#9ae85d] text-[17px] font-[600] font-['Montserrat'] leading-6">
								4.
							</span>
							<span class="text-white text-[17px] font-[600] font-['Montserrat'] leading-6">
								{' '}
								Every period we like to offer 2 sports, a visual art and/or
								performing art, science or nature, and then something else fun
								ranging from cooking, Gardening, Wood Working Etc. <br /> <br />
							</span>
							<span class="text-[#9ae85d] text-[17px] font-[600] font-['Montserrat'] leading-6">
								5.{' '}
							</span>
							<span class="text-white text-[17px] font-[600] font-['Montserrat'] leading-6">
								We also have backyard style water play as option each day and
								Fridays a big water slide! <br /> <br />
							</span>
						</div>
					</div>
				</div>
				<button className='w-[189.598px] lg:w-[261.29px] flex justify-center items-center text-white text-[14.149px] lg:text-xl font-[600] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] h-[43.688px] lg:h-[60.207px] bg-[#004aad] rounded-[4.36px] lg:rounded-[6px]'>
					LEARN MORE
				</button>
			</div>
			<img
				src={CurveThree}
				className='w-full absolute bottom-0 -mb-[1px] z-10'
				alt=''
			/>
		</section>
	);
}

export default DayInLife;
