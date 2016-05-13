var CollectionBox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>A Collection</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <CollectionBox />,
  document.getElementById('content')
);