// stlyle
import "./Slider.scss";
const Slider = () => {
	return (
		<div className="multi-range-slider">
			<input type="range" id="input-left" min="0" max="100" value="25" />
			<input type="range" id="input-right" min="0" max="100" value="75" />
			<div className="slider">
				<div className="track"></div>
				<div className="range"></div>
				<div className="thumb left"></div>
				<div className="thumb right"></div>
			</div>
		</div>
	);
};
export default Slider;
