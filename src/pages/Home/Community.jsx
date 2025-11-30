import BgRight from './Assets/BgRight.svg';
import BgLeft from './Assets/BgLeft.svg';
import lastCurve from './Curves/LastCurve.svg';
import ScrollX from './ScrollX';
function Community() {
	return (
		<section className='relative   bg-[#F8EA2B]'>
			<div className='py-[50px] lg:pt-[200px]'>
				<div className=' top-0 left-0 inset-0 w-full h-full'>
					<img
						src={BgRight}
						alt=''
						className='absolute right-[-150px] lg:right-0'
					/>
					<img
						src={BgLeft}
						alt=''
						className='absolute lg:block hidden left-0-0'
					/>
				</div>
				<div className=' lg:pl-0 pl-[56px] lg:max-w-[1278.65px] relative mx-auto w-full'>
					<div className='lg:w-[1111.47px] space-y-[10px] justify-center'>
						<p className="text-[#004aad] text-[16.449px] lg:text-[30.99px] font-medium font-['League_Spartan'] uppercase tracking-[6.898px] leading-[100%] lg:tracking-[12.99px]">
							TESTIMONIALS
						</p>
						<p className="text-[#004aad] text-[64.97px] font-bold font-['League_Spartan'] uppercase"></p>
						<p className='text-[#004aad] text-[30.776px] leading-[100%] lg:text-[57.97px] font-normal MadeGentle uppercase'>
							OUR COMMUNITY LOVES KIDDOS !<br />
						</p>
					</div>

					{/* Horizontal scroll section */}
				</div>
			</div>
			<ScrollX></ScrollX>
			<img
				src={lastCurve}
				alt=''
				className='w-full relative'
			/>
		</section>
	);
}

export default Community;
