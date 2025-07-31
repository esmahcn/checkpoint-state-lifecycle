import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Asma Hacene",
        bio: "Full Stack Developer & UI enthusiast.",
        imgSrc: "/img/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.avif", // يمكنك تغييره بصورة حقيقية
        profession: "Software Engineer",
      },
      shows: false,
      secondsElapsed: 0,
    };
  }


  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }


  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, secondsElapsed } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Checkpoint React - Class Component
        </h1>

        <button
          onClick={this.toggleShow}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="mt-8 p-6 bg-white shadow-md rounded-md text-center w-full max-w-md">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{person.fullName}</h2>
            <p className="text-gray-600 mt-2">{person.bio}</p>
            <p className="text-indigo-500 font-medium mt-2">{person.profession}</p>
          </div>
        )}

        <p className="mt-6 text-sm italic text-gray-500">
          Time since component mounted: {secondsElapsed} seconds
        </p>
      </div>
    );
  }
}

export default App;