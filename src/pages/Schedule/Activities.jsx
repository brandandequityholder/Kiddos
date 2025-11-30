import {
	first,
	fourth,
	sec,
	third,
	fifth,
	six,
	seven,
} from './ActivitiesIcons';
function Activities() {
	const Acts = [
		{
			name: (
				<>
					SPORTS & <br />
					MORE SPORTS
				</>
			),
			text: 'From soccer to hockey—and all the epic games in between—our campers dive into action! They chase goals, score points, and build teamwork while having a total blast. Get ready to bring the heat!',
			icon: fifth,
			style: 'max-w-[344px]',
		},
		{
			name: (
				<>
					SCIENCE <br />& NATURE
				</>
			),
			text: 'Welcome to the wild side of creativity! Here, campers transform everyday stuff into extraordinary inventions. Think engineering meets wizardry as they explore, build, and innovate. ',
			icon: first,
		},
		{
			name: (
				<>
					ART <br />& CRAFTS
				</>
			),
			text: 'Unleash the inner Picasso! Our art zone is where imagination takes flight. Campers mix, paint, and sculpt their way to brilliance. Who knew self-expression could feel this awesome?',
			icon: sec,
			style: 'max-w-[291px]',
		},
		{
			name: (
				<>
					PERFORMING <br /> ARTS
				</>
			),
			text: 'Step right up! Kids act, dance, and let their stories shine as they learn communication skills and build confidence. It’s where creativity meets showtime—no spotlight left unturned!',
			icon: seven,
			style: 'max-w-[345px]',
		},
		// {
		// 	name: (
		// 		<>
		// 			DANCE <br />
		// 			CLASSES
		// 		</>
		// 	),
		// 	text: 'Movement meets music! Campers explore styles from hip hop to jazz, discovering rhythm, creativity, and self-expression through dance.',
		// 	icon: third,
		// },
		{
			name: (
				<>
					YOGA, TUMBLING <br /> & CHEER
				</>
			),
			text: 'Get ready to stretch it out and flip into fun! Campers boost their strength and flexibility while mastering cheers, stunts, and even some Zen vibes. Teamwork has never felt so uplifting—literally!',
			icon: fourth,
			style: 'max-w-[360px]',
		},

		{
			name: (
				<>
					COOKING, WOOD WORKING <br />& GARDENING
				</>
			),
			text: 'These are some of our favs! Campers dive into the kitchen to whip up tasty creations, channel their inner craftspeople in woodworking, and cultivate their green thumbs in the garden.',
			icon: six,
			style: 'max-w-[526px]',
		},
	];
	return (
		<section className='min-h-[669px] relative bg-[#0B3976] w-full pb-[156px]'>
			<div className='max-w-[1243px] lg:px-0 px-[60px] mx-auto space-y-[95px] lg:space-y-[80px]'>
				{/* === Row 1 (2 items, centered) === */}

				<div className='lg:flex mx-auto   space-y-[95px] lg:space-y-0 lg:space-x-[100px] justify-center '>
					{Acts.slice(0, 2).map((el, i) => (
						<Card
							key={i}
							el={el}
						/>
					))}
				</div>
				{/* === Row 2 (3 items full width) === */}
				<div className='lg:flex mx-auto w-full  space-y-[95px] lg:space-y-0 lg:space-x-[100px] justify-center '>
					{Acts.slice(2, 5).map((el, i) => (
						<Card
							key={i}
							el={el}
						/>
					))}
				</div>
				{/* === Row 3 (2 items, centered) === */}
				<div className='lg:flex mx-auto w-full   justify-center place-items-center'>
					{Acts.slice(5, 7).map((el, i) => (
						<Card
							key={i}
							el={el}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
function Card({ el }) {
	return (
		<div className='  space-y-[25px]   text-center  flex flex-col  items-center'>
			<div className='h-[130px]  flex items-end'>{el.icon}</div>
			<p className='text-white text-[31.5px] font-normal MadeGentle leading-[38.91px]'>
				{el.name}
			</p>
			<p
				className={` min-h-12 ${
					el.style ? el.style : 'max-w-[291px]'
				} text-white text-sm w-full font-medium font-['Montserrat'] leading-[25px]`}>
				{el.text}
			</p>
		</div>
	);
}
export default Activities;
