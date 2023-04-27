'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome Message!!</h1>
      <a href="/cards">Card Page</a> <br />
      <a href="/about">About Page</a> <br />
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
