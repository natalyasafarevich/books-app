import { Link } from "react-router-dom";
import LastPageIcon from '@mui/icons-material/LastPage';
import "./Label.scss";

export default function Label({ info, link }) {
	return (
		<div className="label">
			<p className="label__info">{info.label}</p>
			<p className="label__title title">{info.title}</p>
			<p className="label__desc">{info.desc}</p>
			<Link className="label__link" to={`/search/${link}`}>
				Show all
				<LastPageIcon/>
			</Link>
		</div>
	);
}
