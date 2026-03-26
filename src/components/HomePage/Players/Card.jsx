import { useState } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaFlag, FaUser } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { toast } from "react-toastify";

const Card = ({
	player,
	setCoins,
	coins,
	selectedPlayers,
	setSelectedPlayers,
}) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleChoosePlayer = () => {
		let newCoins = coins - player.price;
		if (newCoins >= 0) {
			setCoins(coins - player.price);
		} else {
			toast.warning(`Not Enough Coins To Purchase ${player.playerName}`);
			return;
		}
		toast.success(`${player.playerName} Purchase Complete`);
		setIsSelected(true);
		setSelectedPlayers([...selectedPlayers, player]);
	};

	return (
		<div className="card bg-base-100 shadow-sm">
			<figure>
				<img src={player.playerImage} className="rounded-2xl" />
			</figure>
			<div className="card-body space-y-2">
				<h2 className="card-title">
					<FaUser></FaUser> {player.playerName}
				</h2>
				<div className="flex justify-between">
					<div className="flex gap-2 items-center">
						<FaFlag></FaFlag>
						<p>{player.playerCountry}</p>
					</div>
					<button className="badge badge-xl badge-ghost capitalize">
						{player.playertype}
					</button>
				</div>
				<div className="divider m-0"></div>

				<h2 className="font-bold">Rating: ({player.rating})</h2>

				<div className="flex justify-between items-center font-bold capitalize">
					<div>
						<p className="flex items-center gap-2">
							<GiCricketBat></GiCricketBat>
							{player.battingStyle}
						</p>
					</div>
					<div>
						<p className="text-right flex items-center gap-2">
							<BiSolidCricketBall></BiSolidCricketBall>
							{player.bowlingStyle}
						</p>
					</div>
				</div>

				<div className="card-actions justify-between items-center">
					<p className="font-semibold">Price: ${player.price}</p>
					<button
						// onClick={() => {
						// 	setIsSelected(true);
						// 	setCoins(5);
						// }}

						onClick={handleChoosePlayer}
						className="btn"
						// className={`${isSelected ? "btn btn-disabled" : "btn"}`}
						disabled={isSelected}
					>
						{isSelected ? "Sold Out" : "Purchase"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
