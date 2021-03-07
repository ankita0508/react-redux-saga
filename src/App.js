import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store/actions/counter-actions";
import "./style.css";

function App(props) {
  const [counter, setCounter] = useState(0);

  const btnStyleRed = {
    backgroundColor: "red",
    border: "2px solid red",
    padding: "5px",
    color: "white",
    margin: "0 10px"
  };

  const btnStyleGreen = {
    backgroundColor: "green",
    border: "2px solid green",
    padding: "5px",
    color: "white"
  };

  const incrementCounterHandler = () => {
    setCounter(counter + 1);
  };

  const decrementCounterHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1 style={{ margin: "0 0 0 20px" }}>Count: {props.cnt}</h1>
      <button style={btnStyleGreen} onClick={props.incrementCnt}>
        Increment
      </button>
      <button style={btnStyleRed} onClick={props.decrementCnt}>
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cnt: state.counter.counter
  };
};

const mapDispatchToProps = dispatch => ({
  incrementCnt: () => {
    dispatch(increment(1));
  },
  decrementCnt: () => {
    dispatch(decrement(1));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
