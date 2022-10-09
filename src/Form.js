import React, { useEffect, useState } from "react";

const Form = () => {
	// const [count, setCount] = useState(0);

	// const increase = () => {
	// 	setCount(count+1);
	// }

	// const onChange = (e) => {
	// 	setVal(e.target.value);
	// }

	// const onSubmit = (val) => {
	// 	event.preventDefault();
	// 	console.log("what is the value?", val);
	// 	// handle submit logic using "val"
	// }

	function onSubmit(e) {
		e.preventDefault();
		console.log("what is the value?", e);
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<p>{item.question1}</p>
				<input type="radio" id="html" name="fav_language" value="HTML" />
				<label htmlFor="html">{item.Answer1}</label><br />
				<input type="radio" id="css" name="fav_language" value="CSS" />
				<label htmlFor="css">{item.Answer2}</label><br />
				<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
				<label htmlFor="javascript">{item.Answer3}</label> <br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default Form;
