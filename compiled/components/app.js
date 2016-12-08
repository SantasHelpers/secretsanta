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
    Button = _ReactBootstrap.Button;

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
          "h2",
          null,
          "Find-A-Meal"
        ),
        React.createElement(
          Grid,
          null,
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { xs: 6, md: 4 },
              React.createElement(
                Thumbnail,
                { src: "http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg", alt: "242x200" },
                React.createElement(
                  "h3",
                  null,
                  "Thumbnail label"
                ),
                React.createElement(
                  "p",
                  null,
                  "Description"
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    Button,
                    { bsStyle: "primary" },
                    "Button"
                  ),
                  "\xA0",
                  React.createElement(
                    Button,
                    { bsStyle: "default" },
                    "Button"
                  )
                )
              )
            ),
            React.createElement(
              Col,
              { xs: 6, md: 4 },
              React.createElement(
                Thumbnail,
                { src: "http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg", alt: "242x200" },
                React.createElement(
                  "h3",
                  null,
                  "Thumbnail label"
                ),
                React.createElement(
                  "p",
                  null,
                  "Description"
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    Button,
                    { bsStyle: "primary" },
                    "Button"
                  ),
                  "\xA0",
                  React.createElement(
                    Button,
                    { bsStyle: "default" },
                    "Button"
                  )
                )
              )
            ),
            React.createElement(
              Col,
              { xs: 6, md: 4 },
              React.createElement(
                Thumbnail,
                { src: "http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg", alt: "242x200" },
                React.createElement(
                  "h3",
                  null,
                  "Thumbnail label"
                ),
                React.createElement(
                  "p",
                  null,
                  "Description"
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    Button,
                    { bsStyle: "primary" },
                    "Button"
                  ),
                  "\xA0",
                  React.createElement(
                    Button,
                    { bsStyle: "default" },
                    "Button"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiUmVhY3RCb290c3RyYXAiLCJHcmlkIiwiUm93IiwiQ29sIiwiVGh1bWJuYWlsIiwiQnV0dG9uIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO3NCQUM4Q0EsYztJQUF4Q0MsSSxtQkFBQUEsSTtJQUFNQyxHLG1CQUFBQSxHO0lBQUtDLEcsbUJBQUFBLEc7SUFBS0MsUyxtQkFBQUEsUztJQUFXQyxNLG1CQUFBQSxNOztJQUUzQkMsRzs7O0FBRUosZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVsQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFMa0I7QUFNbkI7Ozs7a0NBRWMsQ0FFZDs7QUFFRDs7OztxQ0FDa0IsQ0FFakI7Ozs2QkFFUzs7QUFFUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUMsY0FBRDtBQUFBO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDQTtBQUFDLGlCQUFEO0FBQUEsZ0JBQUssSUFBSSxDQUFULEVBQVksSUFBSSxDQUFoQjtBQUNFO0FBQUMseUJBQUQ7QUFBQSxrQkFBVyxLQUFJLGdHQUFmLEVBQWdILEtBQUksU0FBcEg7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUMsMEJBQUQ7QUFBQSxzQkFBUSxTQUFRLFNBQWhCO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBRUU7QUFBQywwQkFBRDtBQUFBLHNCQUFRLFNBQVEsU0FBaEI7QUFBQTtBQUFBO0FBRkY7QUFIRjtBQURGLGFBREE7QUFXQTtBQUFDLGlCQUFEO0FBQUEsZ0JBQUssSUFBSSxDQUFULEVBQVksSUFBSSxDQUFoQjtBQUNFO0FBQUMseUJBQUQ7QUFBQSxrQkFBVyxLQUFJLGdHQUFmLEVBQWdILEtBQUksU0FBcEg7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUMsMEJBQUQ7QUFBQSxzQkFBUSxTQUFRLFNBQWhCO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBRUU7QUFBQywwQkFBRDtBQUFBLHNCQUFRLFNBQVEsU0FBaEI7QUFBQTtBQUFBO0FBRkY7QUFIRjtBQURGLGFBWEE7QUFxQkE7QUFBQyxpQkFBRDtBQUFBLGdCQUFLLElBQUksQ0FBVCxFQUFZLElBQUksQ0FBaEI7QUFDRTtBQUFDLHlCQUFEO0FBQUEsa0JBQVcsS0FBSSxnR0FBZixFQUFnSCxLQUFJLFNBQXBIO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFDLDBCQUFEO0FBQUEsc0JBQVEsU0FBUSxTQUFoQjtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUVFO0FBQUMsMEJBQUQ7QUFBQSxzQkFBUSxTQUFRLFNBQWhCO0FBQUE7QUFBQTtBQUZGO0FBSEY7QUFERjtBQXJCQTtBQURGO0FBRkYsT0FERjtBQXVDRDs7OztFQTVEZUMsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAuanNcbi8vIHdpbGwgaG9sZCBzdGF0ZSAtIHRoZSBzZWFyY2ggcmVzdWx0cyBhbmQgaWYgdGhlIGxpc3Qgc2hvdWxkIGJlIGRpc3BsYXllZFxuLy9pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmxldCB7IEdyaWQsIFJvdywgQ29sLCBUaHVtYm5haWwsIEJ1dHRvbiwgIH0gPSBSZWFjdEJvb3RzdHJhcDtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayAoKSB7XG4gICAgXG4gIH1cblxuICAvLyB0aGlzIHdpbGwgbWFrZSBhIHBvc3QgcmVxdWVzdCB0byB0aGUgQVBJIHRvIHNhdmUgYSBtZWFsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwaG90b1xuICBzYXZlVG9EYXRhYmFzZSAoKSB7XG4gICAgXG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkZpbmQtQS1NZWFsPC9oMj5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17NH0+XG4gICAgICAgICAgICA8VGh1bWJuYWlsIHNyYz1cImh0dHA6Ly9hY3RpdmVhenVyLndwZW5naW5lLm5ldGRuYS1jZG4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzA5L21hbmRlbGlldS1raXRlc3VyZmluZy5qcGdcIiBhbHQ9XCIyNDJ4MjAwXCI+XG4gICAgICAgICAgICAgIDxoMz5UaHVtYm5haWwgbGFiZWw8L2gzPlxuICAgICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPkJ1dHRvbjwvQnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cImRlZmF1bHRcIj5CdXR0b248L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRodW1ibmFpbCBzcmM9XCJodHRwOi8vYWN0aXZlYXp1ci53cGVuZ2luZS5uZXRkbmEtY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wOS9tYW5kZWxpZXUta2l0ZXN1cmZpbmcuanBnXCIgYWx0PVwiMjQyeDIwMFwiPlxuICAgICAgICAgICAgICA8aDM+VGh1bWJuYWlsIGxhYmVsPC9oMz5cbiAgICAgICAgICAgICAgPHA+RGVzY3JpcHRpb248L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIj5CdXR0b248L0J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJkZWZhdWx0XCI+QnV0dG9uPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvVGh1bWJuYWlsPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxUaHVtYm5haWwgc3JjPVwiaHR0cDovL2FjdGl2ZWF6dXIud3BlbmdpbmUubmV0ZG5hLWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDkvbWFuZGVsaWV1LWtpdGVzdXJmaW5nLmpwZ1wiIGFsdD1cIjI0MngyMDBcIj5cbiAgICAgICAgICAgICAgPGgzPlRodW1ibmFpbCBsYWJlbDwvaDM+XG4gICAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCI+QnV0dG9uPC9CdXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGVmYXVsdFwiPkJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1RodW1ibmFpbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==