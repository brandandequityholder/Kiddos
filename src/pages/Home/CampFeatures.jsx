import {
	BlobOne,
	BlobEight,
	BlobFive,
	BlobFour,
	BlobNine,
	BlobSeven,
	BlobSix,
	BlobThree,
	BlobTwo,
	BlobTen,
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
export default function CampFeatures() {
	return (
		<section className=' w-full space-y-[70px]'>
			<div className='w-full  space-x-[86px]  flex justify-center '>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className=' mb-4'>
						{/* SVG blob background */}
						<div className={`absolute top-[90px]  right-0   -z-10 opacity-80`}>
							{BlobOne}
						</div>
						<img
							src={B1}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Low Tech
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							High Activity!
						</span>
					</div>

					<p className="max-w-[252px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						At Kiddos Camp, technology takes a backseat. Campers get hands
						dirty, create, make friends, and focus on the exciting activities
						they want to try!
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className=' mb-4'>
						{/* SVG blob background */}
						<div
							className={`absolute top-[90px]  right-[20px]   -z-10 opacity-80`}>
							{BlobTwo}
						</div>
						<img
							src={B2}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Highly Trained
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							& Loyal Staff
						</span>
					</div>

					<p className="max-w-[217.081px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Our energetic counselors are CPR/First Aid certified and love
						working with kids. Many return each summer, ensuring a familiar and
						caring environment.
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className=' mb-4'>
						{/* SVG blob background */}
						<div className={`absolute bottom-10  right-0   -z-10 opacity-80`}>
							{BlobThree}
						</div>
						<img
							src={B3}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							A Focus
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							on Safety
						</span>
					</div>

					<p className="max-w-[217.081px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						We prioritize safety with a 1:15 camper ratio, CPR-certified staff,
						first aid kits, and emergency plans. Our goal: send your kid home
						dirty and healthy!
					</p>
				</div>
			</div>
			<div className='w-full space-x-[55px]   flex justify-center '>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='  h-[121.942px]  '>
						{/* SVG blob background */}
						<div className={`absolute bottom-10  right-0   -z-10 opacity-80`}>
							{BlobFour}
						</div>
						<img
							src={B4}
							alt=''
						/>
					</div>
					<div className='w-[270.42px]    text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Character
						</span>{' '}
						<br />
						<span class="text-[#004aad] w-full text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							& Confidence Building:
						</span>
					</div>

					<p className="max-w-[216.37px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Kiddos Camps focus on growth through teamwork and kindness. Whether
						building a bridge in architecture or inviting a new friend to dance,
						we nurture skills.
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='  h-[121.942px]  '>
						{/* SVG blob background */}
						<div
							className={`absolute top-[110px]  right-[30px]   -z-10 opacity-80`}>
							{BlobFive}
						</div>
						<img
							src={B5}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Serious Fun!
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							(Seriously!)
						</span>
					</div>

					<p className="max-w-[216.37px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						From epic water slide Fridays to creative pep rallies and hilarious
						games, Kiddos offers endless smiles and excitement, ensuring campers
						come home happily exhausted!
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='  h-[121.942px]  '>
						{/* SVG blob background */}
						<div className={`absolute top-[110px]  right-0   -z-10 opacity-80`}>
							{BlobSix}
						</div>
						<img
							src={B6}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Campers
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							Choice
						</span>
					</div>

					<p className="max-w-[216.37px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Kids thrive when they choose activities! Art lovers can dive in,
						sports fans can play, and science enthusiasts can experiment—all
						while trying new things!
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='  h-[121.942px]  '>
						{/* SVG blob background */}
						<div className={`absolute top-[110px]  right-0   -z-10 opacity-80`}>
							{BlobTen}
						</div>
						<img
							src={B10}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Quests
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							for Big Kiddos
						</span>
					</div>

					<p className="max-w-[216.37px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Rising 5th and 6th graders embark on Quests—exciting projects like
						Street Art, Cooking, Sculpting, and Parkour—giving them an
						opportunity to challenge themselves daily!
					</p>
				</div>
			</div>
			<div className='w-full  space-x-[86px]  flex justify-center '>
				<div className='relative  space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='h-[145.93px] mb-4'>
						{/* SVG blob background */}
						<div
							className={`absolute top-[50px]  right-[10px]  -z-10 opacity-80`}>
							{BlobSeven}
						</div>
						<img
							src={B7}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Non-Stop
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							Variety
						</span>
					</div>

					<p className="max-w-[231px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						With 720+ activities planned, there’s no chance for boredom! Daily
						specials, camp songs, Quests, and silly games keep things fresh and
						fun all summer long.{' '}
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='h-[145.93px] mb-4'>
						{/* SVG blob background */}
						<div className={`absolute top-14  right-[10px]   -z-10 opacity-80`}>
							{BlobTwo}
						</div>
						<img
							src={B8}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Community
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							+ Friendship
						</span>
					</div>

					<p className="max-w-[237px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Our inclusive camp culture fosters friendships through team-building
						games and activities. Campers leave feeling part of the Kiddos
						family, embraced by kindness.
					</p>
				</div>
				<div className='relative space-y-[13px] text-center h-fit flex flex-col items-center'>
					<div className='h-[145.93px] mb-4'>
						{/* SVG blob background */}
						<div className={`absolute top-[65px]  right-0   -z-10 opacity-80`}>
							{BlobThree}
						</div>
						<img
							src={B9}
							alt=''
						/>
					</div>
					<div className='max-w-[211.42px]  text-center justify-center'>
						<span class='text-[#75CB31] text-[26.49px] font-normal MadeGentle leading-8'>
							Convenient
						</span>{' '}
						<br />
						<span class="text-[#004aad] text-[26.49px] font-normal font-['League_Spartan'] leading-8">
							for Parents
						</span>
					</div>

					<p className="max-w-[216.37px] text-[#004AAD] min-h-[48.08px] text-center justify-start  text-[15px] font-medium font-['Montserrat'] leading-[25px]">
						Just drop off your child with sunscreen, a filled water bottle, and
						a lunchbox. We handle the fun and mess, ensuring your child comes
						home happily worn out!
					</p>
				</div>
			</div>
		</section>
	);
}
