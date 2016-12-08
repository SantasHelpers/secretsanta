"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// app.js
// will hold state - the search results and if the list should be displayed
//import { Grid } from 'react-bootstrap';
var _ReactBootstrap = ReactBootstrap,
    Grid = _ReactBootstrap.Grid,
    Row = _ReactBootstrap.Row,
    Col = _ReactBootstrap.Col,
    Thumbnail = _ReactBootstrap.Thumbnail,
    Button = _ReactBootstrap.Button,
    Table = _ReactBootstrap.Table; //"react's require statement. looks to find a match in ReactBootstrap"

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick() {}

    // this will make a post request to the API to save a meal when the user clicks on the photo

  }, {
    key: "saveToDatabase",
    value: function saveToDatabase() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          Table,
          { striped: true, bordered: true, condensed: true, hover: true },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "#"
              ),
              React.createElement(
                "th",
                null,
                "First Name"
              ),
              React.createElement(
                "th",
                null,
                "Last Name"
              ),
              React.createElement(
                "th",
                null,
                "Username"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "1"
              ),
              React.createElement(
                "td",
                null,
                "Mark"
              ),
              React.createElement(
                "td",
                null,
                "Otto"
              ),
              React.createElement(
                "td",
                null,
                "@mdo"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "2"
              ),
              React.createElement(
                "td",
                null,
                "Jacob"
              ),
              React.createElement(
                "td",
                null,
                "Thornton"
              ),
              React.createElement(
                "td",
                null,
                "@fat"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "3"
              ),
              React.createElement(
                "td",
                { colSpan: "2" },
                "Larry the Bird"
              ),
              React.createElement(
                "td",
                null,
                "@twitter"
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiUmVhY3RCb290c3RyYXAiLCJHcmlkIiwiUm93IiwiQ29sIiwiVGh1bWJuYWlsIiwiQnV0dG9uIiwiVGFibGUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7c0JBQ21EQSxjO0lBQTdDQyxJLG1CQUFBQSxJO0lBQU1DLEcsbUJBQUFBLEc7SUFBS0MsRyxtQkFBQUEsRztJQUFLQyxTLG1CQUFBQSxTO0lBQVdDLE0sbUJBQUFBLE07SUFBUUMsSyxtQkFBQUEsSyxFQUF5Qjs7SUFFNURDLEc7OztBQUVKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBTGtCO0FBTW5COzs7O2tDQUVjLENBRWQ7O0FBRUQ7Ozs7cUNBQ2tCLENBRWpCOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNGO0FBQUMsZUFBRDtBQUFBLFlBQU8sYUFBUCxFQUFlLGNBQWYsRUFBd0IsZUFBeEIsRUFBa0MsV0FBbEM7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFERixXQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLGFBREY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsYUFQRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBSSxTQUFRLEdBQVo7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFiRjtBQVRBO0FBREUsT0FERjtBQWlDRDs7OztFQXJEZUMsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAuanNcbi8vIHdpbGwgaG9sZCBzdGF0ZSAtIHRoZSBzZWFyY2ggcmVzdWx0cyBhbmQgaWYgdGhlIGxpc3Qgc2hvdWxkIGJlIGRpc3BsYXllZFxuLy9pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmxldCB7IEdyaWQsIFJvdywgQ29sLCBUaHVtYm5haWwsIEJ1dHRvbiwgVGFibGUgfSA9IFJlYWN0Qm9vdHN0cmFwOy8vXCJyZWFjdCdzIHJlcXVpcmUgc3RhdGVtZW50LiBsb29rcyB0byBmaW5kIGEgbWF0Y2ggaW4gUmVhY3RCb290c3RyYXBcIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrICgpIHtcblxuICB9XG5cbiAgLy8gdGhpcyB3aWxsIG1ha2UgYSBwb3N0IHJlcXVlc3QgdG8gdGhlIEFQSSB0byBzYXZlIGEgbWVhbCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcGhvdG9cbiAgc2F2ZVRvRGF0YWJhc2UgKCkge1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGNvbmRlbnNlZCBob3Zlcj5cbiAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxuICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cbiAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4xPC90ZD5cbiAgICAgICAgPHRkPk1hcms8L3RkPlxuICAgICAgICA8dGQ+T3R0bzwvdGQ+XG4gICAgICAgIDx0ZD5AbWRvPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgPHRkPkphY29iPC90ZD5cbiAgICAgICAgPHRkPlRob3JudG9uPC90ZD5cbiAgICAgICAgPHRkPkBmYXQ8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjM8L3RkPlxuICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5MYXJyeSB0aGUgQmlyZDwvdGQ+XG4gICAgICAgIDx0ZD5AdHdpdHRlcjwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4gIDwvZGl2PlxuICApO1xuICB9XG59Il19