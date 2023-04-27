'use strict';

function About() {
    return (
        <React.Fragment>
            <h1>This is about page</h1>
        </React.Fragment>
    )
}

ReactDOM.render(<About />, document.querySelector("#about"))