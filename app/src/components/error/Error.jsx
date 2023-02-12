import ButtonBack from "../buttonBack/ButtonBack";
import { useSelector } from "react-redux";
import "./Error.scss";

export default function Error() {
	const error = useSelector((state) => state.error.isError);

	if (error) {
		return (
			<div>
				<ButtonBack />
				<p className="error">
					Unfortunately, the books aren`t currently available. Try again later
				</p>
			</div>
		);
	}
}
