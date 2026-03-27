import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/HomePage/Navbar/Navbar";
import Players from "./components/HomePage/Players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
	const res = await fetch("/data.json");
	return res.json();
};

function App() {
	const playersPromise = fetchPlayers();
	const [coins, setCoins] = useState(5000);

	return (
		<div className="px-2 md:px-0">
			<Navbar coins={coins}></Navbar>
			<Suspense
				fallback={
					<div className="flex justify-center items-center min-h-screen">
						<span className="loading loading-dots loading-xl"></span>
					</div>
				}
			>
				<Players
					playersPromise={playersPromise}
					setCoins={setCoins}
					coins={coins}
				></Players>
			</Suspense>

			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
