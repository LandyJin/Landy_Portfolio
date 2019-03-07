import React, { Component } from 'react';

// CSS
import '../../css/aboutMe.css';

// Component
import BackCard from './BackCard';

export class AboutMe extends Component {
    state = {
        profileNames: "LANDY PROFOLIO",
        splitProfileNames: [],
    }

    componentWillMount() {
        this.setState({
        splitProfileNames: [...this.state.profileNames]
        })
    }

  render() {
    console.log(this.state.splitProfileNames)
    return (
        <div style={{width: "100%", margin:"auto"}}>
            {/* About Me */}
            <div id="aboutMe">
                <div className="description"><span>——</span> Touch Below Card To Check More</div>
                <div className="container">
                <div className="card">
                    {/* Front Card About Me */}
                    <div className="front">
                        <div className="frontCard">
                            <div className="frontCard-text">
                                {this.state.splitProfileNames.map((splitProfileName, i) => (
                                    <span 
                                        key={i}
                                        className="frontCard-text-words"
                                    >
                                        {splitProfileName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Back Card About Me  */}
                    <BackCard
                        handleClick = {this.props.handleClick}
                    />
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default AboutMe
