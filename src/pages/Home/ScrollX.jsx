import { useRef, useState } from 'react';
import Bg from './Assets/ScrollBg.svg';

// 1. CLEAN DATA STRUCTURE (Moved outside component, strings only)
const DATA = [
	{
		cmnt: 'We have complete faith and trust in Kiddos to do the right thing and help our village raise respectful, bright, creative and compassionate kids. WE LOVE KIDDOS',
		name: (
			<div className='lg:w-[350px] h-10 justify-center'>
				<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
					Abby T. ,{' '}
				</span>
				<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
					CAMP PARENT
				</span>
			</div>
		),
		cmntStyle: 'max-w-[503px] min-w-[204px]',
	},
	{
		cmnt: 'My girls jump out of the car and have a full day of activities.  It’s exactly how summer camp should be. My campers can’t wait for next year! I have and love recommending Kiddos!',
		name: (
			<>
				<div className='lg:w-[350px] h-10 justify-center'>
					<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
						Sybille B.,{' '}
					</span>
					<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
						CAMP PARENT
					</span>
				</div>
			</>
		),
		cmntStyle: 'max-w-[525px] min-w-[204px]',
	},
	{
		cmnt: 'Kiddos has a structure and an atmosphere that I haven’t seen replicated anywhere else - and we’ve lived all across the country! Kiddos is truly a unique experience and gives me such peace of mind.',
		name: (
			<>
				<div className='lg:w-[350px] h-10 justify-center'>
					<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
						Lynn S.,{' '}
					</span>
					<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
						CAMP PARENT
					</span>
				</div>
			</>
		),
		cmntStyle: 'max-w-[510px] min-w-[204px]',
	},
	{
		cmnt: 'I love Kiddos because it reminds me of the old-school summer camps I attended in the outdoors with NO screens. I plan to sign him up again every year.',
		name: (
			<div className='lg:w-[350px] h-10 justify-center'>
				<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
					Dianna H.,{' '}
				</span>
				<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
					CAMP PARENT
				</span>
			</div>
		),
		cmntStyle: 'max-w-[525px] min-w-[204px]',
	},
	{
		cmnt: 'My son has participated in the Kiddos summer program for several years. I can say without a doubt, it is his favorite time of the year besides Christmas.',
		name: (
			<div className='lg:w-[373px] h-10 justify-center'>
				<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
					Jasmine H.,{' '}
				</span>
				<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
					CAMP PARENT
				</span>
			</div>
		),
		cmntStyle: 'max-w-[525px] min-w-[204px]',
	},
	{
		cmnt: (
			<>
				You all are truly and one of the best parts of my "kiddo's" childhood...
				and have given them some of the best memories I could ask for as a
				single Mother.{' '}
			</>
		),
		name: (
			<div className='lg:w-[350px] h-10 justify-center'>
				<span class="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase">
					Aiso R.,{' '}
				</span>
				<span class="text-[#004aad] text-[11.96px] lg:text-[20px] font-bold font-['Montserrat'] uppercase">
					CAMP PARENT
				</span>
			</div>
		),
		cmntStyle: 'max-w-[525px] min-w-[204px]',
	},
];

