import React, { Component } from 'react';

// React Router
import { NavLink } from 'react-router-dom';

// Logo
import Logo from '../../assets/Logo.png';

// CSS
import '../../css/Menu.css';

class Menu extends Component {
  state = {
    width: "",
    display: "",
  }
  componentDidMount() {
    window.innerWidth < 900 ?
    this.setState({
      width: "250px",
      display: "none"
    }):
    this.setState({
      display: "block"
    })
    console.log(window.innerWidth)
  }
  openNav=()=> {
		this.setState({
      width: "250px",
      display: "block"
    })
	}
  closeNav=()=> {
    
		this.setState({
      display: "none"
    })
	}
  render() {
    const styles = {
      display: {
        display: this.state.display,
        width: this.state.width
      }
    };
    const { display } = styles;
    return (
    <div className="menu">
      <NavLink to="/">
        <img className="navbar-brand" src={ Logo } alt="logo" />
      </NavLink>
      <div  className="sidenav" style={display} >
        <div className="closebtn" 
          onClick={this.closeNav}>
          &times;
        </div>
        <NavLink className="navLink" to="/">
          <div className="btn" onClick={this.closeNav}>HOME</div>
        </NavLink>
        {/* <a href="https://landyjin.herokuapp.com/#aboutMe" className="btn" onClick={this.closeNav}>ABOUT ME</a> */}
		  	<a href="https://landyjin.herokuapp.com/#detailSkills" className="btn" onClick={this.closeNav}>TECH TOOLS</a>
			  <a href="https://landyjin.herokuapp.com/#resume" className="btn" onClick={this.closeNav}>EXPERIENCES</a>
        <NavLink className="navLink" to="/bloglist">
          <div className="btn" onClick={this.closeNav}>BLOG</div>
        </NavLink>
        <NavLink className="navLink" to="/getinToch">
          <div className="btn" onClick={this.closeNav}>GET IN TOUCH</div>
        </NavLink>
      </div>
      <div className="icon" onClick={this.openNav}>&#9776;</div>
    </div>
    );
  }
};

export default Menu;
