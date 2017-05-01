import React, { PureComponent } from 'react'
import './Profile.css'

class Profile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      height: 100
    }
  }
  render() {
    var { name, age, bio, pic } = this.props;
    var { height } = this.state;
    return(
      <div className="profile-box">
        <h2>{name}</h2>
        <h4>age: {age}</h4>
        <h4>bio: {bio}</h4>
        <img src={pic} alt="selfie" height={height}/>
        <br />
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
      </div>
    )
  }

  zoomPicIn() {
    this.setState({ height: this.state.height + 40})
  }
  zoomPicOut() {
    this.setState({ height: this.state.height - 40})
  }
}

export default Profile
