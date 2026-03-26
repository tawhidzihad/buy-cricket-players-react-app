import dollarImage from "../../../assets/dollar.png";
import logo from "../../../assets/logo.png";

const Navbar = ({ coins }) => {
	return (
		<div className="container mx-auto pt-1 pb-3">
			<div className="navbar bg-base-100 shadow-sm">
				<div className="flex-1">
					{/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
					<img src={logo} alt="" />
				</div>
				<div className="flex-none">
					<button className="flex justify-center items-center gap-2 font-bold text-xl">
						{coins} Coins
						<img src={dollarImage} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
