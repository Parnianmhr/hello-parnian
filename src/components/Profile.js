import React, { PureComponent } from 'react'
import './Profile.css'

class Profile extends PureComponent {
  render(){
    var { name, age, bio, pic } = this.props;
    console.log(this.props.name)
    return(
      <div className="profile-box">
        <h2>{name}</h2>
        <h4>age: {age}</h4>
        <h4>bio: {bio}</h4>
        <img src={pic} alt="selfie" height={100}/>
      </div>
    )
  }
}

export default Profile
