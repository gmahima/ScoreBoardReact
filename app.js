function Header() {
  return (
    <Header>
      <h1>Scoreboard</h1>
      <span className="stats">players: 1</span>
    </Header>

  )
}
const Counter = () => {
  return (
    <div className= "counter">
      <button className= "counter-action decrement">-</button>
      <span className="counter-score">45</span>
      <button className= "counter-action decrement">-</button>)
    </div>
}
const Player = () => {
 return (  <div className="player">
    <span className="player-name">Guil</span>
    <Counter />
  </div>)
}
const App = () => {
  return (
    <div className="scoreboard">
      <Header></Header>
      <Player />
    </div>
  )
}





ReactDOM.render(
  <App />,
   document.getElementById('root'));
