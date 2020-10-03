console.log("poop - checking this works");

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliSeconds: 0,
    };

    this.timer = null;

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    // this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    let startTime = Date.now();
    this.timer = setInterval(() => {
      const currentTime = Date.now();
      const timePassedInMilliSeconds =
        currentTime - startTime + this.state.timePassedInMilliSeconds;
      this.setState({ timePassedInMilliSeconds });
      startTime = currentTime;
    }, 250);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ timePassedInMilliSeconds: 0 });
    this.timer = null;
  }

  render() {
    return (
      <div>
        <h2
          className="border px-3 py-4 rounded my-3 mx-auto text-center"
          style={{ maxWidth: "300px" }}
        >
          {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary mr-2"
            onClick={() => this.startTimer()}
          >
            start
          </button>
          <button
            className="btn btn-outline-danger mr-2"
            onClick={() => this.stopTimer()}
          >
            stop
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => this.resetTimer()}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<StopWatch />, document.getElementById("root"));
