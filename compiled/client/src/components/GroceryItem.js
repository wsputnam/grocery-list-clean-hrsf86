'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroceryItem = function GroceryItem(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.grocery.description,
    props.grocery.quantity
  );
};

exports.default = GroceryItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Hcm9jZXJ5SXRlbS5qc3giXSwibmFtZXMiOlsiR3JvY2VyeUl0ZW0iLCJwcm9wcyIsImdyb2NlcnkiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNsQjtBQUFBO0FBQUE7QUFDQ0EsVUFBTUMsT0FBTixDQUFjQyxXQURmO0FBRUNGLFVBQU1DLE9BQU4sQ0FBY0U7QUFGZixHQURrQjtBQUFBLENBQXBCOztrQkFPZUosVyIsImZpbGUiOiJHcm9jZXJ5SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdyb2NlcnlJdGVtID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gIHtwcm9wcy5ncm9jZXJ5LmRlc2NyaXB0aW9ufVxuICB7cHJvcHMuZ3JvY2VyeS5xdWFudGl0eX1cbjwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJ5SXRlbTsiXX0=