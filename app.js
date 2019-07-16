const title = "<h1>first</h1>"
const desc = "<p>para</p>"
const ti = "main-title"
const header = (<header>
  <h1 id={ti}>{title}! its cool!!</h1>
  <p>{desc}</p>
</header>)
ReactDOM.render(header, document.getElementById('root'));
