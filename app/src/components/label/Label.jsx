import "./Label.scss";

export default function Label({ info }) {
	return (
		<div className="label">
			<p className="label__info">{info.label}</p>
			<p className="label__title title">{info.title}</p>
			<p className="label__desc">
			{info.desc}
			</p>
		</div>
	);
}
