import ButtonBack from "../buttonBack/ButtonBack";
import "./Error.scss";

export default function Error() {
	return (
		<div>
            <ButtonBack/>
			<p className="error">
				Unfortunately, the books aren`t currently available. Try again later
			</p>
		</div>
	);
}
