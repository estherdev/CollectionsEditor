var CollectionBox = React.createClass({
  render: function() {
    return (
      <div>
       <div>
      <div className="mdl-layout mdl-js-layout">
	    <main className="mdl-layout__content">
		  <div className="mdl-card mdl-shadow--6dp">
			<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
				<h2 className="mdl-card__title-text">Subject Collection</h2>
			</div>
	  	<div className="mdl-card__supporting-text">
			<form action="#">
        <div className="mdl-textfield mdl-js-textfield">
          <b>Slug:</b>
          <input className="mdl-textfield__input" type="text" id="slug" defaultValue="subject-collection" />
          <label className="mdl-textfield__label" for="slug"></label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
            <b>Description:</b>
            <input className="mdl-textfield__input" type="text" id="description" defaultValue="This is a collection of subjects" />
            <label className="mdl-textfield__label" for="description"></label>
        </div>          
			</form>
			</div>
			<div className="mdl-card__actions mdl-card--border">
				<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Edit</button>
			</div>
		</div>
	</main>
</div>
              <h3>The Collection Groups:</h3>
        <CollectionGroupList data={this.props.data} />
      </div>
      </div>
    );
  }
});

var CollectionGroupList = React.createClass({
  render: function() {
    var collectionGroupNodes = this.props.data.map(function(collectionGroup) {
      return (
       <div>
      <div className="mdl-layout mdl-js-layout">
	    <main className="mdl-layout__content">
		  <div className="mdl-card mdl-shadow--6dp">
			<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
				<h2 className="mdl-card__title-text">{collectionGroup.name}</h2>
			</div>
	  	<div className="mdl-card__supporting-text">
			<form action="#">
        <div className="mdl-textfield mdl-js-textfield">
          <b>Slug:</b>
          <input className="mdl-textfield__input" type="text" id="slug" defaultValue={collectionGroup.slug} />
          <label className="mdl-textfield__label" for="slug"></label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
            <b>Description:</b>
            <input className="mdl-textfield__input" type="text" id="description" defaultValue={collectionGroup.description} />
            <label className="mdl-textfield__label" for="description"></label>
        </div>          
			</form>
			</div>
			<div className="mdl-card__actions mdl-card--border">
				<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Edit</button>
			</div>
		</div>
	</main>
</div>


       </div>

    );
          })
    return (
      <div className="collectionGroupList">
        {collectionGroupNodes}
       </div> 
      );
 
}
});

var CollectionGroup = React.createClass({
  render: function() {
    return (
      <div>
      <div className="collectionGroup">{this.props.name}</div>
      <div className="slug">{this.props.slug}</div>
      <div className="description">{this.props.description}</div>
      </div>
    );  
  }
});

var data = [
      {
        id: 1,
        name: "First Collection",
        slug: "Petra Hunt",
        description: "Hey there!",
    },
        {
        id: 2,
        name: "Second Collection",
        slug: "Peter Hunt",
        description: "Hello!",
    },
    {
        id: 3,
        name: "Third Collection",
        slug: "Padre Hunt",
        description: "Hi!",

    }
];

ReactDOM.render(
  <CollectionBox data={data} />,
  document.getElementById('content')
);