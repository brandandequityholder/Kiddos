import { Link } from "react-router-dom/dist";
function Announcement() {
    return (
			<div className='fixed z-[90] top-0 w-full h-[78px] overflow-hidden flex justify-center items-center bg-[#F8EA2B]'>
				<div className='flex w-full justify-center space-x-[5px] lg:space-x-[10px] items-center'>
					<p className="text-right  MadeGentle justify-start text-blue-800 text-[10px] lg:text-lg font-normal font-['MADE_Gentle'] leading-[50.33px] tracking-wide">
						CAMP STARTS JUNE 8, 2026
					</p>
					<Link>
						<p className="text-right underline  MadeGentle justify-start text-blue-800 text-[10px] lg:text-lg  font-normal font-['MADE_Gentle'] leading-[50.33px] tracking-wide">
							CLICK HERE TO ENROLL NOW
						</p>
					</Link>
				</div>
			</div>
		);
}

export default Announcement;