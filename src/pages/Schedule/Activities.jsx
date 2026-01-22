import { useEffect, useState } from 'react';
import first from './Assets/first.svg';
import sec from './Assets/sec.svg';
import third from './Assets/third.svg';
import fourth from './Assets/fourth.svg';
import fifth from './Assets/fifth.svg';
import six from './Assets/six.svg';
import seven from './Assets/seven.svg';
import renderPreTitle from '../../utils/renderPreTitle';

function buildRows(items) {
	const rows = [];
	let index = 0;
	const total = items.length;

	// --- First row (max 2)
	rows.push(items.slice(index, index + 2));
	index += 2;

	// --- Middle rows (max 3)
	while (total - index > 2) {
		rows.push(items.slice(index, index + 3));
		index += 3;
	}

	// --- Last row (max 2)
	if (index < total) {
		rows.push(items.slice(index, index + 2));
	}

	return rows.filter((row) => row.length);
}
const initialData = [
	{
		title: `SPORTS & <br>MORE SPORTS`,
		description:
			'From soccer to hockey—and all the epic games in between—our campers dive into action! They chase goals, score points, and build teamwork while having a total blast. Get ready to bring the heat!',
		icon: { asset: { url: fifth } },
		maxwdith: 'max-w-[344px]',
	},
	{
		title: `SCIENCE <br>& NATURE`,
		description:
			'Welcome to the wild side of creativity! Here, campers transform everyday stuff into extraordinary inventions. Think engineering meets wizardry as they explore, build, and innovate. ',
		icon: { asset: { url: first } },
	},
	{
		title: `ART <br>& CRAFTS`,
		description:
			'Unleash the inner Picasso! Our art zone is where imagination takes flight. Campers mix, paint, and sculpt their way to brilliance. Who knew self-expression could feel this awesome?',
		icon: { asset: { url: sec } },
		maxwdith: 'max-w-[291px]',
	},
	{
		title: `PERFORMING <br> ARTS`,
		description:
			'Step right up! Kids act, dance, and let their stories shine as they learn communication skills and build confidence. It’s where creativity meets showtime—no spotlight left unturned!',
		icon: { asset: { url: seven } },
		maxwdith: 'max-w-[345px]',
	},

	{
		title: `YOGA, TUMBLING <br> & CHEER`,
		description:
			'Get ready to stretch it out and flip into fun! Campers boost their strength and flexibility while mastering cheers, stunts, and even some Zen vibes. Teamwork has never felt so uplifting—literally!',
		icon: { asset: { url: fourth } },
		maxwdith: 'max-w-[360px]',
	},

	{
		title: `COOKING, WOOD WORKING <br>& GARDENING`,
		description:
			'These are some of our favs! Campers dive into the kitchen to whip up tasty creations, channel their inner craftspeople in woodworking, and cultivate their green thumbs in the garden.',
		icon: { asset: { url: six } },
		maxwdith: '0',
	},
];
function Activities({ activities }) {
	const [Acts, setActs] = useState(initialData);
	useEffect(() => {
		if (activities?.length > 0) setActs(activities);
		console.log(activities);
	}, [activities]);

	return (
		<section className='min-h-[669px] relative bg-[#0B3976] w-full pb-[156px]'>
			<div className='max-w-[1243px] lg:px-0 px-[60px] mx-auto space-y-[95px] lg:space-y-[80px]'>
				{/* === Row 1 (2 items, centered) === */}

				{buildRows(Acts).map((acts) => (
					<div className='lg:flex mx-auto   space-y-[95px] lg:space-y-0 lg:space-x-[100px] justify-center '>
						{acts.map((el, i) => (
							<Card
								key={i}
								el={el}
							/>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
function Card({ el }) {
	return (
		<div className='  space-y-[25px]   text-center  flex flex-col  items-center'>
			<div className='h-[130px]  flex items-end'>
				<img
					src={el.icon.asset.url}
					alt=''
				/>
			</div>
			<p className='text-white text-[31.5px] font-normal MadeGentle leading-[38.91px]'>
				{renderPreTitle(el.title)}
			</p>
			<p
				className={` min-h-12 ${
					el.maxwdith ? el.maxwdith : 'max-w-[291px]'
				} text-white text-sm w-full font-medium font-['Montserrat'] leading-[25px]`}>
				{el.description}
			</p>
		</div>
	);
}
export default Activities;
