var React = require('react');
var ReactDOM = require('react-dom');

var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} alt={this.props.alt}/>
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});


Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon',
    alt: 'image of a person'
};


Person.propTypes ={name : React.PropTypes.string,
					imageUrl: React.PropTypes.string,
					alt: React.PropTypes.string,
					job: React.PropTypes.string
};

module.exports = Person;