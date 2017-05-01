import React, { PureComponent } from 'react'
import './Profile.css'

class Profile extends PureComponent {
  render(){
    var { name, age, bio } = this.props;
    console.log(this.props.name)
    return(
      <div className="profile-box">
        <h3>{name}</h3>
        <h3>age: {age}</h3>
        <h3>bio: {bio}</h3>
      </div>
    )
  }
}

export default Profile
