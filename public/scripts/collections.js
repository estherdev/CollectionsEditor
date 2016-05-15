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
        <CollectionGroup name="Maths" slug="maths-topics" description="About Maths"></CollectionGroup>
        <CollectionGroup name="Science" slug="science-topics" description="About Maths"></CollectionGroup>
       </div>
      );
 
}
});

var CollectionGroup = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Collection Group</h2>
        <div className="collectionGroup">{this.props.name}</div>
        <div className="slug">{this.props.slug}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );  
  }
});


ReactDOM.render(
  <CollectionBox />,
  document.getElementById('content')
);