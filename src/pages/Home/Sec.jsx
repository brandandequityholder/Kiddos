import { Link } from 'react-router-dom';
import BigLogo from '../Home/BigLogo.svg'; // <<< RESTORED IMPORT
import curveOne from './Curves/CurveOne.svg';

// This function now accepts the props from the 'secSection' Sanity data
function Sec({ mainHeadline, description, ctaText, ctaLink, infoBlocks }) {
	return (
		<section className='relative z-20 lg:mt-[-20px]'>
			<div className='relative top-1 z-20 w-full'>
				<img
					src={curveOne}
					alt=''
					className='w-full'
				/>
				{/* Static SVG decorative elements remain */}
				<div className='absolute lg:block hidden inset-0'>
					{/* SVG code here... */}
					<svg
						width='125'
						height='200'
						viewBox='0 0 125 200'
						fill='none'
						className='lg:w-[125px] -mt-[22px] lg:mt-0 w-[102px]'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M7.06945 190.355C-51.9066 215.52 -93.9086 188.852 -115.662 137.873C-137.415 86.8929 -107.24 25.1652 -48.2638 -2.35227e-05C24.5111 13.0606 124.552 21.8085 124.552 21.8085C64.615 59.8664 66.0455 165.19 7.06945 190.355Z'
							fill='#9AE85D'
						/>
					</svg>
				</div>
				<div className='absolute lg:hidden -top-1 inset-0'>
					{/* SVG code here... */}
					<svg
						width='74'
						height='105'
						viewBox='0 0 74 105'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M7.54232 100.502C-23.8065 112.043 -44.959 97.0619 -54.9356 69.9635C-64.9121 42.8652 -47.5865 11.5414 -16.2377 -2.75703e-05C21.2846 8.71137 73.1077 15.8966 73.1077 15.8966C40.9194 34.1211 38.8911 88.9603 7.54232 100.502Z'
							fill='#9AE85D'
						/>
					</svg>
				</div>
			</div>

			<div className='bg-[#F8FBFF] pt-[50px] pb-[50px] lg:pb-0 lg:pt-[50px] w-full'>
				<div className='w-full max-w-[306px] lg:max-w-[1284.2811px] space-y-[70px] lg:space-y-[120px] ml-[40px] lg:px-[131px] lg:mx-auto'>
					<div className='flex items-start lg:flex-row flex-col space-y-[40px] lg:space-y-0 space-x-0 lg:space-x-[52px]'>
						{/* <<< RESTORED BigLogo usage */}
						<img
							src={BigLogo}
							alt='Kiddos Camp Logo'
							className='w-[225px] lg:w-[329px]'
						/>

						<div className='space-y-[20px]'>
							{/* Dynamic mainHeadline */}
							<p className='max-w-[356.625px] text-[43.263px] lg:w-[1037px] text-[#004aad] lg:text-[56px] leading-[45.363px] lg:leading-[58.72px] MadeGentle justify-center'>
								{mainHeadline}
							</p>

							{/* Dynamic description */}
							<div className="max-w-[350px] lg:max-w-[629px] justify-start text-[#004aad] text-[15.474px] lg:text-xl font-[500] font-['Montserrat'] leading-[25.494px] lg:leading-[33px]">
								{description}
							</div>

							{/* Dynamic CTA Link/Button */}
							<Link
								to={ctaLink}
								className='w-[189.598px] lg:w-[261.29px] flex justify-center items-center text-[#fff] text-[14.149px] lg:text-xl font-[600] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] h-[43.688px] lg:h-[60.207px] bg-[#004AAD] rounded-[4.36px] lg:rounded-[6px]'>
								{ctaText}
							</Link>
						</div>
					</div>

					{/* Dynamic Information Blocks */}
					<div className='flex lg:flex-row lg:space-y-0 space-y-[30px] flex-col justify-between w-full'>
						{infoBlocks &&
							infoBlocks.map((block, index) => (
								<div
									className='flex'
									key={index}>
									<div className='space-y-[15px] lg:space-y-[20px]'>
										<div className='space-y-[15px] lg:space-y-[20px]'>
											{/* Block Title */}
											<p className='MadeGentle justify-center text-[#7DCE3E] text-[44.98px] font-normal uppercase leading-9'>
												{block.blockTitle}
											</p>
											<div>
												{/* Main Value Line */}
												<p className="max-w-[227px] lg:text-[24px] text-[18px] justify-start text-[#004aad] font-bold font-['League_Spartan'] lg:leading-[31px] leading-[22px]">
													<span style={{ whiteSpace: 'pre-wrap' }}>
														{block.mainValue}
													</span>
												</p>
											</div>
										</div>
										{/* Additional Details */}
										<p className="max-w-[284px] lg:max-w-[221px] justify-start text-[#004aad] text-[15px] lg:text-[20px] font-[500] font-['Montserrat'] leading-[25px] lg:leading-[33px]">
											{block.subText}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sec;
