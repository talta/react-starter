var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

// //////Rather than just being pure functions, stateful components are classes which contain a render method. 
// var PersonList = function() {
//     var people = [];
//     for (var i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// };




var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};


module.exports = PersonList;