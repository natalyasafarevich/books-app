import Categories from "../../categories/Categories";
import { Preview } from "../../preview/Preview";
import Books from "../../books/Books";
import Genres from "../../genres/Genres";

export default function Main() {
	return (
		<>
		
			<Preview />
			{/* <Categories /> */}
			<Books />
			<Genres/>
		</>
	);
}
