import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ButtonBack.scss";

export default function ButtonBack() {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(-1)} className="button-back">
			<ArrowBackIosIcon /> Back
		</button>
	);
}
