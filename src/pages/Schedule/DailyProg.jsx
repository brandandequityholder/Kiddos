import { useRef, useEffect } from 'react';
import lineClock from '../Schedule/Assets/lineClock.svg';
import clockImg from './Assets/clock.png';
import lastCurve from './Assets/LastCurve.svg';
import fifthCurve from './Assets/fifthCurve.svg';
import clockVid from './Assets/1110.mp4';
import lineClockMob from './Assets/lineClockMob.svg';
function DailyProg() {
	const prog = [
		{
			time: '7:45am - 9:00am',
			title: 'Before Camp:',
			text: (
				<>
					Campers arrive in the carpool or drop-off line by 9:00 AM (earlier if
					in Before Camp). They’re greeted by high-energy counselors ready to
					start the fun. We kick off with some free play on the playground or
					gym to warm up those muscles.
				</>
			),
		},
		{
			time: '9:00am',
			title: 'Morning Pep Start:',
			text: (
				<>
					Campers gather at the chart to kick off the morning! We go over the
					day, talk about making friends and trying new things and belt out some
					of our favorite camp songs
				</>
			),
		},
		{
			time: '9:15am - 10:15am',
			title: 'Specials Hour:',
			text: (
				<>
					Each Monday, campers select a Special for the week – a cool project or
					skill they’ll work on a bit each morning, Monday through Thursday- On
					Friday we show off our Specials at Pep Rally! Specials could be
					anything from Line Dancing Architecture, or Lacrosse to Clay
					Sculptures, yoga and Basketball. Our 5th & 6th graders work on their
					QUEST during this period.
				</>
			),
		},
		{
			time: '10:15am - 2:30pm',
			title: 'Activity Periods',
			text: (
				<>
					After Specials, the core of our day is a series of five activity
					periods (about 40 minutes each) extending into the early afternoon.
					Before each period, all campers come together and our staff announce
					the six exciting activity choices available for that period. Campers
					then get to choose which activity they want to do. We might offer:
					Sports (like soccer, gaga ball, or relay races), Creative Arts
					(painting, tie-dye, jewelry making), Performing Arts (theater games,
					dance), STEM(science experiments, LEGO challenges), Outdoor Adventure
					(nature walks, scavenger hunts, water play), and Miscellaneous Fun
					(board games, storytelling, etc.). With five periods a day, campers
					rotate through a huge variety of activities – and they have the
					freedom to follow their interests. No two days are the same!
				</>
			),
		},
		{
			time: '11:45am to 12:45pm',
			title: 'Lunch & Hydration',
			text: (
				<>
					Midday we take a break for lunch around 11:45 AM. Campers bring their
					own peanut-free lunch from home, and we all picnic together (lemonade
					and water provided). Counselors sit with the kids to keep the
					friendly, inclusive vibe going. We make sure everyone stays hydrated –
					water bottles and shade breaks are a must in the Atlanta summer heat.
				</>
			),
		},
		{
			time: '12:15pm',
			title: '“Backyard” Water Play!',
			text: (
				<>
					Camper bathing suits are a daily must! They can dive into
					backyard-style water fun—think wading pools, slip ‘n slides, squirt
					toys, and games that splash up buckets of laughter. Or they can chill
					with some dry free play. It’s all about having a blast!
				</>
			),
		},
		{
			time: '2:30pm to 6:00pm',
			title: 'After Camp',
			text: (
				<>
					While carpool wraps up at 2:30 PM, the fun doesn’t stop! After Camp is
					a relaxed extension with snacks and free play, allowing campers to
					choose between keeping the energy high or unwinding with cool
					activities. Afternoon clubs like Pokemon, Shrinky Dinks, and
					all-you-can-sport keep everyone engaged—often indoors to beat the
					heat!
				</>
			),
		},
		{
			time: 'Fridays Only',
			title: 'Fun Fridays',
			text: (
				<>
					Each Friday afternoon, we amp up the excitement with special all-camp
					events. One of our staples is the giant water slide – an 18-foot
					inflatable water slide that turns our field into a mini water park! We
					also host a Friday Pep Rally, where campers from each Special or QUEST
					get to show off what they’ve done (sing a song, display art, perform a
					skit, etc.). It’s a confidence booster and a celebration of everyone’s
					achievements. Parents are invited to attend the Friday showcase/pickup
					to cheer on the campers. Needless to say, Fridays are a blast and
					often end with campers (and counselors) not wanting to leave!
				</>
			),
		},
	];

	// REFS
	const clockRef = useRef(null);
	const progRefs = useRef([]);
	const containerRef = useRef(null);

	const addToRefs = (el) => {
		if (el && !progRefs.current.includes(el)) {
			progRefs.current.push(el);
		}
	};

	useEffect(() => {
		const clock = clockRef.current;
		const container = containerRef.current;
		if (!clock || !container) return;

		let containerTop = 0;
		let containerHeight = 0;
		let maxMove = 0;

		// Calculate layout
		const recalc = () => {
			const rect = container.getBoundingClientRect();
			containerTop = rect.top + window.scrollY;
			containerHeight = container.offsetHeight;
			maxMove = containerHeight - clock.offsetHeight;
		};

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const scroll = scrollY - containerTop;
			const scrollFraction = Math.min(Math.max(scroll / containerHeight, 0), 1);

			// Move + rotate clock
			clock.style.position = 'absolute';
			clock.style.top = `${scrollFraction * maxMove}px`;
			clock.style.transform = `rotate(${scrollFraction * 360}deg)`;

			// -------------- SINGLE ITEM HIGHLIGHT FIX --------------
			const screenCenter = window.innerHeight / 2;

			// Build array of distances
			const distances = progRefs.current.map((item) => {
				const rect = item.getBoundingClientRect();
				const itemCenter = rect.top + rect.height / 2;
				const distance = Math.abs(itemCenter - screenCenter);
				return { item, distance };
			});

			// Sort: closest first
			distances.sort((a, b) => a.distance - b.distance);

			// Pick ONLY the closest
			const closestItem = distances[0]?.item;

			// Apply classes
			progRefs.current.forEach((item) => {
				if (item === closestItem) {
					item.classList.add('daily-item-active');
				} else {
					item.classList.remove('daily-item-active');
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', recalc);

		recalc();
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', recalc);
		};
	}, []);

	return (
		<section
			className=' relative bg-[#F8FBFF] z-0 -mt-[80px] overflow-hidden w-full'
			ref={containerRef}>
			<div className='lg:max-w-[1243.406px]  py-[150px] flex lg:pl-[132px] ml-[30px] lg:space-x-[50px] w-full lg:pt-[120px] mx-auto relative'>
				<div className='flex lg:space-x-[120px] '>
					<p className='rotate-0 lg:block hidden [writing-mode:vertical-lr] MadeGentle text-[71px] leading-[75px] font-extrabold'>
						<span className='text-[#004AAD]'>AT KIDDOS CAMP</span> <br />
						<span className='text-[#75CB31]'>A DAY IN THE LIFE</span>
					</p>

					<div className='relative z-20  w-[80px] lg:w-[142px]'>
						<div className='absolute z-10 -left-[60px] w-[142px] h-[142px]'>
							<div
								ref={clockRef}
								className='w-[110px] h-[110px] lg:w-[142px] lg:h-[142px] bg-white overflow-hidden rounded-full '>
								<video
									src={clockVid}
									autoPlay
									muted
									loop
									className='object-cover absolute -top-[0.7px] left-0  object-center w-[102%] h-[102%]'
									playsInline></video>
							</div>
						</div>
						<div className='relative -mt-[120px]  h-full '>
							<img
								src={lineClock}
								alt=''
								className='absolute lg:block hidden top-0 left-0'
							/>
							<img
								src={lineClockMob}
								alt=''
								className=' lg:hidden  top-0 left-0'
							/>
						</div>
					</div>
				</div>

				<div className='space-y-[40px]  lg:space-y-[50px]'>
					{prog.map((el, i) => (
						<div
							key={i}
							ref={addToRefs}
							className={` ${
								prog.length - 1 === i && 'pb-[70px] lg:pb-[150px]'
							} daily-item  `}
							style={{
								opacity: 0.2,
							}}>
							<div
								className={`   justify-center md:max-w-[400px] max-w-[286px]  lg:max-w-full text-[#64ad2a] text-[42.52px] lg:text-[61.83px] font-normal MadeGentle`}>
								{el.time}
							</div>
							<div className=' justify-center  max-w-[265px] md:max-w-[475.35px] '>
								<span className='text-[#004aad] text-[18.287px] lg:text-[26.59px] font-normal MadeGentle leading-[22.287px] lg:leading-[25.68px]'>
									{el.title}
								</span>
								<br />
								<span className="text-[#004aad] w-full text-[14px] lg:text-base font-normal font-['League_Spartan'] leading-[22.287px]  lg:leading-[25.68px]">
									{el.text}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* <img
				src={lastCurve}
				className='w-full fill-[#FFFDEF] absolute -bottom-1 z-50'></img> */}
		</section>
	);
}

export default DailyProg;
