import React, { Component } from "react";
import "./Card.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      name: "",
      date: ""
    };
  }

  //Card Number
  numberChange = e => {
    e.target.value=e.target.value.replace(/[^Z0-9]+/g, "");
    this.setState({
      number:
        e.target.value.length > 0
          ? e.target.value.match(/(.{1,4})/g).join(" ")
          : "XXXX XXXX XXXX XXXX"
    });
  };

  //Name of Card Owner
  nameChange = e => {
    e.target.value=e.target.value.replace(/[^a-zA-Z]+/g,'')
    this.setState({
      name: e.target.value.toUpperCase()
    });
  };

  //Expiration
  dateChange = e => {
    
    e.target.value=e.target.value.replace(/[^0-9]+/g, "");
    return e.target.value.length === 0
          ? this.setState({
            date:"MM/YY"                
          })
          :((e.target.value=e.target.value.match(/.{1,2}/g).join("/")),
    this.setState({
      date:e.target.value
        
          
    }))
    
  };

  render() {
    return (
      <div>
        <div className="master">
          <div className="credit-card">
            <div>
              <h2 className="titel-card">Company name</h2>
            </div>
            <div className="main-card">
              <img
                src={require("./card-credit.png")}
                alt="puce"
                className="img-card"
              />
              <p className="num-card"> {this.state.number}</p>
            </div>
            <div className="par-card">
              <p>{this.state.date}</p>
            </div>
            <div className="header-card">
              <h3 className="name-foulen">{this.state.name}</h3>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png"
                alt="master"
                className="img-master"
              />
            </div>
          </div>
          <div>
            <div className="zone-text">
              <label>
                NUMBER
                <input
                  className="zone-num-date"
                  type="text "
                  maxLength="16"
                  onChange={this.numberChange}
                />
              </label>
              <label>
                NAME
                <input
                  className="zone-num-date"
                  type="text "
                  maxLength="20"
                  onChange={this.nameChange}
                />
              </label>
              <label>
                EXPIRATION DATE
                <input
                  className="zone-name zone-num-date"
                  type="text "
                  maxLength="5"
                  onChange={this.dateChange}
                  
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
