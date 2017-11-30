const React         = require('react');
const { connect }   = require('react-redux');
const descriptions  = require('../../parser/src/descriptions');
const Example       = require('../components/Example');

// NOTE: Consider encapsulating into larger component
// since we will always need at least "Info" header.
// TODO: Move example to own component.
class InfoPane extends React.Component {
  render() {
    if (descriptions.has(this.props.displayed)) {
      const desc  = descriptions.get(this.props.displayed);
      const title = (desc.hasOwnProperty('name'))
                  ? desc.name
                  : this.props.displayed;
      const example = (desc.hasOwnProperty('example'))
                    ? <Example program={desc.example.in}
                               result={desc.example.expect} />
                    : "";
      return (
        <div id="information" className="box">
          <h2>Info</h2>
          <h3 id="function-name">{title}</h3>
          <p>{desc.text}</p>
          {example}
        </div>
      );
    }
    else {
      return (
        <div id="information" className="box">
          <h2>Info</h2>
          <h3 id="function-name">{this.props.displayed}</h3>
          <p><em>No description added.</em></p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  displayed: state.displayed
});

const Info = connect(mapStateToProps, undefined)(InfoPane);

module.exports = Info;
