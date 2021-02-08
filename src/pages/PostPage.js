/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import {
	fetchUsers,
	setCurrentUser,
	setCurrentPosts,
} from "../redux/user/user-actions";

import HeaderImage from "../components/HeaderImage";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";

const imageURL = "images/image.jpg";

class PostPage extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchUsers();
	}

	handleUserSelection = (user) => {
		console.log(user);
		this.props.setCurrentUser(user);
		this.props.setCurrentPosts(user.id);
	};

	render() {
		return (
			<div>
				<HeaderImage imageURL={imageURL} />
				<br></br>
				<div className='container'>
					<h1>User List</h1>

					{this.props.fetchedUsers != null
						? this.props.fetchedUsers.map((user) => (
								<div>
									<button
										onClick={() => this.handleUserSelection(user)}
										type='button'
										class='btn btn-secondary mb-1'>
										{user.name}
									</button>
								</div>
						  ))
						: ""}

					<br></br>

					{
						this.props.currentUser!=null?
						<>
							<UserInfo currentUser={this.props.currentUser} />
							<h1>{this.props.currentUser.name} Post's</h1>
							<br />
							<h6 className='text-secondary'>
								{this.props.currentPosts.length} POSTS
							</h6>
							<Post currentPosts={this.props.currentPosts} />
						</>:<h1>Select a user</h1>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state /*, ownProps*/) => {
	return {
		fetchedUsers: state.user.fetchedUsers,
		currentUser: state.user.currentUser,
		currentPosts: state.user.currentPosts,
	};
};
const mapDispatchToProps = { fetchUsers, setCurrentUser, setCurrentPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
