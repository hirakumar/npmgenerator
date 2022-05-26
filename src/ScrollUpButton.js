import React, { useState } from "react";

function ScrollUpButton() {
	const [status, setStatus] = useState(true);
	return (
		<div>
			<button>Scroll Up Button 100 </button>
			{status && <div>Ok fine</div>}
		</div>
	);
}
export default ScrollUpButton;
