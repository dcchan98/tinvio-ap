/** @format */

import React from "react";

export default function IconText({ text, iconsURL }) {
	return (

			<div className='row'>
				{" "}
				<img className="ml-4 mr-1" src={iconsURL} />
				<h4>{text}</h4>
			</div>


	);
}
