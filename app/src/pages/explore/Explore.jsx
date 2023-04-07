import "./Explore.scss";
import AdvancedSearch from "../../components/advanced-search/AdvancedSearch";
import {
	addClass,
	bookParams,
	toggleClass,
	topicParams,
} from "../../helper/events";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBooks } from "../../store/paramsSearch/actions";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentBook } from "../../store/books/current/actions";
import Books from "../../components/books/Books";
import { useEffect } from "react";
import { info } from "../../helper/defaultInfo";

export default function Explore() {
	const dispatch = useDispatch();
	const books = useSelector((state) => state?.search_params?.books);

	const navigate = useNavigate();
	const paginations = useSelector((state) => state.pagination.page);

  useEffect(()=>{
    dispatch(getSearchBooks(`page=1&topic=Short stories`));
  },[])
	const params_search = useSelector((state) => state.search_params);
	const formSubmin = (e) => {
		const value = e.target.value;
		if (e.keyCode === 13) {
			e.preventDefault();
			e.target.value = "";

			const params = bookParams(paginations, value, params_search);
			dispatch(getSearchBooks(params));
			navigate(`/search/${value}`);
		}
	};
  const { label_arrivals, label_language } = info.explore;
	const topic = [
		{
			name: "fiction ",
		},
		{
			name: "Short stories",
		},
		{
			name: "Dystopia",
		},
		{
			name: "Fantasy",
		},
		{
			name: "Horror",
		},
		{
			name: "Fairy tale",
		},
		{
			name: "Biography",
		},
		{
			name: "Memoir",
		},
		{
			name: "Histoy",
		},
		{
			name: "psychology",
		},
	];
	return (
		<div className="explore">
			<div className="explore__container">
				<p className="explore__title">Explore</p>
				<div className="explore__box">
					<label className="explore__label"></label>

					<input
						onKeyDown={(e) => formSubmin(e)}
						className="explore__input"
						type="text"
						placeholder="Title, author or keyword"
					/>
				</div>
				<div className="explore__topics">
					<p className="explore__subtitle">Topics</p>
					<div className="explore__row">
						{topic.map((item, index) => (
							<Link
								className="explore__item"
								key={index}
								to={`/search/topic/${item.name}`}>
								{item.name}
							</Link>
						))}
					</div>
				</div>
					<Books info={label_arrivals} books={books?.results} link="books" />

			</div>
		</div>
	);
}
