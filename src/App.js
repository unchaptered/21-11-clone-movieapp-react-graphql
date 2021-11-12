import React, { Component } from "react";
import Router from "./Router";
import AllStyles from "./AllStyles";

export default class extends React.Component {
  render() {
    return (
      <>
        <Router />
        <AllStyles />
      </>
    );
  }
}
