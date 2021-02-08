/** @format */
import React from "react";
import IconText from "./IconText";

const phoneURL = "images/phone.png";
const categoryURL = "images/category.png";
const shopURL = "images/shop.png";


export default function UserInfo(props) {
  console.log(props.currentUser)

  const companyBs = props.currentUser.company.bs.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))).replaceAll(' ', ' . ');

	return (
		<div>
			<h1>{props.currentUser.name}</h1>
			<br />
			<IconText iconsURL={phoneURL} text={props.currentUser.phone.split(" ")[0]} />
			<br />
			<IconText iconsURL={categoryURL} text={companyBs} />
			<br />
			<IconText
				iconsURL={shopURL}
				text={props.currentUser.address.street +" , "+props.currentUser.address.suite+" , "+props.currentUser.address.city}
			/>
			<br />
			<br />
		</div>
	);
}
