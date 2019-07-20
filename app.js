function Header(props) {
  return (
    <Header>
      <h1>{props.title}</h1>
      <span className="stats">players: {props.players}</span>
    </Header>

  )
}
const Counter = (props) => {
  return (
    <div className= "counter">
      <button className= "counter-action decrement">-</button>
      <span className="counter-score">{props.score}</span>
      <button className= "counter-action decrement">-</button>)
    </div>
}
const Player = (props) => {
 return (  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>)
}
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" players={1} />
      <Player score={400} name="the best player" />
    </div>
  )
}





ReactDOM.render(
  <App />,
   document.getElementById('root'));
