/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/user-actions";

import HeaderImage from "../components/HeaderImage";
import IconText from "../components/IconText";
import Card from "../components/Card";

const imageURL = "images/image.jpg";
const phoneURL = "images/phone.png";
const categoryURL = "images/category.png";
const shopURL = "images/shop.png";

class PostPage extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return (
			<div>
				<HeaderImage imageURL={imageURL} />
				<br></br>
				<div className='container'>
					<h1>Users</h1>

					{this.props.fetchedUsers != null ?

           this.props.fetchedUsers.map(user=>user.name)

           : ""}

					<h1>Leanne Graham</h1>
					<br />
					<IconText iconsURL={phoneURL} text={"12345"} />
					<br />
					<IconText
						iconsURL={categoryURL}
						text={"Harness . Real Time . Market"}
					/>
					<br />
					<IconText
						iconsURL={shopURL}
						text={"Kulas Light, Apt. 556 , Singapore 123456"}
					/>
					<br />
					<br />
					<h1>Leanne Graham Post's</h1>
					<br />
					<h6 className='text-secondary'>2 POSTS</h6>
					{/* Use map to change  */}
					<br />
					<Card title='Title1' body='Body1' />
					<br />
					<Card title='Title2' body='Body2' />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state /*, ownProps*/) => {
	return {
		fetchedUsers: state.user.fetchedUsers,
	};
};
const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
