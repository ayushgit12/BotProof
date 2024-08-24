import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import ParticlesBg from "particles-bg";
import { TbReload } from "react-icons/tb";

class CaptchaTest extends Component {
    componentDidMount() {
        loadCaptchaEnginge(6);
    }

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        } else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };

    render() {
        return (
            <div className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-l from-[#6674f7] to-[#6fa5f5] blur-lg"></div>
                <ParticlesBg type="circle" bg={{ zIndex: 0, position: "absolute", top: 0, filter: "blur(12px)" }} />
                <div className="captcha-container bg-white bg-opacity-30 backdrop-blur-lg rounded-lg z-40 shadow-lg p-16 w-3/5 max-w-4xl h-[600px] flex flex-col items-center">
                    <div className="captcha-header text-center font-bold text-4xl text-gray-700 mb-8">CAPTCHA</div>
                    <LoadCanvasTemplate />
                    <input
                        className="captcha-input mt-8 p-6 border rounded-lg w-full text-xl placeholder-black focus:outline-none"
                        placeholder="Enter Captcha Value"
                        id="user_captcha_input"
                        name="user_captcha_input"
                        type="text"
                    />
                    <button
                        className="captcha-button mt-10 bg-blue-600 text-white p-6 rounded-lg w-full text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={this.doSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default CaptchaTest;
