import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({
	selectedPlayers,
	setSelectedPlayers,
	coins,
	setCoins,
	setSelectType,
}) => {
	const handleDeleteSelectedPlayer = (player) => {
		const filterdPlayers = selectedPlayers.filter(
			(selectedPlayer) => selectedPlayer.playerName != player.playerName,
		);
		setSelectedPlayers(filterdPlayers);
		setCoins(coins + player.price);
	};

	return (
		<div className="space-y-3">
			{selectedPlayers.length === 0 ? (
				<div className="min-h-100 flex justify-center items-center flex-col gap-2">
					<h2 className="text-3xl font-bold">
						No Players Selected Yet
					</h2>
					<p>Go To Available Tab To Select Players</p>
				</div>
			) : (
				selectedPlayers.map((player, ind) => {
					return (
						<SelectedCard
							key={ind}
							player={player}
							handleDeleteSelectedPlayer={
								handleDeleteSelectedPlayer
							}
						></SelectedCard>
					);
				})
			)}

			{selectedPlayers.length > 0 && (
				<div class="inline-block p-2 border rounded-xl mt-5">
					<button onClick={()=> setSelectType('available')} class="btn btn-sm md:btn-md bg-[#E2FF4A]  hover:bg-[#d4f03d] text-black rounded-2xl">
						Add More Player
					</button>
				</div>
			)}
		</div>
	);
};

export default SelectedPlayers;
