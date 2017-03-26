var React = require('react');
var ReactDOM = require('react-dom');

var Person = function(props) {
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={props.imageUrl} alt={props.alt} />
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
};



Person.propTypes ={name : React.PropTypes.string.isRequired,
					imageUrl: React.PropTypes.string,
					alt: React.PropTypes.string,
					job: React.PropTypes.string.required
				 }

module.exports = Person;