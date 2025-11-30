import firstCurve from './firstCurve.svg';
import { useState } from 'react';
import secCurve from './secCurve.svg';
import lastCurve from './LastCurve.svg';
function Careers() {
	const faqs = [
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
		{
			qst: (
				<>
					This is a fake question that I am using to fill the gap while waiting.
				</>
			),
			ans: (
				<>
					Please note, while we stay around the same area our location is
					subject to change yearly in effort to provide an improved Kiddos
					experience with every passing year.
				</>
			),
		},
	];
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div>
			<section className='w-full relative bg-[#0B3D80] mt-[78px] pt-[78px]'>
				<div className='max-w-[1243.406px]   w-full relative lg:px-0 px-[66px] pb-[50px] pt-[60px]  lg:pt-[190px] lg:pl-[120px] mx-auto'>
					<div className='space-y-[40px]'>
						<p className="max-w-[1019px] justify-center text-white text-[50px]  lg:text-[64px] font-bold font-['League_Spartan'] leading-[44.5px] lg:leading-[67px]">
							Careers at Kiddos!
						</p>
						<p className="max-w-[958px] justify-start text-white text-[14px] lg:text-xl font-medium font-['Montserrat'] leading-[33.1px] lg:leading-[33.10px]">
							Kiddos has been recognized as one of Buckhead’s best summer camps
							– and we can’t wait to show your family why. If you’re looking for
							a summer camp in Atlanta that combines high-energy activities,
							learning experiences, and a caring atmosphere, you’ve found it!
							<br />
							<br />
							<br />
						</p>
					</div>
				</div>
				<img
					src={firstCurve}
					alt=''
					className='w-full -mb-1'
				/>
			</section>
			<section className='w-full relative bg-[#FFFDF0] pb-[167px]  pt-[80px]'>
				<div className='max-w-[1229.41px] space-y-[71px] w-full mx-auto px-[40px] lg:px-[100px]'>
					{faqs.map((el, i) => (
						<div
							key={i}
							className='space-y-[30px] lg:space-y-[40px]  pb-[30px] lg:pb-[66px] border-b border-[#004AAD]'>
							<button
								onClick={() => toggleFAQ(i)}
								className='flex space-x-[40px] lg:space-x-[100px] w-full text-left focus:outline-none'>
								<p className="justify-center text-[#004aad] text-[25px] lg:text-[50px] font-bold font-['League_Spartan'] leading-[27px] lg:leading-[67px]">
									{el.qst}
								</p>
								<div
									className={`w-[29px] lg:block hidden h-[25px] mt-[15px] transform transition-transform duration-300 ${
										openIndex === i ? 'rotate-180' : ''
									}`}>
									<svg
										width='29'
										height='25'
										viewBox='0 0 29 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M14.2893 0L28.5787 24.75L-0.000112534 24.75L14.2893 0Z'
											fill='#004AAD'
										/>
									</svg>
								</div>
								<div
									className={`w-[29px] lg:hidden h-[25px] mt-[15px] transform transition-transform duration-300 ${
										openIndex === i ? 'rotate-180' : ''
									}`}>
									<svg
										width='13'
										height='11'
										viewBox='0 0 13 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M6.14959 0L12.2992 10.6515L-6.10352e-05 10.6515L6.14959 0Z'
											fill='#004AAD'
										/>
									</svg>
								</div>
							</button>

							<div
								className={`overflow-hidden transition-all duration-500 ease-in-out ${
									openIndex === i
										? 'max-h-[500px] opacity-100'
										: 'max-h-0 opacity-0'
								}`}>
								<p className="max-w-[977px] w-full justify-center text-[#004aad] text-[14px]  lg:text-[38px] font-normal font-['League_Spartan'] leading-[33.1px] lg:leading-[50px]">
									{el.ans}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='bg-[#f8ea2b]  '>
				<img
					src={secCurve}
					alt=''
					className='w-full bg-[#FFFDF1]'
				/>
				<div className='max-w-[1243.406px] space-y-[31px] lg:space-y-[53px] pb-[44px] lg:pb-[200px] px-[50px] lg:pl-[150px] w-full mx-auto '>
					<div className="w-full max-w-[1019px] justify-center text-[#004aad] text-[50px] lg:text-[64px] font-bold font-['League_Spartan'] leading-[44.5px] lg:leading-[67px]">
						Anything Else?
					</div>
					<div className='w-full max-w-[962px]  justify-center'>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-normal font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							If you need to reach us at any time about anything regarding
							enrollment, your existing camper in our camp, financial
							information or anything else, reach out via our{' '}
						</span>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-bold font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							Contact Us page
						</span>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-normal font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							{' '}
							or email us as{' '}
						</span>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-bold font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							Support@kiddosummercamp.com
						</span>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-normal font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							.<br />
							<br />
							You may also call us between the hours of 8am and 7pm EST at{' '}
						</span>
						<span class="text-[#004aad] text-[14px] lg:text-[38px] font-bold font-['League_Spartan']  leading-[33.1px] lg:leading-[50px]">
							404.343.5667
						</span>
					</div>
				</div>
				<img
					src={lastCurve}
					alt=''
					className='w-full'
				/>
			</section>
		</div>
	);
}

export default Careers;
