import React, { Component } from 'react';

class Footer extends Component {
  render() {
     if (this.props.data) {
        var name = this.props.data.name;
        var website = this.props.data.website;
        var networks = this.props.data.social.map(function(network) {
            // networks is an array so we use map on the social object to get each:
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        });
     }
    return (
   <footer>

      <div className="row">

         <div className="twelve columns">

            <ul className="social-links">
               {networks}
            </ul>

            <ul className="copyright">
               <li>&copy; Copyright 2017 {name}, {website}</li>
               <li>&copy; Copyright 2014 Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>

         </div>

         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

      </div>

   </footer>
    );
  }
}

export default Footer;
