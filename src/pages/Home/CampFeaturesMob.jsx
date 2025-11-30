import {
	BlobOneMb,
	BlobTwoMb,
	BlobThreeMb,
	BlobFiveMb,
	BlobFourMb,
	BlobSixMb,
	BlobSevenMb,
	BlobEightMb,
	BlobNineMb,
	BlobTenMb,
} from './Blobs';
import B1 from './Assets/B1.svg';
import B2 from './Assets/B2.svg';
import B3 from './Assets/B3.svg';
import B4 from './Assets/B4.svg';
import B5 from './Assets/B5.svg';
import B6 from './Assets/B6.svg';
import B7 from './Assets/B7.svg';
import B8 from './Assets/B8.svg';
import B9 from './Assets/B9.svg';
import B10 from './Assets/B10.svg';
export default function CampFeaturesMob() {
	const features = [
		{
			img: B1,
			blob: BlobOneMb,
			title1: 'Low Tech',
			title2: 'High Activity!',
			text: 'At Kiddos Camp, technology takes a backseat. Campers get hands dirty, create, make friends, and focus on the exciting activities they want to try!',

			pos: '-right-[80px] top-[80.21px]',
		},
		{
			img: B2,
			blob: BlobTwoMb,
			title1: 'Highly Trained',
			title2: '& Loyal Staff',
			text: 'Our energetic counselors are CPR/First Aid certified and love working with kids. Many return each summer, ensuring a familiar and caring environment.',
			pos: '-right-[50px] top-[80.21px]',
		},
		{
			img: B3,
			blob: BlobThreeMb,
			title1: 'A Focus',
			title2: 'on Safety',
			text: 'We prioritize safety with a 1:15 camper ratio, CPR-certified staff, first aid kits, and emergency plans. Our goal: send your kid home dirty and healthy!',
			pos: '-right-[50px] top-[80.21px]',
		},
		{
			img: B4,
			blob: BlobFourMb,
			title1: 'Character',
			title2: '& Confidence Building',
			text: 'Kiddos Camps focus on growth through teamwork and kindness. Whether building a bridge in architecture or inviting a new friend to dance, we nurture skills.',
			pos: '-right-[60px] top-[120.21px]',
		},
		{
			img: B5,
			blob: BlobFiveMb,
			title1: 'Serious Fun!',
			title2: '(Seriously!)',
			text: 'From epic water slide Fridays to creative pep rallies and hilarious games, Kiddos offers endless smiles and excitement, ensuring campers come home happily exhausted!',
			pos: '-right-[10px] top-[120.21px]',
		},
		{
			img: B6,
			blob: BlobSixMb,
			title1: 'Campers',
			title2: 'Choice',
			text: 'Kids thrive when they choose activities! Art lovers can dive in, sports fans can play, and science enthusiasts can experiment—all while trying new things!',
			pos: '-right-[10px] top-[80.21px]',
		},
		{
			img: B10,
			blob: BlobTenMb,
			title1: 'Quests',
			title2: 'for Big Kiddos',
			text: 'Rising 5th and 6th graders embark on Quests—exciting projects like Street Art, Cooking, Sculpting, and Parkour—giving them an opportunity to challenge themselves daily!',
			pos: '-right-[10px] top-[60.21px]',
		},
		{
			img: B7,
			blob: BlobSevenMb,
			title1: 'Non-Stop',
			title2: 'Variety',
			text: 'With 720+ activities planned, there’s no chance for boredom! Daily specials, camp songs, Quests, and silly games keep things fresh and fun all summer long.',
			pos: '-right-[40px] top-[50px]',
		},
		{
			img: B8,
			blob: BlobEightMb,
			title1: 'Community',
			title2: '+ Friendship',
			text: 'Our inclusive camp culture fosters friendships through team-building games and activities. Campers leave feeling part of the Kiddos family, embraced by kindness.',
			pos: '-right-[20px] top-[80px]',
		},
		{
			img: B9,
			blob: BlobNineMb,
			title1: 'Convenient',
			title2: 'for Parents',
			text: 'Just drop off your child with sunscreen, a filled water bottle, and a lunchbox. We handle the fun and mess, ensuring your child comes home happily worn out! ',
			pos: '-right-[70px] top-[80px]',
		},
	];

	return (
		<section className='space-y-[70px]'>
			<div className='flex max-w-[325px] mx-auto w-full flex-col justify-center  '>
				{/* Left column */}
				<div className='flex flex-col  items-center flex-1 space-y-16'>
					{features.map((f, i) => (
						<article
							key={i}
							className='relative text-center flex flex-col items-center  w-full'>
							{/* image with blob bg */}
							<div className='mb-4 relative'>
								<div className={`absolute ${f?.pos} -z-10 opacity-80`}>
									{f.blob}
								</div>
								<img
									src={f.img}
									alt=''
									draggable={false}
								/>
							</div>

							{/* titles */}
							<div className='text-center'>
								<span className='block text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
									{f.title1}
								</span>
								<span className="block text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
									{f.title2}
								</span>
							</div>

							{/* description */}
							<p className="mt-2 text-[#004AAD] text-[15px] leading-[25px] font-medium font-['Montserrat'] text-center">
								{f.text}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
