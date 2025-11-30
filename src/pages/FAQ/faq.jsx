import firstCurve from './firstCurve.svg';
import { useState } from 'react';
import secCurve from './secCurve.svg';
import lastCurve from './LastCurve.svg';
import { Link } from 'react-router-dom';
import AnythingElse from '../../components/AnythingElse';
function FAQ() {
	const faqs = [
		{
			qst: <>Q: What ages does Kiddos Day Camp serve?</>,
			ans: (
				<>
					Kiddos Day Camp is for rising Kindergarten through 6th grade. This
					summer we do not offer programs for rising 7th grade or older.
				</>
			),
		},
		{
			qst: <>Q: What are the camp hours?</>,
			ans: (
				<>
					Camp is open Monday–Friday from 7:45-6pm. The Camp Day is from 9:00 AM
					to 2:30 PM. Early drop-off begins at 7:45 AM (free), and After Camp
					care is available until 6:00 PM ($50/week or $15/week if enrolled for
					4+ weeks).
				</>
			),
		},
		{
			qst: <>Q: Where is the camp located? Do you travel for activities?</>,
			ans: (
				<>
					Camp is held at Atlanta Classical Academy in Buckhead for 2026. All
					activities take place onsite.
				</>
			),
		},
		{
			qst: (
				<>
					Q: What types of activities will my child do if they are in rising
					K-4th?
				</>
			),
			ans: (
				<>
					Campers have 6 activity periods where they choose from things such as:
					sports, cooking, Science, performing and visual arts, Wood Working,
					Nature, Movement, and more. Everyday we offer “Backyard water play”
					with sprinklers, wading pools, squirt toys and more. Fridays we bring
					in a Big water slides and have our Pep rally. In Aftercamp we have
					clubs (like beyblade, doll house, arts etc) and more free choice play
					.
				</>
			),
		},
		{
			qst: (
				<>
					Q: What types of activities will my child do if they are in rising 5th
					-6th?
				</>
			),
			ans: (
				<>
					Our Older Campers get to select a Quest! Quest is a long term project
					or skill that campers pick when they register: such as Parkour, Tshirt
					Printing, Street Art, Sculpture Cooking etc. 3 Periods will be spent
					doing Quests while the other three will be spent choking from other
					activities with all grades. (sports, cooking, Science, performing and
					visual arts, Wood Working, Nature, Movement, and more. Everyday we
					offer “Backyard water play” with sprinklers, wading pools, squirt toys
					and more. Fridays we bring in a Big water slides and have our Pep
					rally
				</>
			),
		},
		{
			qst: <>Q: Are campers grouped by age or grade?</>,
			ans: (
				<>
					We are choice based so this means campers choose by activity. We do
					not group campers by age or grade except during sports (we have an
					older and younger sport). And Quests (only open to Rising 5th & 6th
					graders).
				</>
			),
		},
		{
			qst: <>Q: What is the staff-to-camper ratio? Who are the counselors?</>,
			ans: (
				<>
					We maintain a 1:15 ratio or better. Counselors are trained,
					background-checked, and passionate about working with kids.
				</>
			),
		},
		{
			qst: <>Q: How do you handle safety and emergencies?</>,
			ans: (
				<>
					We follow strict safety protocols. 100% of Leadership and counselor
					are CPR/first aid certified. Allergy plans, heat safety, secure entry,
					drills, and regular headcounts are in place. We communicate with
					families as needed.
				</>
			),
		},
		{
			qst: <>Q: What is your discipline policy?</>,
			ans: (
				<>
					We use positive, age-appropriate redirection., We find that due to
					campers choosing a new activity they want to do every 30-60 minutes
					that behavior just requires our Counselors redirect and coach. Serious
					issues are addressed calmly with safety in mind and involve parents
					when needed.
				</>
			),
		},
		{
			qst: <>Q: What is your refund/cancellation policy?</>,
			ans: (
				<>
					A $75/week per child deposit is non-refundable. If you cancel by May
					22, 2026 via email to info@kiddosatlanta.com, you won’t be charged the
					balance. Late cancellations or no-shows require full payment.
					Emergencies? Talk to us.
				</>
			),
		},
		{
			qst: <>Q: Do you offer any discounts or financial aid?</>,
			ans: (
				<>
					Yes! We offer sibling discounts, aftercare savings for multi-week
					registration, limited scholarships, and occasional fun early bird
					perks. <Link to={'/contact'}>Contact us</Link> for details or
					availability.
				</>
			),
		},
		{
			qst: <>Q: What should campers wear or bring?</>,
			ans: (
				<>
					Wear comfy play clothes and closed-toe shoes. Pack a lunch, water
					bottle, change of clothes, towel and sunscreen. Label everything with
					your child’s name. We ask that sunscreen be applied and breakfast fed
					prior to camp. On Wednesdays we wear our Kiddos Shirts!
				</>
			),
		},
		{
			qst: <>Q: How do you support campers with special needs?</>,
			ans: (
				<>
					We aim to be inclusive and encourage early conversations. We support
					many children with learning or behavioral differences. For one-on-one
					needs, a family-provided aide may be required.
				</>
			),
		},
		{
			qst: <>Q: Can parents visit or observe camp?</>,
			ans: (
				<>
					Yes. We invite families to Friday pep rally to get a taste of what we
					have been up to at camp! Parents may stop by anytime to see the camp
					after checking in with the Director.
				</>
			),
		},
		{
			qst: <>Q: I have more questions. How do I contact you?</>,
			ans: (
				<>
					Email us at info@kiddosatlanta.com or give us a call at 404.955.3184.
					We’re here to help!
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
				<div className='max-w-[1243.406px]   w-full relative lg:px-0 px-[66px] pb-[50px] pt-[60px]  lg:pt-[120px] lg:pl-[73px] mx-auto'>
					<div className='space-y-[40px]'>
						<p className="max-w-[1019px] justify-center text-white text-[50px]  lg:text-[75px] font-bold font-['League_Spartan'] leading-[44.5px] lg:leading-[67px]">
							Frequently Asked Questions...
						</p>
						<p className="max-w-[958px] justify-start text-white text-[15px] lg:text-[25px] font-medium font-['Montserrat'] leading-[22.135px] lg:leading-[41px]">
							Kiddos takes the guesswork out of summer.{' '}
							<br className='lg:block hidden' />
							From what to pack to who’s watching your camper, we’ve got you
							covered with answers that are clear, caring, and full of peace of
							mind. It’s the same thoughtful touch we bring to every camp day.
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
			<section className='w-full relative bg-[#F8FBFF] pb-[80px] lg:pb-[167px]  pt-[40px] lg:pt-[80px]'>
				<div className='max-w-[1229.41px]  space-y-[71px] w-full mx-auto px-[40px] lg:px-[100px]'>
					<div className='space-y-[30px] lg:space-y-[40px] w-full mb-[26px]  border-[#004AAD]  pb-[30px] lg:pb-[66px] border-b border-[#004AAD]'></div>
				</div>
				<div className='max-w-[1229.41px]  space-y-[71px] w-full mx-auto px-[40px] lg:px-[100px]'>
					{faqs.map((el, i) => (
						<div
							key={i}
							className='space-y-[30px] lg:space-y-[40px]  pb-[30px] lg:pb-[66px] border-b border-[#004AAD]'>
							<button
								onClick={() => toggleFAQ(i)}
								className='flex space-x-[40px] lg:space-x-[100px] w-full text-left focus:outline-none'>
								<p className="justify-center text-[#004aad] text-[20px] lg:text-[40px] font-bold font-['Montserrat'] leading-[27px] lg:leading-[67px]">
									{el.qst}
								</p>
								<div
									className={`w-[29px] lg:block hidden h-[25px] mt-[15px] transform transition-transform duration-300 ${
										openIndex === i ? '' : 'rotate-180'
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
										openIndex === i ? '' : 'rotate-180'
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
								<p className="max-w-[977px] w-full justify-center text-[#004aad] text-[14px]  lg:text-[38px] font-normal font-['Montserrat'] leading-[24.1px] lg:leading-[44px]">
									{el.ans}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<AnythingElse></AnythingElse>
		</div>
	);
}

export default FAQ;
