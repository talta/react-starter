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





var PersonList = function(){
	<div className = "PersonList">
		<Person name = 'Derek Zoolander';
    		imageUrl = 'http://mcgrelio.com/gallery/var/albums/vacanze/capodanno2004/capodanno2004_bluesteel/derek.jpg?m=1286923065';
    		alt = `${name} picture`;
    		job = 'Male model'/>
    	<Person name='Donald Kruth'
    		imageUrl = 'http://www-cs-faculty.stanford.edu/~uno/don.gif'
    		alt='${name} picture'
    		job= 'some guy' />
    </div>
}


module.exports = PersonList;