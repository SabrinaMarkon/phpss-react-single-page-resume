import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {
  
  constructor(props) {
   super(props);
   this.state = {
     foo: 'bar',
     resumeData: {}
   }
  }
  
  getResumeData() {
    $.ajax({
      url: 'resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        /* if all goes well: */
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        /* if anything goes wrong: */
        console.og(err);
        alert(err);
      }
    });
  }
  
  /* typically ajax request goes in a lifecycle method called componentDidMount */
  componentDidMount() {
    /* call method above - need to install jquery for ajax request. (yes I know it doesn't HAVE to be with jquery.) */
    this.getResumeData();
  }
  
  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
