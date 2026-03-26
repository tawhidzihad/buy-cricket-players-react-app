import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
	return (
		<div className="flex items-center justify-between gap5 p-3 border border-gray-200 rounded-xl ">
			<div className="flex gap-5">
				<img
					className="rounded-md"
					width={70}
					src={player.playerImage}
					alt={`${player.playerName} Picture`}
				/>
				<div>
					<h2 className="text-2xl font-bold capitalize">
						{player.playerName}
					</h2>
					<p className="capitalize">{player.playertype}</p>
				</div>
			</div>
			<div>
				<button
					className="btn text-red-500"
					onClick={() => handleDeleteSelectedPlayer(player)}
				>
					<MdDelete></MdDelete>
				</button>
			</div>
		</div>
	);
};

export default SelectedCard;
