import React, { Component } from 'react';
//import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
//import 'react-toastify/dist/ReactToastify.min.css';
import './2018.css';

class Twenty18Page extends Component {
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
        <h2>2018</h2><br></br>

        <h4>Started RewardCoin Inc</h4>
        <p>RewardCoin was made to be a coalition rewards program for large chain restaurants.</p>
        <div className={"appPreview"}>
          <div className={"previewText"}>
            <p>About the app:</p>
            <ul>
              <li>Built the app first with Angular framework (HTML/CSS/TS)</li>
              <li>Had performance issues, so rebuilt app with React Native (JS)</li>
              <li>Backend was built in AWS (Cognito, API Gateway, Lambda JS, DynamoDB)</li>
              <li>Implemented custom animations created with Lottie</li>
              <li>My brother did the design work in Adobe, I wrote/built the app code.</li>
            </ul>
          </div>
          <div className={"previewCarousel"}>
            
          </div>
        </div>
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

export default Twenty18Page;
