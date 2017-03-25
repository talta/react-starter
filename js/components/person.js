var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Zoolander';
    var imageUrl = 'http://mcgrelio.com/gallery/var/albums/vacanze/capodanno2004/capodanno2004_bluesteel/derek.jpg?m=1286923065';
    var alt = `${name} picture`;
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} alt={alt} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

module.exports = Person;