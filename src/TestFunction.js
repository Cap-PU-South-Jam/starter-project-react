import React, { useState } from "react";

const TestFunction=() => {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count+1);
	}

	return (
		<div style={{margin:'50px'}}>
        TestFunction!
		<h2>{count}</h2>
			<button onClick={increase}>Add</button>
		</div>
	)
}

export default TestFunction;
