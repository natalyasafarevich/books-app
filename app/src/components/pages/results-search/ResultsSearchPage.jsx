import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setTopic } from "../../../store/topic/actions";
import BookCard from "../../bookCard/bookCard";
import Error from "../../error/Error";
import Load from "../../load/Load";
import "./ResultsSearchPage.scss";

export default function ResultsSearchPage() {
	const params = useParams();
	const dispatch = useDispatch();
	const results = useSelector((state) => state.topic.topic);
	useEffect(() => {
		dispatch(setTopic(params.name));
	}, []);

	return (
		<div className="results-search">
			<Load />
			<Error />

			<div className="results-search__container">
				<div className="results-search__row">
					{results.length &&
						results.map((item, i) => <BookCard book={item} key={i} />)}
				</div>
			</div>
		</div>
	);
}
