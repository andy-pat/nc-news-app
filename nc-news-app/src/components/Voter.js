import React, { Component } from "react";
import { votePatch } from "../api";

class Voter extends Component {
  state = {
    inc_votes: 0,
    votes: +this.props.votes,
  };
  
  handleClick = (event) => {
    const { type } = this.props
    const { id } = this.props;
    const vote = +event.target.value;
    this.setState((currentState) => {
      const newState = {
        votes : currentState.votes + vote
      }
      return newState
    })
    votePatch(type, id, vote).then((data) => {
      this.setState({
         inc_votes: 0,
         votes: data.votes,
    });
    })
  };

  render() {
    const { votes } = this.state;
    return (
      <div>
        <button onClick={this.handleClick} value='1'>
          up
        </button>
        <p>{votes} votes</p>
        <button onClick={this.handleClick} value='-1'>
          down
        </button>
      </div>
    );
  }
}

export default Voter;
