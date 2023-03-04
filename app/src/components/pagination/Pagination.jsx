import { useDispatch, useSelector } from "react-redux";
import { setPaginationNumber } from "../../store/pagination/actions";

export default function Pagination() {
	const topic = useSelector((state) => state.topic);

	const items_pagination = [];

	const dispatch = useDispatch();
	for (let i = 1; i <= topic.results; i++) {
		items_pagination.push(i);
	}
	const paginationNumber = (e) => {
		dispatch(setPaginationNumber(e.target.textContent));
	};

	return (
		<div className="pagination">
			<div className="pagination__row">
				{items_pagination.map((i, index) => (
					<button key={index} onClick={paginationNumber}>{i}</button>
				))}
			</div>
		</div>
	);
}
