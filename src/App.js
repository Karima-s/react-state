
import './App.css';
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      person: {
        fullName: "Karima Sassi",
        bio: "Currently a student at GO MY CODE",
        imge: <img src="photoProfile.jpg" alt="react" />,
        profession: "Student",
      },
      shows: true,
      counter:0
    };
  }
  handleClick=()=>this.setState({fullName:'amal'})
  render() {
    <button onClick={this.handleClick}> ClickMe</button>

    return <h1>hello {this.state.fullName},{this.state.bio},
            {this.state.profession},{this.state.imge}</h1>;
  }
  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }
  toggle(){
    this.setState({shows:!this.state.shows});
  }
  render() {
    return (
      (this.state.shows)? <>
      <h2>{this.state.person.fullName}</h2>
      <img src={this.state.person.imgSrc}/>
      <h2>{this.state.person.bio}</h2>
      <h2>{this.state.person.profession}</h2>
      <h2>{this.state.counter} seconds   </h2>
      <button onClick={this.toggle.bind(this)}>Click me</button>
    </> : <button onClick={this.toggle.bind(this)}>Click me</button>
    );
  }
  componentDidMount(){
    
  }

};

export default App;
