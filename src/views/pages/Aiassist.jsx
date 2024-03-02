import React from 'react'
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
// useState
function Aiassist() {
    // const speakText = () => {
    //     const speechSynthesis = window.speechSynthesis;
    //     const speechText = new SpeechSynthesisUtterance('Hello, world!');
    //     speechSynthesis.speak(speechText);
    // };

    // const { speak } = useSpeechSynthesis();
    const [activeBlock, setActiveblock] = React.useState('first');
    const { speak } = useSpeechSynthesis();
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const options = ['model 1', 'model 2', 'model 3'];
 
    console.log(activeBlock)
   
    let recognition = null;

    const startListening = () => {
        if (!recognition) {
            recognition = new window.webkitSpeechRecognition();
            recognition.onresult = (event) => {
                const currentTranscript = event.results[0][0].transcript;
                setTranscript(currentTranscript);
                handleSpeechRecognition(currentTranscript);
            };
        }
        recognition.start();
        setIsListening(true);
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
        }
        setIsListening(false);
    };

    const handleSpeechRecognition = (transcript) => {
        if (options.includes(transcript)) {
            // Speech matches one of the options
            alert(`You selected: ${transcript}`);
        } else {
            // Speech does not match any option
            alert('Try to speak from the given options: Model A, Model B, Model C');
        }
    };

    console.log(transcript)
    return (
        <>
        { activeBlock === 'first' &&
            <section className="bg-gray-900 text-white">
                <div>
                    <div className="w-full bg-gray-800 h-screen rounded">
                        <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 rounded">
                                <div className="bg-gray-900 w-full shadow rounded-3xl p-8 sm:p-12 -mt-72">
                                <h1
                                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                                    Select your Path 

                                    {/* <span className="sm:block"> Increase Conversion. </span> */}
                                </h1>

                                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Manual
                                </button>
                                <button onClick={() => {
                                        speak({ text: "Congratulations let's begin with AI Model" });
                                        setActiveblock("second");
                                        }} className="mt-9 mx-2 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    AI Interactive
                                </button>
                                {/* <button onClick={() => speak({ text: "Congratulations let's begin with AI Model" })} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message to someone
                                </button> */}
                                {/* <button onClick={speakText}>Speak</button> */}
                                {/* <form action="" method="post">
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full md:w-1/2 flex flex-col">
                                            <label className="font-semibold leading-none text-gray-300">Name</label>
                                            <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                            <label className="font-semibold leading-none text-gray-300">Phone</label>
                                            <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-8">
                                        <div className="w-full flex flex-col">
                                            <label className="font-semibold leading-none text-gray-300">Subject</label>
                                            <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full flex flex-col mt-8">
                                            <label className="font-semibold leading-none text-gray-300">Message</label>
                                            <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                            Send message
                                        </button>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        }

            {activeBlock === 'second' &&
                <section className="bg-gray-900 text-white">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="w-full bg-gray-800 h-screen">
                            <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                                <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
                                    <h1
                                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                                        Select your AI Model

                                        {/* <span className="sm:block"> Increase Conversion. </span> */}
                                    </h1>

                                    {/* <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Manual
                                    </button> */}
                                    <div onClick={isListening ? stopListening : startListening}>
                                    <svg class="w-[32px] h-[32px] text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
                                    </svg>
                                    </div>
                                    <button onClick={() => {
                                        speak({ text: "Congratulations let's begin with AI Model" });
                                        setActiveblock("Second");
                                    }} className="mt-9 mx-2 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        AI Interactive
                                    </button>
                                    {/* <button onClick={() => speak({ text: "Congratulations let's begin with AI Model" })} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message to someone
                                </button> */}
                                    {/* <button onClick={speakText}>Speak</button> */}
                                    {/* <form action="" method="post">
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full md:w-1/2 flex flex-col">
                                            <label className="font-semibold leading-none text-gray-300">Name</label>
                                            <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                            <label className="font-semibold leading-none text-gray-300">Phone</label>
                                            <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-8">
                                        <div className="w-full flex flex-col">
                                            <label className="font-semibold leading-none text-gray-300">Subject</label>
                                            <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full flex flex-col mt-8">
                                            <label className="font-semibold leading-none text-gray-300">Message</label>
                                            <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                            Send message
                                        </button>
                                    </div>
                                </form> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            }
        </>
    )
}

export default Aiassist
