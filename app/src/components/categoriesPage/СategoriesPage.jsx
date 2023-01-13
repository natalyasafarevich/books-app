// import

import { useEffect, useState } from "react";
import { Categories } from "./category/Сategories";
import { getAllCategory, getCurrentCategory } from "../../api/getBooks";

let response;

export function СategoriesPage() {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function category() {
			try {
				response = await getAllCategory();
				console.log(response)
				let category = response.data.results;
				category = category.slice(0,5);
				setCategories(category);
				setIsloading(false);
			} catch (e) {
				setIsloading(false);
				setIsError(true);
			}
		}

		category();
	}, []);
	if (isLoading) {
		return <span>load</span>;
	}
	if (isError) {
		return <span>erro(</span>;
	}
	return (
		<>
			{/* {isLoading && <span>load</span>} */}
			{/* {!isLoading && */}
			{categories.map((item, index) => (
				<Categories key={index} books={item} />
			))}
		</>
	);
}
