import React, { PureComponent } from 'react'
import './Color.css'

class Color extends PureComponent {
  render() {
    const styleObj= {
      backgroundColor: "red"
    }
    return(
      <div>
        <h1>World of Colors</h1>
        <h4>It will go to its own page</h4>
        <section style={styleObj} id="colors">
          <h2>{this.props.name}</h2>
        </section>
      </div>
    )
  }
}

export default Color;
