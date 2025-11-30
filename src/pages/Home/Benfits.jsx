import CampFeatures from './CampFeatures';
import CampFeaturesMob from './CampFeaturesMob';

function Benifits() {
	return (
		<section className='relative z-30 bg-[#F8FBFF]   '>
			<div className=' py-[70px] mx-auto w-full max-w-[306px] lg:max-w-[1284.2811px]  lg:px-[100px] lg:py-[100px]  '>
				<div className=' lg:space-y-0 space-y-[30px] lg:max-w-[1284.2811px]  w-full mx-auto'>
					<div className='max-w-[1016px] pb-[20px] justify-center'>
						<span class='text-[#004aad] text-[45px] leading-[48px] lg:leading-normal lg:text-[64.97px] font-normal MadeGentle capitalize'>
							What Makes Kiddos Camp the best <br className='lg:hidden' /> Camp
							For{' '}
						</span>{' '}
						<br className='lg:hidden' />
						<span class='text-[#74ca31] text-[45px] leading-[48px] lg:leading-normal lg:text-[64.97px] font-normal MadeGentle capitalize'>
							Your Kiddos?
						</span>
					</div>

					<div className="max-w-[306px]   lg:max-w-[946.55px] min-h-[78.96px] justify-start text-[#004AAD] text-[15px] lg:text-[20px] font-medium font-['Montserrat'] leading-[24.451px] lg:leading-[33.08px]">
						Kiddos has been recognized as one of Buckhead’s best summer camps –
						and we can’t wait to show your family why. If you’re looking for a
						summer camp in Atlanta that combines good ole’ fashion fun, learning
						experiences, and a caring atmosphere, you’ve found it!
						<br />
						<br />
						<br />
					</div>
					<div className='w-full'>
						<div className='lg:block hidden'>
							<CampFeatures></CampFeatures>
						</div>
						<div className='lg:hidden'>
							<CampFeaturesMob></CampFeaturesMob>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Benifits;
