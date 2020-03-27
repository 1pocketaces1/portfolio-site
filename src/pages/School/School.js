import React, { Component } from 'react';
//import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
//import 'react-toastify/dist/ReactToastify.min.css';
import './School.css';

class SchoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      class: ''
    };
    if (isMobile) {
      this.state.class = 'accessTextMobile';
    } else {
      this.state.class = 'accessText';
    }
  }

  render() {
    return (
      <div className={"pageContainer"}>
        <h2>College Classes</h2><br></br>

        <h4>Tarrant County College:  fall 2014 -  spring 2016</h4>
        <ol>
          <li>Intro to C++</li>
          <li>Structured Databases with Microsoft Access</li>
        </ol>

        <h4>Texas A&M:  fall 2016 - fall 2017</h4>
        <ol>
          <li>Intro to C++ (again)</li>
          <li>Data Structures & Algorithms</li>
          <li>Discrete Logic Structures</li>
        </ol>

        <h4>Conoco Phillips Hackathon:  fall 2017</h4>
        <p>Worked on a team to build a simple webpage that displayed a chart<br></br>using data stored on an Ethereum blockchain node.</p>
      </div>
    );
  }

  // updateVal = (event) => {
  //   this.setState({
  //     inputVal: event.target.value
  //   });
  //   console.log(this.state.inputVal);
  // }
  //
  // validate = async () => {
  //   console.log(this.state.inputVal);
  //   var input = {
  //     "access": this.state.inputVal
  //   };
  //   var result = await POST(input);
  //   console.log(result.body);
  //   if (result.body === 0) {
  //     this.displayInvalid();
  //   } else {
  //     this.props.mainState.setPrev(this.props.mainState.selectedPage);
  //     this.props.mainState.selectPage('video');
  //   }
  // }

  // displayInvalid = () => {
  //   toast.error('Invalid Access Code', {
  //     autoClose: 2000,
  //     className: 'invalid'
  //   });
  // }
}

export default SchoolPage;
