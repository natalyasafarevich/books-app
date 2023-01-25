import Categories from "../../categories/Categories";
import { Preview } from "../../preview/Preview";
import Books from "../../books/Books";

export default function Main() {
	return (
		<>
			<Preview />
			<Categories />
			<Books />
		</>
	);
}
