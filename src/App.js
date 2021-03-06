import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen';
import Menu from './Menu';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
class App extends Component {
   constructor(props){
    super(props);
    this.state={
      loginPage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Menu appContext={this}/>);
    loginPage.push(<Loginscreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;