function ScrollX() {
	const [activeIndex, setActiveIndex] = useState(0);
	const scrollRef = useRef(null);

	// Drag scrolling refs
	const isDown = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	// --- Scroll Handlers ---
	const handleMouseDown = (e) => {
		isDown.current = true;
		scrollRef.current.classList.add('cursor-grabbing');
		scrollRef.current.classList.remove('cursor-grab');
		startX.current = e.pageX - scrollRef.current.offsetLeft;
		scrollLeft.current = scrollRef.current.scrollLeft;
	};

	const handleMouseLeave = () => {
		isDown.current = false;
		if (scrollRef.current) {
			scrollRef.current.classList.remove('cursor-grabbing');
			scrollRef.current.classList.add('cursor-grab');
		}
	};

	const handleMouseUp = () => {
		isDown.current = false;
		if (scrollRef.current) {
			scrollRef.current.classList.remove('cursor-grabbing');
			scrollRef.current.classList.add('cursor-grab');
		}
	};

	const handleMouseMove = (e) => {
		if (!isDown.current) return;
		e.preventDefault();
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = (x - startX.current) * 1.5; // Increased multiplier slightly for faster drag
		scrollRef.current.scrollLeft = scrollLeft.current - walk;
	};

	const handleScroll = () => {
		if (!scrollRef.current) return;
		const scrollPosition = scrollRef.current.scrollLeft;
		// Calculate approximate item width including margin
		// Note: using the first child's width is safer than scrollWidth / length
		const itemWidth = scrollRef.current.children[0].offsetWidth + 23; // 23 is right margin
		const newIndex = Math.round(scrollPosition / itemWidth);

		// Only update if changed to prevent excessive re-renders
		if (activeIndex !== newIndex && newIndex >= 0 && newIndex < DATA.length) {
			setActiveIndex(newIndex);
		}
	};

	const scrollToItem = (index) => {
		if (scrollRef.current && scrollRef.current.children[index]) {
			scrollRef.current.children[index].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
			setActiveIndex(index);
		}
	};

	// 2. Helper Component for the Name Text to avoid repetition
	const NameBlock = ({ name, title }) => (
		<div className="text-[#004aad] text-[15.295px] lg:text-[25.58px] font-bold font-['Montserrat'] uppercase whitespace-nowrap">
			{name}
		</div>
	);

	return (
		<div className='flex flex-col   space-y-[50px] lg:space-y-[100px] pb-[40px] lg:pb-[50px] items-center'>
			{/* Scroll Container */}
			<div className=''>
				<div
					ref={scrollRef}
					className='flex w-screen  lg:pl-[150px]  lg:space-x-[73px] pr-[40px] lg:pr-[150px] overflow-x-auto hide-scrollbar cursor-grab scroll-smooth select-none'
					onMouseDown={handleMouseDown}
					onMouseLeave={handleMouseLeave}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
					onScroll={handleScroll}>
					{DATA.map((el, i) => (
						<div
							key={i}
							className={`w-fit  mr-[23px] lg:mr-0 overflow-hidden lg:w-[645.35px] flex-col space-y-[28px] ${
								i === 0 && 'ml-[50px]'
							}  shrink-0   text-2xl font-semibold relative`}>
							<div className='relative flex w-full lg:w-[645.35px] items-center justify-center'>
								<img
									src={Bg}
									alt='Scroll Background'
									draggable='false'
									className='pointer-events-none lg:block hidden lg:w-fit w-[385.918px] select-none'
								/>
								<div className='pointer-events-none lg:hidden  lg:w-fit w-[385.918px] select-none'>
									<svg
										width='386'
										height='219'
										viewBox='0 0 386 219'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M346.239 11.3709C360.866 11.3709 374.983 17.1596 379.872 27.8428C398.938 69.4992 367.6 80.2454 358.823 119.866C350.046 159.486 387.41 160.486 346.239 191.587C307.834 220.599 178.771 199.512 161.608 196.549C160.354 196.332 159.108 196.551 157.992 197.164L119.617 218.258C116.514 219.963 112.63 218.36 111.633 214.962L107.666 201.438C106.816 198.539 103.816 196.841 100.883 197.566C88.4251 200.646 56.5663 207.786 35.7029 205.931C9.29509 203.584 5.26778 189.764 3.23159 177.967C-1.22809 152.129 19.0093 127.864 10.4097 100.954L10.4 100.925C3.7303 80.0538 -5.61559 50.8052 4.36925 26.4778C8.50867 16.3924 22.047 11.3709 35.7029 11.3709C35.7029 11.3709 137.496 -5.25989e-06 192.585 0C247.674 5.25989e-06 346.239 11.3709 346.239 11.3709Z'
											fill='#FFFDF1'
										/>
									</svg>
								</div>
								<div className='absolute   top-0 px-[40px] py-[35px] lg:pt-[70px] lg:px-[60px]  text-start'>
									<div
										className={`lg:block max-w-[503px]  hidden text-[#004aad] text-[27.05px] font-normal moreSugar leading-[42.20px] ${el.cmntStyle}`}>
										{el.cmnt}
									</div>
									<div className='lg:hidden  max-w-[300.793px] w-full block text-[#004aad] text-[16.176px] font-normal moreSugar leading-[25.24px]'>
										{el.cmnt}
									</div>
								</div>
							</div>

							<div className='flex justify-center'>
								{/* Desktop Name Tag */}
								<div className='lg:block relative hidden w-[445px] h-[77px]'>
									<svg
										width='100%'
										height='100%'
										viewBox='0 0 445 77'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='absolute inset-0'>
										<path
											d='M414.864 2.05621C447.715 9.26721 431.124 14.9659 442.439 23.0926C450.788 44.4556 431.937 47.4757 415.26 62.7166C392.723 83.3114 105.393 74.3605 105.393 74.3605L75.8892 74.5531C75.8892 74.5531 53.7873 76.0013 39.2361 74.5531C24.685 73.1049 1.99598 62.0209 0.309076 50.8699C-2.74926 30.6533 17.8247 18.9442 18.8416 15.9219C21.0776 9.27658 25.707 -6.0258 74.7922 2.5408C123.877 11.1074 382.012 -5.15479 414.864 2.05621Z'
											fill='#F0DD2B'
										/>
									</svg>
									{/* Text Overlay */}
									<div className='absolute inset-0  pt-[5px] flex items-center justify-center z-10 pl-8'>
										<NameBlock
											name={el.name}
											title={el.title}
										/>
									</div>
								</div>

								{/* Mobile Name Tag (Fixed) */}
								<div className='lg:hidden relative  '>
									<svg
										width='266'
										height='46'
										viewBox='0 0 266 46'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M248.088 1.22967C267.733 5.54183 257.811 8.94964 264.578 13.8094C269.571 26.5844 258.298 28.3904 248.325 37.5044C234.848 49.82 63.0256 44.4674 63.0256 44.4674L45.3821 44.5826C45.3821 44.5826 32.1652 45.4487 23.4637 44.5826C14.7621 43.7166 1.19415 37.0884 0.185389 30.4201C-1.64349 18.3307 10.6597 11.3286 11.2678 9.52133C12.6049 5.54743 15.3733 -3.60335 44.7261 1.51945C74.079 6.64226 228.443 -3.08249 248.088 1.22967Z'
											fill='#F0DD2B'
										/>
									</svg>

									{/* Text Overlay for Mobile */}
									<div className='absolute pt-[5px] inset-0 h-fit  left-[34px] flex items-center  z-10  '>
										<NameBlock
											name={el.name}
											title={el.title}
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* --- Pagination Bullets --- */}
			<div className='flex space-x-3 mt-6 pb-6'>
				{DATA.map((_, index) => (
					<div
						key={index}
						onClick={() => scrollToItem(index)}
						className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
							activeIndex === index
								? 'bg-[#004aad] scale-110'
								: 'border-[3px] lg:border-[2px] border-[#004aad] bg-transparent hover:bg-[#004aad]/20'
						}`}
						aria-label={`Go to slide ${index + 1}`}></div>
				))}
			</div>
		</div>
	);
}

export default ScrollX;
