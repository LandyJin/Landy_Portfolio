import React, { Component } from 'react'

// CSS
import '../../css/BackCard.css';

// AOS scroll Plugin
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Font Awesome Icons
import 'font-awesome/css/font-awesome.min.css';

export class BackCard extends Component {
    // constructor(props){
    //     super(props);
    //   }
    //   componentDidMount(){
    //     AOS.init({
    //       duration : 2000
    //     })
    // }
    
    render() {
        return (
        <div className="profile" >
            <div className="profileImage"></div>
            <div className="backCard">
                <h1  
                    // data-aos="fade-left" 
                    // data-aos-duration="1000"
                >
                    <span>Landy Jin</span>
                </h1>
                <div 
                    className="jobCategory"  
                    // data-aos="fade-left" 
                    // data-aos-duration="1000"
                >
                    Front-end Developer
                </div>
                <p>
                    <a href="tel:0405181503">
                        <i className="fa fa-mobile fa-lg" 
                            // aria-hidden="true"
                        ></i>   :  0405161503
                    </a>
                </p>
                <p>
                    <a href="mailto:huiyanj91@gmail.com">
                        <i className="fa fa-envelope" 
                        // aria-hidden="true"
                        ></i>   :  huiyanj91@gmail.com
                    </a>
                </p>
                <div className="icon-box">
                    <a href="https://www.linkedin.com/in/huiyan-jin-b03921149" 
                       target="_blank" 
                       rel="noopener noreferrer">
                    <i className="fa fa-linkedin icons"></i>
                    </a>
                </div>
                <div className="icon-box icon-box-2" onClick={this.props.handleClick.bind(this)}>
                    <i className="fa fa-ellipsis-h icons"></i>
                </div>
            </div>
        </div>
        )
    }
}

export default BackCard
