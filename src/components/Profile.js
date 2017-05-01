import React, { PureComponent } from 'react'
import './Profile.css'

class Profile extends PureComponent {
  render(){
    console.log(this.props.name)
    return(
      <div className="profile-box">
        <h3>{this.props.name}</h3>
        <h3>age: {this.props.age}</h3>
        <h3>bio: {this.props.bio}</h3>
      </div>
    )
  }
}

export default Profile
