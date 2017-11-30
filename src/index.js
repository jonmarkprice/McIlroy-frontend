const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const { createStore } = require('redux');
const { Provider } = require('react-redux');

const Interpretter = require('./components/components');
const reducer = require('./reducers');
const { pushInput, displayFunction } = require('./actions');

const store = createStore(reducer);

// dispatch some actions
store.dispatch(pushInput({
  label : '1',
  data  : 1
}));
store.dispatch(pushInput({
  label : '[1, 2, 3]',
  data  : [1, 2, 3]
}));
store.dispatch(pushInput({
  label : '[true, false]',
  data  : [true, false]
}));
store.dispatch(pushInput({
  label : '"hello"',
  data  : ['h', 'e', 'l', 'l', 'o']
}));
store.dispatch(pushInput({
  label : "'A'",
  data  : 'A'
}));

store.dispatch(displayFunction('Nothing selected.'));

ReactDOM.render(
  <Provider store={store}>
    <Interpretter />
  </Provider>,
  document.getElementById('app')
);
