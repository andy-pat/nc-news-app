import React, { useEffect, useState } from "react";
import { votePatch } from "../api";

export default function Voter(props) {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const [vote, setVote] = useState(0);
  const [votes, setVotes] = useState(props.votes);

  function sendUpVote(v) {
    setDownVote(false);
    upVote ? setUpVote(false) : setUpVote(true);
    setVotes((prev) => prev + v);
    votePatch(props.type, props.id, v).then((data) => {
      setVotes(data.votes);
    });
  }

  function sendDownVote(v) {
    setUpVote(false);
    downVote ? setDownVote(false) : setDownVote(true);
    setVotes((prev) => prev + v);
    votePatch(props.type, props.id, v).then((data) => {
      setVotes(data.votes);
    });
  }

  return (
    <div className="votes">
      <button
        // disabled={upVote}
        name="up"
        onClick={() => sendUpVote(upVote ? -1 : 1)}
        value="1"
      >
        {upVote ? "voted!" : "˄"}
      </button>
      <p>{votes}</p>
      <button
        // disabled={downVote}
        name="down"
        onClick={() => sendDownVote(downVote ? 1 : -1)}
        value="-1"
      >
        {downVote ? "voted!" : "↓"}
      </button>
    </div>
  );
}

// class Voter extends Component {
//   state = {
//     inc_votes: 0,
//     votes: +this.props.votes,
//   };

//   handleClick = (event) => {
//     const button = event.target.name;
//     const { type } = this.props;
//     const { id } = this.props;
//     const vote = +event.target.value;
//     const { hasClicked } = this.state;
//     this.setState((currentState) => {
//       const newState = {
//         votes: currentState.votes + vote,
//       };
//       return newState;
//     });
//     votePatch(type, id, vote).then((data) => {
//       this.setState({
//         inc_votes: 0,
//         votes: data.votes,
//       });
//     });
//   };

//   render() {
//     const { votes } = this.state;
//     return (
//       <div className="votes">
//         <button name="up" onClick={this.handleClick} value="1">
//           ˄
//         </button>
//         <p>{votes}</p>
//         <button name="down" onClick={this.handleClick} value="-1">
//           &#709;
//         </button>
//       </div>
//     );
//   }
// }

// export default Voter;
