/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchUsers,setCurrentUser } from "../redux/user/user-actions";

import HeaderImage from "../components/HeaderImage";
import UserInfo from "../components/UserInfo";
import Card from "../components/Card";

const imageURL = "images/image.jpg";

class PostPage extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchUsers();
  }
  
  handleUserSelection = (user)=>{
    console.log(user)
    this.props.setCurrentUser(user);
  }

	render() {
		return (
			<div>
				<HeaderImage imageURL={imageURL} />
				<br></br>
				<div className='container'>
					<h1>Select Users</h1>

					{this.props.fetchedUsers != null
						? this.props.fetchedUsers.map((user) => (
								<div>
									<button onClick={()=>this.handleUserSelection(user)} type='button' class='btn btn-secondary mb-1'>
										{user.name}
									</button>
								</div>
						  ))
						: ""}

          <br></br>

          <UserInfo currentUser = {this.props.currentUser}/>

					
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
    currentUser:state.user.currentUser
	};
};
const mapDispatchToProps = { fetchUsers,setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
