import "./AdvancedSearch.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getParams } from "../../store/paramsSearch/actions";
import { addClass, removeClass } from "../../helper/events";

export default function AdvancedSearch() {
	const dispatch = useDispatch();

	const searchSettings = (e) => {
		e.preventDefault();

		let search_by = null;
		let language = [];

		// get value checkboxs & input
		const checkbox = document.querySelectorAll(
			".advanced-search__checkbox input"
		);
		checkbox.forEach((item) => {
			if (item.type === "checkbox") {
				if (item.checked) {
					language.push(item.nextElementSibling.textContent);
				}
			}
			if (item.type === "text" && item.value.length >= 2) {
				language.push(...item.value.replace(/,/gi, "").split(" "));
			}
		});

		// get value radio
		const radio = document.querySelectorAll(".advanced-search__radio input");
		radio.forEach((item) => {
			if (item.checked) {
				search_by = item.nextElementSibling.getAttribute("datasearch");
			}
		});
		dispatch(getParams(search_by, language));
		document.querySelector(".advanced-search").classList.add("hidden");
	};

	// input is disabled
	const idClicke = (e) => {
		const elem = document.querySelector(".advanced-search__checkbox");

		if (e.target.nextElementSibling?.getAttribute("datasearch") !== "id") {
			document.querySelectorAll(".disabled input").forEach((item) => {
				item.disabled = false;
			});
			removeClass(elem, "disabled");
			document
				.querySelector(".advanced-search__checkbox")
				.classList.remove("disabled");
			return;
		}

		// if target "ID"
		addClass(elem, "disabled");
		document.querySelectorAll(".disabled input").forEach((item) => {
			item.disabled = true;
		});

		// console.log(document.querySelector('.header__input').type = 'number')
	};

	return (
		<div className="advanced-search hidden">
			<div className="advanced-search__container">
				<div className="advanced-search__form ">
					<div className="advanced-search__radio" onClick={idClicke}>
						<p className="advanced-search__title">search by</p>
						<div className="advanced-search__box">
							<input type="radio" name="advanced-search" id="books" defaultChecked />
							<label htmlFor="books" datasearch="book">
								Books or author
							</label>
						</div>
						<div className="advanced-search__box">
							<input type="radio" name="advanced-search" id="topic" />
							<label htmlFor="topic" datasearch="topic">
								topic
							</label>
						</div>
						<div className="advanced-search__box">
							<input type="radio" name="advanced-search" id="ids" />
							<label htmlFor="ids" className="ids" datasearch="id">
								ids
							</label>
						</div>
					</div>
					<div className="advanced-search__checkbox">
						<p className="advanced-search__title">language</p>
						<div className="advanced-search__dropdown">
							<div className="advanced-search__box">
								<input type="checkbox" id="en" defaultChecked />
								<label htmlFor="en">en</label>
							</div>
							<div className="advanced-search__box">
								<input type="checkbox" id="fr" />

								<label htmlFor="fr">fr</label>
							</div>

							<div className="advanced-search__box">
								<input type="checkbox" id="de" />
								<label htmlFor="de">de</label>
							</div>
							<div className="advanced-search__box">
								<input type="checkbox" id="ru" />
								<label htmlFor="ru">ru</label>
							</div>
							<div className="advanced-search__box">
								<input type="checkbox" id="pl" />
								<label htmlFor="pl">pl</label>
							</div>
						</div>
						<p className="advanced-search__additional">
							Or enter the required ones separated by commas
							<span>
								Languages ​​must match
								<a
									href=" https://www.nationsonline.org/oneworld/country_code_list.htm"
									target="_blank">
									the abbreviated form (Alpha 2)
								</a>
							</span>
						</p>

						<input
							className="advanced-search__input"
							type="text"
							placeholder="Enter language"
						/>
					</div>
					<button
						className="advanced-search__button"
						onClick={searchSettings}
						type="button">
						save
					</button>
				</div>
			</div>
		</div>
	);
}
