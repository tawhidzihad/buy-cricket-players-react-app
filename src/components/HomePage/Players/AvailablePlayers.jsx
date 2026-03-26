import Card from "./Card";

const AvailablePlayers = ({ playersData, setCoins, coins, selectedPlayers, setSelectedPlayers}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{playersData.map((player, index) => (
				<Card
					key={index}
					player={player}
					setCoins={setCoins}
					coins={coins}
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				></Card>
			))}
		</div>
	);
};

export default AvailablePlayers;
