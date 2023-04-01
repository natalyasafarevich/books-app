import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./ButtonBack.scss";

export default function ButtonBack() {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(-1)} className="button-back">
			<KeyboardBackspaceIcon fontSize="20" /> Back
		</button>
	);
}
