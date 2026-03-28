import { toast } from "react-toastify";
import BannerImage from "../../../assets/banner-main.png";
import BannerShadow from "../../../assets/bg-shadow.png";

const Banner = ({ coins, setCoins }) => {
	const addCreditFunc = () => {
		const newCredit = coins + 2000;
		setCoins(newCredit);
		toast.success("Credit Claim Successful!")
	};

	return (
		<div className="container mx-auto relative">
			<img
				className="w-full bg-black rounded-3xl"
				src={BannerShadow}
				alt=""
			/>
			<div>
				<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
					<div className="flex justify-center flex-col items-center space-y-1 md:space-y-4">
						<img
							src={BannerImage}
							alt=""
							className="w-10 md:w-25"
						/>
						<h1 className="text-white  md:text-2xl md:whitespace-nowrap font-bold">
							Assemble Your Ultimate Dream 11 Cricket Team
						</h1>
						<p className="text-zinc-400 text-[10px] md:text-xl">
							Beyond Boundaries Beyond Limits
						</p>

						<div class="inline-block p-1 border border-white rounded-xl">
							<button
								onClick={addCreditFunc}
								class="btn btn-sm md:btn-md bg-linear-to-r from-[#cd71aa] via-[#f2ab80] to-[#fad064] text-black font-bold rounded-2xl"
							>
								Claim Free Credit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
