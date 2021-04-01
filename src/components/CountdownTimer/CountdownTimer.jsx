import React, { Component } from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";

class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
    timeUp: false,
  };

  componentDidMount() {
    setInterval(() => {
      let eventDate = +new Date(this.props.date);
      let difference = eventDate - +new Date();
      if (difference < 1) {
        this.setState({ timeUp: true });
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        this.setState({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days,
        });
      }
    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds, timeUp } = this.state;

    const Heading = tw(
      SectionHeading
    )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

    return timeUp ? (
      <Heading>Event in progress</Heading>
    ) : (
      <>
        <Heading style={{ color: "#eaf4fc", textAlign: "center" }}>
          Countdown Menuju Hari Rilis!{" "}
          <span role="img" aria-label="releasedate">
            🎉
          </span>
          <br />
          {`${days} Hari ${hours} Jam ${minutes}  Menit ${seconds} Detik`}
        </Heading>
      </>
    );
  }
}

export default CountdownTimer;
