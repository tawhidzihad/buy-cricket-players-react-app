import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersPromise, setCoins, coins }) => {
	const playersData = use(playersPromise);

	const [selectType, setSelectType] = useState("available");
	const [selectedPlayers, setSelectedPlayers] = useState([]);

	return (
		<div className="container mx-auto space-y-10 mt-10">
			<div className="flex flex-col gap-5 md:flex-row justify-between items-center">
				{selectType === "available" ? (
					<h1 className="text-3xl text-black font-bold">
						Available Players
					</h1>
				) : (
					<h1 className="text-3xl text-black font-bold">
						Selected Players ({selectedPlayers.length}/
						{playersData.length})
					</h1>
				)}
				<div>
					<button
						onClick={() => setSelectType("available")}
						className={`${selectType === "available" ? "text-black btn bg-[#E7FE29] rounded-2xl rounded-r-none" : "btn rounded-2xl rounded-r-none text-taupe-500"}`}
					>
						Available
					</button>
					<button
						onClick={() => setSelectType("selected")}
						className={`${selectType === "selected" ? "text-black btn bg-[#E7FE29] rounded-2xl rounded-l-none" : "btn rounded-2xl rounded-l-none text-taupe-500"}`}
					>
						Selected ({selectedPlayers.length})
					</button>
				</div>
			</div>

			{selectType === "available" ? (
				<AvailablePlayers
					playersData={playersData}
					setCoins={setCoins}
					coins={coins}
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				></AvailablePlayers>
			) : (
				<SelectedPlayers
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
					setCoins={setCoins}
					coins={coins}
					setSelectType={setSelectType}
				></SelectedPlayers>
			)}
		</div>
	);
};

export default Players;
