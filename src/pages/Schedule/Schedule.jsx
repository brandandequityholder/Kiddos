import Activities from './Activities';
import { first } from './ActivitiesIcons';
import DailyProg from './DailyProg';
import FirstSecSchedule from './FirstSecSchedule';
import secCurve from './Assets/secCurve.svg';
import thirdCurve from './Assets/thirdCurve.svg';
import fourthCurve from './Assets/fourthCurve.svg';
import AnythingElse from '../../components/AnythingElse';
import fifthCurve from './Assets/fifthCurve.svg';

function Schedule() {
	return (
		<div className='  relative  w-screen   -mt-[5px]'>
			<FirstSecSchedule></FirstSecSchedule>
			<section className=' relative   bg-[#F8FBFF]  '>
				<div className='absolute lg:block hidden z-20 right-0 -bottom-[70px]'>
					<svg
						width='739'
						height='523'
						viewBox='0 0 739 523'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M743.877 426.217C743.877 426.217 798.116 358.653 823.261 306.686C841.505 268.981 828.644 189.549 816.898 149.282C803.328 102.762 757.141 73.3596 705.681 51.8768C682.221 42.0833 627.948 19.4487 538.095 23.0819C515.839 23.9818 441.185 -33.5648 372.41 29.7796C334.202 64.9711 303.49 101.783 277.18 124.957C250.871 148.131 143.688 162.077 95.2 188.071C46.712 214.065 -2.53661 313.151 0.101747 378.416C2.74011 443.68 80.0186 474.203 128.979 472.224C219.24 468.575 328.164 467.056 369.083 468.285C410.002 469.515 454.442 496.558 508.385 513.605C562.329 530.652 573.069 520.603 632.03 508.607C690.992 496.61 743.877 426.217 743.877 426.217Z'
							fill='#004AAD'
							fill-opacity='0.05'
						/>
					</svg>
				</div>
				<div className='absolute lg:hidden z-20 right-0 bottom-[100px]'>
					<svg
						width='428'
						height='523'
						viewBox='0 0 428 523'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M736.326 426.217C736.326 426.217 790.564 358.653 815.71 306.686C833.953 268.981 821.092 189.549 809.346 149.282C795.776 102.762 749.59 73.3596 698.129 51.8768C674.67 42.0833 620.396 19.4487 530.543 23.0819C508.287 23.9818 433.633 -33.5648 364.859 29.7796C326.65 64.9711 295.938 101.783 269.629 124.957C243.319 148.131 136.136 162.077 87.6482 188.071C39.1602 214.065 -10.0884 313.151 -7.45001 378.416C-4.81165 443.68 72.4668 474.203 121.428 472.224C211.688 468.575 320.612 467.056 361.531 468.285C402.451 469.515 446.89 496.558 500.834 513.605C554.777 530.652 565.517 520.603 624.479 508.607C683.44 496.61 736.326 426.217 736.326 426.217Z'
							fill='#004AAD'
							fill-opacity='0.05'
						/>
					</svg>
				</div>

				<div className='max-w-[306px] pt-[50px] lg:mx-auto lg:max-w-[1243.406px] ml-[40px] pr-0 mr-0  lg:pl-[132px] -mt-[1px] space-y-[50px] w-full  '>
					<p className='max-w-[306px]  lg:max-w-[1037px] w-full justify-center'>
						<span class='text-[#004aad] text-[50.732px]  lg:text-[63px] font-normal MadeGentle leading-[47.283px] lg:leading-[58.72px]'>
							What Does <br className='lg:hidden' /> Kiddos Have{' '}
							<br className='lg:hidden' />
							to Offer?
							<br />
						</span>
						<span class='text-[#75CB31] text-[50.732px]  lg:text-[63px] font-normal MadeGentle leading-[47.283px] lg:leading-[58.72px]'>
							A Whole Bunch!
						</span>
					</p>
					<p className=" pb-[20px] max-w-[300px] text-[#004AAD] lg:max-w-[971px] w-full min-h-[84px] justify-start text-[14px] lg:text-xl font-[400] lg:font-medium font-['Montserrat'] leading-[33.10px]">
						From start to finish, the camp day is all about your unique camper
						staying active, engaged, and having an absolute blast! We’ve crafted
						a fun-filled space where every moment is packed with chances to
						grow. Let's make unforgettable memories together!
					</p>
				</div>
				<div className='-mb-[5px] lg:bg-[#0A3E82] bg-transparent relative h-fit'>
					<div className='w-full absolute -top-2 h-[10px] bg-[#F8FBFF]'></div>
					<div className='w-full absolute top-0 h-[10px] bg-[#F8FBFF]'></div>

					<div className='lg:h-0 lg:hidden h-[99%] bg-[#0A3E82] absolute bottom-0 left-0 w-full'></div>
					<img
						src={secCurve}
						className='w-full relative  '></img>
				</div>
			</section>
			{/* Campers Only */}
			<section className='min-h-[669px]  relative bg-[#0A3E82] w-full'>
				<div className='lg:max-w-[1243.406px] lg:flex-row flex-col flex ml-[40px] lg:pl-[132px] lg:space-x-[60px] w-full py-[50px] lg:py-[156px] mx-auto'>
					<h1 className='w-[379px] pt-[46px] min-h-[225px] justify-center'>
						<span class='text-white text-[65.261px] lg:text-[83px] font-normal MadeGentle leading-[77px]'>
							Campers
							<br />
						</span>
						<span class='text-[#f8ea2b] text-[65.261px] lg:text-[83px]  font-normal MadeGentle leading-[77px]'>
							Choice
						</span>
					</h1>
					<p className="max-w-[292px] lg:max-w-[545px] w-full min-h-[132px] justify-start text-white  text-[14px] lg:text-[20px] font-medium font-['Montserrat'] leading-[33.10px]">
						With Campers Choice, every camper designs their own day, no two ever
						look the same! <br />
						<br /> Kids explore passions, try something new, and take ownership
						of their fun through art, athletics, science, dance, and more all
						within a safe, supportive, and wildly creative environment. <br />
						<br />
						Here are some of the over <strong>720 activities</strong> your child
						gets to choose from each day!
					</p>
				</div>
				<img
					src={thirdCurve}
					alt=''
					className='w-full -mb-[2px]'
				/>
			</section>
			<Activities></Activities>
			<section className='  relative z-10    w-full'>
				<div className='-mt-[2px] relative z-20'>
					<div className='bg-[#0B3976] absolute left-0 h-[10px] w-full -top-[2px]'></div>
					<img
						src={fourthCurve}
						alt=''
						className='w-full  absolute top-0'
					/>
				</div>
				<div className='bg-[#F8EA2B] z-10 relative'>
					<div className='max-w-[1243.406px]  pt-[130px] space-y-[50px] lg:space-y-[70px] items-center flex-col px-[40px] justify-center items-center w-full mx-auto'>
						<div className='flex justify-center'>
							<svg
								width='226'
								height='117'
								viewBox='0 0 226 117'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M59.3946 47.2487C57.942 46.7304 56.5402 45.9727 55.0493 45.7252C48.4132 44.6559 41.7295 43.6967 35.071 42.8006C33.4633 42.5813 32.1811 42.2143 31.9874 40.3555C31.8126 38.6354 33.0423 37.9091 34.3003 37.2995C34.8978 37.0072 35.5646 36.7969 36.2094 36.5772C63.2536 27.1238 90.7369 20.4179 118.98 17.5372C137.002 15.706 154.884 15.1726 172.759 16.9608C176.022 17.2891 176.335 17.1098 177.754 14.0622C179.335 10.6398 180.738 7.14169 182.376 3.76981C184.542 -0.707149 187.484 -1.27393 190.342 2.48439C194.366 7.78765 198.704 12.9117 201.135 19.3598C201.444 20.2233 202.015 20.9643 202.45 21.7775C209.6 20.9259 216.021 22.7384 222.13 25.6973C226.677 27.9077 227.046 30.9386 223.273 34.6482C219.326 38.5182 215.287 42.2968 211.166 45.9619C208.88 47.9848 207.92 50.2108 208.226 53.2668C208.691 57.7752 208.932 62.318 209.097 66.8543C209.164 69.3115 209.271 72.0995 206.67 73.5172C203.9 75.0197 201.777 73.1429 199.905 71.531C196.91 68.9412 194.064 66.1279 191.23 63.3462C188.226 60.413 187.996 60.3404 184.773 63.5025C181.907 66.3216 179.177 69.2512 176.368 72.1208C175.391 73.112 174.458 74.1221 173.411 75.0313C169.461 78.4823 166.727 77.597 165.769 72.5903C165.549 71.3993 165.361 70.1957 165.066 68.4502C163.214 68.8576 161.521 69.0194 160.004 69.6224C154.842 71.6923 149.706 73.8252 144.636 76.1693C122.402 86.4316 100.342 97.0816 79.0156 109.43C76.9923 110.6 75.0385 111.851 73.0121 112.967C71.3525 113.901 69.6485 114.816 67.9133 115.56C65.884 116.44 63.697 117.2 61.9206 115.367C60.1441 113.535 60.3111 111.204 61.1322 108.814C62.1181 105.92 63.1261 103.036 64.0678 100.123C64.3406 99.2476 64.4048 98.3089 64.6815 96.7562C62.9878 97.1008 61.7209 97.1843 60.5388 97.6177C49.9953 101.48 39.2879 104.933 29.2229 110.175C27.7688 110.936 26.2674 111.624 24.7063 112.025C20.4716 113.161 17.8466 110.259 19.3364 106.015C20.0211 104.063 21.0564 102.208 22.1736 100.468C24.7025 96.4857 27.4208 92.611 29.9938 88.648C30.5097 87.8768 30.7446 86.9069 31.3813 85.4302C29.8271 85.3906 28.5858 85.1718 27.3662 85.3278C20.475 86.186 13.5869 87.0978 6.69881 88.0096C5.39387 88.1813 4.00655 88.605 2.74625 88.4302C0.0645121 88.09 -0.880053 85.3609 0.935847 83.2146C2.16648 81.7575 3.7696 80.5907 5.26217 79.3765C20.4727 66.756 37.2371 57.1519 55.3254 50.1263C56.6844 49.5861 58.0057 48.9513 59.3522 48.3796C59.3621 47.9921 59.3846 47.6361 59.3946 47.2487ZM48.712 37.707C48.661 38.1291 48.6005 38.5732 48.5273 38.9857C49.7211 39.3148 50.9274 39.6753 52.1212 40.0043C57.3227 41.4248 62.5432 42.8012 67.7383 44.2974C69.131 44.7117 70.8013 45.4539 70.379 47.2836C70.0774 48.5906 69.0268 49.9944 67.9454 50.8625C66.6774 51.8596 65.034 52.3302 63.5516 52.9742C56.0889 56.2511 48.4152 59.0457 41.1888 62.8678C33.4914 66.9319 26.2005 71.8754 18.7836 76.5037C17.8889 77.0602 17.2022 78.0454 16.4304 78.8635C18.1609 79.5271 19.453 79.5066 20.7641 79.442C24.6217 79.2418 28.4857 78.9658 32.3495 78.8727C35.1265 78.8098 38.2925 78.3915 39.7105 81.4803C40.9961 84.3295 39.0566 86.7622 37.4648 89.0568C35.1895 92.3902 32.8793 95.6825 30.6703 99.0442C30.2145 99.7367 30.084 100.647 29.6117 101.985C31.116 101.533 31.9882 101.333 32.8415 100.994C40.9138 97.8215 48.9704 94.5642 57.0805 91.4866C60.2442 90.2838 63.4931 89.248 66.7731 88.5651C70.96 87.7227 73.4811 90.3182 72.7746 94.6898C72.3768 97.1307 71.3915 99.4764 70.7 101.87C70.2242 103.52 69.7926 105.189 69.3515 106.88C69.6008 107.091 69.8185 107.315 70.0678 107.527C100.168 89.2249 131.49 73.9803 164.41 62.1366C165.344 57.9669 164.925 54.4445 161.244 51.7437C158.599 49.8001 156.271 47.3655 153.958 45.0159C152.389 43.4296 150.856 41.7015 149.667 39.7817C147.813 36.7932 148.603 34.5985 151.842 33.2193C153.451 32.525 155.173 32.1144 156.877 31.7478C160.953 30.8579 165.061 30.1382 169.102 29.2073C170.208 28.9503 171.7 28.467 172.147 27.6138C173.207 25.6399 173.744 23.363 174.727 20.5983C131.574 19.1238 89.816 24.4364 48.7563 37.726L48.712 37.707ZM186.08 5.20117C184.937 7.24427 184.044 8.58519 183.395 10.0303C180.63 16.2612 177.855 22.5142 175.222 28.8019C174.275 31.0594 172.864 32.5698 170.624 33.15C166.601 34.2195 162.55 35.1723 158.502 36.1788C157.152 36.5143 155.793 36.8718 153.745 37.4301C155.039 38.9248 155.708 39.8643 156.528 40.6339C159.636 43.5073 162.685 46.4595 165.964 49.1189C168.407 51.1063 169.696 53.461 169.651 56.7843C169.613 59.6667 169.802 62.5682 170.001 65.4476C170.075 66.733 170.428 67.9809 170.798 70.0982C172.519 68.5377 173.651 67.6129 174.669 66.5872C177.683 63.5445 180.571 60.3694 183.643 57.3773C187.571 53.5513 189.694 53.5475 193.581 57.2251C195.794 59.3225 197.904 61.5332 200.158 63.5961C200.83 64.2237 201.796 64.5336 203.397 65.3765C203.087 60.569 202.933 56.6123 202.534 52.6805C202.125 48.5879 203.563 45.4962 206.63 42.8159C210.046 39.8147 213.253 36.5675 216.495 33.3613C217.187 32.666 217.628 31.7056 218.549 30.2986C212.851 28.8744 207.82 27.4226 202.688 26.4495C200.388 26.012 198.826 25.0809 197.646 23.139C194.717 18.3316 191.747 13.5588 188.745 8.7986C188.08 7.72992 187.228 6.79015 186.026 5.20422L186.08 5.20117Z'
									fill='#004AAD'
								/>
							</svg>
						</div>

						<p className='text-center justify-center text-[#004aad]  text-[31.502px] lg:text-[65px] font-normal MadeGentle lg:leading-[38.91px]'>
							QUESTS{' '}
							<span className='font-["Montserrat"]'>FOR THE BIG KIDS!</span>
						</p>
						<div className="max-w-[1029px] w-full mx-auto lg:h-[95px] text-center justify-start text-[#004aad] text-[15px]  lg:text-[20px] font-medium font-['Montserrat'] leading-8">
							Our rising 5th and 6th grade campers swap out some activity
							periods and they choose their very own QUEST! Each camper selects
							a long-term project or skill to dive deep into for the week—think
							Parkour, T-shirt Printing, Street Art, Sports, Sculpture, Cooking,
							and more! With three dedicated periods for their QUEST, they’ll
							explore their passions while also still enjoying three periods of
							dynamic activities mixed with all grades. Campers will pick their
							QUEST at registration!
						</div>
					</div>
				</div>
				<div className=' bg-[#F8EA2B] relative w-full h-[150px] z-0'></div>
				<img
					src={fifthCurve}
					className='w-full   bottom-0  z-[10] '></img>
			</section>
			<DailyProg></DailyProg>
			<div className='relative  -mt-[170px] lg:-mt-[250px]'>
				<AnythingElse></AnythingElse>
			</div>
		</div>
	);
}

export default Schedule;
