import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import ics from "ics";
import { Button } from "antd";
import EventModal from "./eventmodalcal.js";
import icalFormat from "./iCalFormat.js";

class AppCal extends Component {
  state = {
    visible: false
  };

  onOpenModal = () => {
    this.setState({ visible: true });
  };

  onCloseModal = () => {
    this.setState({ visible: false });
  };

  onSubmitEvent = inputs => {
    const events = inputs.map(i => {
      return {
        ...icalFormat,
        start: i.start || [2019, 12, 3, 6, 30],
        title: i.title,
        description: i.description,
        url: i.url
      };
    });
    console.log(events, ics);
    ics.createEvents(events, (err, value) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(value);
      window.open("data:text/calendar;charset=utf8," + escape(value));
    });
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.onOpenModal}>Create</Button>
        <EventModal
          visible={this.state.visible}
          onCloseModal={this.onCloseModal}
          onSubmitEvent={this.onSubmitEvent}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppCal />, rootElement);
