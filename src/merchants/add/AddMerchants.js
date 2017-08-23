import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

var Parse = require('parse');
Parse.serverURL = 'http://35.194.199.151:80/parse'

class AddMerchants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    Parse.initialize("01b8583bc6dffce7c48f36fadbdea18fa36cf805")

  }

  componentWillMount() {
  }

  handleClick(event) {
    console.log("cliced")
    var self = this;
    var payload = {
      "userid": this.state.username,
      "password": this.state.password,
    }

    this.validateFields();
  }

  validateFields() {
    // var user = new Parse.User();
    // user.set("username", this.state.username);
    // user.set("password", this.state.password);

    // user.signUp(null, {
    //   success: function (user) {
    //     console.log("Login is success")
    //   },
    //   error: function (user, error) {
    //     // Show the error message somewhere and let the user try again.
    //     alert("Error: " + error.code + " " + error.message);
    //   }
    // });

    // Parse.User.logIn(this.state.username, this.state.password, {
    //   success: function (user) {
    //     alert("Success");
    //   },
    //   error: function (user, error) {
    //     alert("Error: " + error.code + " " + error.message);
    //   }
    // });
  }

  /*
  Merchant should have ID,
   Name,
    MembershipType,
     Premium amount,
      Amount paid,
       Due Amount,
        OnBoardedDate,
         ContactNumber,
          Address,
           EmailID,
            isActive,
             discount.
  */

  render() {
    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'right'};
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="AddMerchants">
          </AppBar>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <TextField
              floatingLabelText="Merchant Name"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              floatingLabelText="Premium Amount"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              floatingLabelText="Amount Paid"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              floatingLabelText="DueAmount"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
            type="ContactNumber"
              floatingLabelText="Contact Number"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default AddMerchants;