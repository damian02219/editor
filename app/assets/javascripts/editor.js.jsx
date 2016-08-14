var Editor = React.createClass({
  getInitialState: function(){
    return {
     text_data: this.props.data,
     view: {showModal: false}
   };
  },
  handleHideModal(){
      this.setState({view: {showModal: false}})
  },
  handleShowModal(){
      this.setState({view: {showModal: true}})
  },
  componentDidMount: function() {
    var dom = ReactDOM.findDOMNode(this.refs.summernote);
    $(dom).summernote();
  },
  handleChange: function(e){
    this.setState({text_data: data.target.value})
  },
  handleSave: function(e){
    var data = this.refs.summernote.value;
    console.log(data);
  },
  handleInvite: function(e){
    Modal.open({title: 'Invite'});
    console.log(data);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <textarea name="body" className="summernote" ref="summernote"
              onChange={this.handleChange}
              value={this.state.text_data}>
          </textarea>
        </div>
        <div className="col-sm-12">
          <div className="col-sm-2">
            <button className="btn btn-primary"
              onClick={this.handleSave}>
              Save
            </button>
          </div>
          <button className="btn btn-default" onClick={this.handleShowModal}>Invite</button>
          {this.state.view.showModal ? <InviteModal handleHideModal={this.handleHideModal}/> : null}
        </div>
      </div>
    );
  }
})
