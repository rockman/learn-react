import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { counter: state.value };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => {
      dispatch({ type: 'increment' });
    },
    decrementCounter: () => {
      dispatch({ type: 'decrement' });
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(({ counter, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => decrementCounter()}>-</button>
        <button onClick={() => incrementCounter()}>+</button>
      </div>
    </div>
  );
});

export default App;
