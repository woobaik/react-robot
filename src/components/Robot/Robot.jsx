import React, { Component, Fragment } from "react"
import RobotCard from "./RobotCard"
import InputBox from "../UI/InputBox"

import classes from "./Robot.module.css"

class Robot extends Component {
  state = {
    robots: [],
    searchTerm: ""
  }

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(json => this.setState({ robots: json }))
    )
  }

  render() {
    const robots = this.state.robots
      .filter(robot => {
        return (
          robot.name
            .toLowerCase()
            .indexOf(this.state.searchTerm.toLocaleLowerCase()) !== -1
        )
      })
      .map(robot => {
        return <RobotCard key={robot.id} {...robot}></RobotCard>
      })

    let searchResult =
      robots.length > 1 ? (
        robots
      ) : (
        <div>
          <h2>No Search Result Found</h2>
        </div>
      )

    return (
      <Fragment>
        <InputBox
          value={this.state.searchTerm}
          inputChange={this.handleInputChange}
        />
        <div className={classes.Robot}>{searchResult}</div>
      </Fragment>
    )
  }
}

export default Robot
