import { useEffect, useState } from "react";
// import { getStoredItems, removeFromLocal } from "../../utilities/local-storage";
import { useLoaderData } from "react-router-dom";
import FavoriteEstate from "../../components/FavoriteEstate/FavoriteEstate";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../store/features/favoritesSlice";

const Favorites = () => {
	const [favEstates, setFavEstates] = useState([]);
	const estates = useLoaderData();
	const [estateLoading, setEstateLoading] = useState(true);

	const localEstates = useSelector((state) => state.favorites.favorites); // Accessing Redux state

    const dispatch = useDispatch();

	useEffect(() => {
		setEstateLoading(true);
		// const localEstates = getStoredItems('estates');
		let filteredEstates = [];
		for (const id of localEstates) {
			const filteredEstate = estates.find((estate) => estate.id === id);
			filteredEstates.push(filteredEstate);
		}
		setFavEstates(filteredEstates);
		setEstateLoading(false);
	}, [estates, localEstates]);

	// const handleDelete = (id, key) => {
	// 	setEstateLoading(true);
	// 	removeFromLocal(id, key);
	// 	const newLocalEstates = getStoredItems(key);
	// 	let remainingEstates = [];
	// 	for (const id of newLocalEstates) {
	// 		const remainingEstate = estates.find((estate) => estate.id === id);
	// 		remainingEstates.push(remainingEstate);
	// 	}
	// 	setFavEstates(remainingEstates);
	// 	setEstateLoading(false);
	// };

	const handleDelete = (estateId) => {
		dispatch(removeFavorite(estateId)); // Redux action
	};

	if (estateLoading) {
		return (
			<div className="flex items-center justify-center space-x-2">
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-red-600"></div>
				<div className="w-5 h-5 rounded-full animate-pulse dark:bg-red-600"></div>
				<div className="w-6 h-6 rounded-full animate-pulse dark:bg-red-600"></div>
			</div>
		);
	}

	return (
		<section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
			<h4
				data-aos="fade-top"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1000"
				className="text-center text-xl md:text-3xl font-bold"
			>
				Favorite Estates : {favEstates.length}
			</h4>
			<hr className="my-8 border-dotted border-t-2 border-teal-900" />
			{favEstates.length < 1 && (
				<div
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="1000"
					data-aos-delay="500"
					className="h-[67vh] flex items-center justify-center"
				>
					<h4 className="border shadow-lg shadow-red-800 border-red-600 p-6 text-lg md:text-3xl font-bold text-red-600 bg-red-100">
						You Have No Favorite Estates!{" "}
					</h4>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{favEstates?.map((estate) => (
					<FavoriteEstate
						key={estate.id}
						estate={estate}
						handleDelete={handleDelete}
						estateLoading={estateLoading}
					></FavoriteEstate>
				))}
			</div>
		</section>
	);
};

export default Favorites;
