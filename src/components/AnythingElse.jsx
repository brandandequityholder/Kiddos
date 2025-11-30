import secCurve from './secCurve.svg';
import lastCurve from './LastCurve.svg';
import { Link } from 'react-router-dom';
function AnythingElse() {
	return (
		<section className='  relative z-30 '>
			<img
				src={secCurve}
				alt=''
				className='w-full '
			/>
			<div className='bg-[#f8ea2b]'>
				<div className='space-y-[38px] bg-[#f8ea2b] lg:block hidden max-w-[962px] pb-[150px] w-full mx-auto'>
					<p className=' justify-center text-[#004aad] text-[64px] font-normal MadeGentle leading-[67px]'>
						Anything Else?
					</p>

					<p className=' w-full  justify-center'>
						<span class="text-[#004aad] text-[30px] font-normal font-['Montserrat'] leading-[50px]">
							If you need to reach us at any time about anything regarding
							enrollment, your existing camper in our camp, financial
							information or anything else, reach out via our{' '}
						</span>
						<span class="text-[#004aad] text-[30px] font-[650] font-['Montserrat'] leading-[50px]">
							<Link to={'/contact'}>Contact Us</Link>
						</span>
						<span class="text-[#004aad] text-[30px] font-normal font-['Montserrat'] leading-[50px]">
							{' '}
							page or email us at{' '}
						</span>
						<span class="text-[#004aad] text-[30px] font-[650] font-['Montserrat'] leading-[50px]">
							<Link href='mailto:Info@kiddosatlanta.com'>
								Info@kiddosatlanta.com
							</Link>
						</span>{' '}
						<br /> <br />
						<span class="text-[#004aad] text-[30px] font-normal font-['Montserrat'] leading-[50px]">
							During the school year we are available Monday- Friday from
							10am-6pm when school is in session via txt or phone call at{' '}
						</span>
						<span class="text-[#004aad] text-[30px] font-[650] font-['Montserrat'] leading-[50px]">
							<Link href='tel:4049553184'>404.955.3184</Link>
						</span>
						<span class="text-[#004aad] text-[30px] font-normal font-['Montserrat'] leading-[50px]">
							. During the summer from 7:30am-6pm
						</span>
					</p>
				</div>
				<div className='space-y-[32px] max-w-[334px] bg-[#f8ea2b]  lg:hidden  pb-[49px]  w-full mx-auto'>
					<p className=' max-w-[312px] justify-center text-[#004aad] text-[45px] font-normal MadeGentle leading-[50px]'>
						Anything Else?
					</p>

					<p className='  justify-start'>
						<span class="text-[#004aad] text-[15px] font-medium font-['Montserrat'] leading-[33.10px]">
							If you need to reach us at any time about anything regarding
							enrollment, your existing camper in our camp, financial
							information or anything else, reach out via our{' '}
						</span>
						<span class="text-[#004aad] text-[15px] font-extrabold font-['Montserrat'] leading-[33.10px]">
							<Link to={'/contact'}>Contact Us</Link>{' '}
						</span>
						<span class="text-[#004aad] text-[15px] font-medium font-['Montserrat'] leading-[33.10px]">
							page or email us at{' '}
						</span>
						<span class="text-[#004aad] text-[15px] font-extrabold font-['Montserrat'] leading-[33.10px]">
							<Link href='mailto:Info@kiddosatlanta.com'>
								Info@kiddosatlanta.com
							</Link>
						</span>
						<br />
						<br />
						<span class="text-[#004aad] text-[15px] font-medium font-['Montserrat'] leading-[33.10px]">
							During the school year we are available Monday- Friday from
							10am-6pm when school is in session via txt or phone call at{' '}
						</span>
						<span class="text-[#004aad] text-[15px] font-bold font-['Montserrat'] leading-[33.10px]">
							<Link href='tel:4049553184'>404.955.3184</Link>.
						</span>
						<span class="text-[#004aad] text-[15px] font-medium font-['Montserrat'] leading-[33.10px]">
							{' '}
							During the summer from 7:30am-6pm
							<br />
						</span>
					</p>
				</div>
			</div>
			<img
				src={lastCurve}
				alt=''
				className='w-full bg-[#f8ea2b]'
			/>
		</section>
	);
}

export default AnythingElse;
