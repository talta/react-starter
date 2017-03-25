var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

//////Rather than just being pure functions, stateful components are classes which contain a render method. 
var PersonList = function() {
    var people = [];
    for (var i=0; i<5; i++) {
        people.push(<Person />);
    }
    return (
        <div className="person-list">
            {people}
        </div>
    );
};



module.exports = PersonList;