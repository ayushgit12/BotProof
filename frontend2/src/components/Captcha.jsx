import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import ParticlesBg from "particles-bg";
import { TbReload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

// CaptchaTest Class Component
class CaptchaTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaValid: false,
      showPopup: false, // State for the popup
    };
    this.timer = null; // Timer reference
  }

  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts to avoid memory leaks
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  // Function to trigger the popup
  triggerPopup = () => {
    this.setState({ showPopup: true });
    this.timer = setTimeout(() => {
      this.setState({ showPopup: false });
    }, 5000);
  };

  doSubmit = () => {
    const userCaptcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(userCaptcha)) {
      this.setState({ captchaValid: true }, () => {
        // Redirect to the home page
        this.props.navigate("/home");
      });
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha does not match. Please try again.");
      this.setState({ captchaValid: false });
      document.getElementById("user_captcha_input").value = "";

      // Trigger the popup on invalid CAPTCHA
      this.triggerPopup();
    }
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-l from-[#6674f7] to-[#6fa5f5] blur-lg"></div>
        <ParticlesBg
          type="circle"
          bg={{ zIndex: 0, position: "absolute", top: 0, filter: "blur(12px)" }}
        />
        {/* Popup */}
        {showPopup && (
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50">
            <p>
              Your activity indicates you might be a bot. Please verify the
              CAPTCHA below to continue.
            </p>
          </div>
        )}
        <div className="captcha-container bg-white bg-opacity-30 backdrop-blur-lg rounded-lg z-40 shadow-lg p-16 w-3/5 max-w-4xl h-[600px] flex flex-col items-center">
          <div className="captcha-header text-center font-bold text-4xl text-gray-700 mb-8">
            CAPTCHA
          </div>
          <LoadCanvasTemplate />
          <input
            className="captcha-input mt-8 p-6 border rounded-lg w-full text-xl placeholder-black focus:outline-none"
            placeholder="Enter Captcha Value"
            id="user_captcha_input"
            name="user_captcha_input"
            type="text"
          />
          <button
            className="text-2xl captcha-button mt-10 bg-blue-600 text-white p-6 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={this.doSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

// Functional Wrapper to Use useNavigate Hook
const ProtectedCaptchaTest = (props) => {
  const navigate = useNavigate();
  return <CaptchaTest {...props} navigate={navigate} />;
};

export default ProtectedCaptchaTest;
