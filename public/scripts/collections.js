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
						<input className="mdl-textfield__input" type="text" id="description" defaultValue="Here are the subjects" />
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
        
        <div className="mdl-layout mdl-js-layout">
	<main className="mdl-layout__content">
		<div className="mdl-card mdl-shadow--6dp">
			<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
				<h2 className="mdl-card__title-text">{this.props.name}</h2>
			</div>
	  	<div className="mdl-card__supporting-text">
				<form action="#">
					<div className="mdl-textfield mdl-js-textfield">
          <b>Slug:</b>
						<input className="mdl-textfield__input" type="text" id="slug" defaultValue={this.props.slug} />
						<label className="mdl-textfield__label" for="slug"></label>
					</div>
					<div className="mdl-textfield mdl-js-textfield">
          <b>Description:</b>
						<input className="mdl-textfield__input" type="text" id="description" defaultValue={this.props.description} />
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
  }
});



ReactDOM.render(
  <CollectionBox />,
  document.getElementById('content')
);