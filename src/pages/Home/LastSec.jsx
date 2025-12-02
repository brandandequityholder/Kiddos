import { Link } from 'react-router-dom';
function LastSec() {
	return (
		<section className='bg-[#fdf9ef] pt-[30px] lg:pt-0 pb-[120px] lg:pb-[260px] min-h-[591px]  w-full overflow-hidden relative  h-fit lg:min-h-[500px]'>
			<div className='max-w-[1277.294px] space-y-[100px]  mx-auto flex flex-col justify-center items-center  w-full'>
				<div className='space-y-[40px]'>
					<div className='max-w-[1033.51px] h-fit relative   lg:min-h-[192.91px] text-center justify-center'>
						<p class="text-[#004aad] leading-[100%] text-[27.313px] lg:text-[64.97px] font-normal font-['League_Spartan'] uppercase">
							THE BEST <br />
							DAY CAMP EXPERIENCE <br />
							FOR YOUR KIDDO IS JUST
							<br />
							<span class="text-[#004aad]  h-fit text-[27.313px] lg:text-[64.97px] font-bold font-['League_Spartan'] uppercase">
								{' '}
								ONE CLICK AWAY
							</span>
						</p>
					</div>
					<p className="max-w-[327px] lg:max-w-[965px] min-h-[64.97px] text-center justify-start text-[#004aad] text-[17px] lg:text-[20px] font-medium font-['Montserrat'] leading-[24.451px] lg:leading-[33.08px]">
						Summers are all about magic and at Kiddos, we create it every day!
						Join us for an unforgettable summer filled with exciting new
						experiences (or diving into your favorite ones), belting out camp
						songs on the ride home (and keeping them on repeat all year long),
						making new friendships (or strengthening the ones you bring along),
						and gaining confidence while discovering a special place to call
						home each summer! See you soon!
					</p>
				</div>
				<Link
					target='_blank'
					rel='noopener noreferrer'
					to='https://kiddosatlanta.reg.eleyo.com/child-care/1/kiddos-summer'
					className='w-[189.598px] lg:w-[261.29px] flex justify-center items-center text-[#fff] text-[14.149px] lg:text-xl font-[600] font-["Montserrat"] leading-[69.29px] tracking-[3.90px] h-[43.688px] lg:h-[60.207px] bg-[#004AAD] rounded-[4.36px] lg:rounded-[6px]'>
					ENROLL NOW{' '}
				</Link>
			</div>
		</section>
	);
}

export default LastSec;
