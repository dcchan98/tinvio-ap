/** @format */

import React from "react";

export default function Card({ title, body }) {
	return (
		<div>
			<div class='card'>
				
				<div class='card-body'>
					<h5 class='card-title'>{title}</h5>
					<p class='card-text'>
						{body}
					</p>
	
				</div>
			</div>
			<br />
		</div>
	);
}
