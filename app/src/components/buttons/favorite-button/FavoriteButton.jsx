import "./FavoriteButton.scss";

export default function FavoriteButton({
	isFavorite,
	deleteFavorite,
	addFavorite,
}) {
	return (
		<>
			{(!isFavorite && (
				<button onClick={addFavorite} className="add-favotive">
					Add to favorites
				</button>
			)) || (
				<button onClick={deleteFavorite} className="add-favotive">
					remove from favorites
				</button>
			)}
		</>
	);
}
