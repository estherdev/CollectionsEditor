var CollectionBox = React.createClass({
  render: function() {
    return (
      <div>
        <CollectionGroupList />
      </div>
    );
  }
});

var CollectionGroupList = React.createClass({
  render: function() {
      return (
       <div>
        <h1>I am a list of Collection Groups</h1>
        <CollectionGroup />
       </div>
      );
 
}
});

var CollectionGroup = React.createClass({
  render: function() {
    return (
      <div>
        <h2>I am a Collection Group</h2>
      </div>
    );  
  }
});


ReactDOM.render(
  <CollectionBox />,
  document.getElementById('content')
);