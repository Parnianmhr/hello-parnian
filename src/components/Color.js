import React, { PureComponent } from 'react'
import './Color.css'

const colorArray = [
  "red",
  "green",
  "yellow",
  "pink",
  "blue",
  "orange",
  "cyan",
  "lightblue",
  "purple",
]

class Color extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      color: "pink"
    }
  }

  componentDidMount(){
    let colorPos = 0
    setInterval(() => {
      if(colorArray.length - 1 > colorPos) {
        this.setState({
          color: colorArray[colorPos]
        })
        colorPos++
      } else {
        this.setState({
          color: colorArray[colorPos]
        })
        colorPos = 0
      }
    }, 700)
  }
  toggleColor(){
    if (this.state.color === "pink") {
      this.setState({
        color: "yellow"
      });
    } else {
      this.setState({
        color: "pink"
      })
    }

  }

  changeColor(event){
    this.setState({
      color: event.target.value
    })
  }

  render() {
    console.log(this.state)
    const styleObj= {
      backgroundColor: this.state.color
    }
    return(
      <div>
        <h1>World of Colors</h1>
        <h4>It will go to its own page</h4>

        <section style={styleObj} className="colors">
          <p>Write down the name of the color here:</p>
          <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
          <br />
          <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
        </section>

        <section style={styleObj} className="colors">
          <p>click on me:</p>
          <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
        </section>

      </div>
    )
  }
}

export default Color;
