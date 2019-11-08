import React from "react"
import classes from "./RobotCard.module.css"

const RobotCard = props => {
  return (
    <div className={classes.RobotCard}>
      <img src={`https://robohash.org/${props.name}`} alt='robot' />
      <div className={classes.title}>Name: {props.name}</div>
    </div>
  )
}

export default RobotCard
