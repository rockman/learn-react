'use strict';

const dateJs = document.getElementById("dateJs");
const dateReact = document.getElementById("dateReact");
const dateReactJsx = document.getElementById("dateReactJsx");

function render() {
    dateJs.innerHTML = `
        <div class="split">
            JS Template
            <input />
            <p>${new Date()}</p>
        </div>
    `;

    var renderDiv = React.createElement(
        "div",
        {
            className: "split"
        },
        "React template ",
        React.createElement("input"),
        React.createElement(
            "p",
            null,
            new Date().toString()
        )
    );

    ReactDOM.render(renderDiv, dateReact);
}

setInterval(render, 1000);