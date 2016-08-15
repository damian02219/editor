var Editor = React.createClass({
  getInitialState: function(){
    return {
     text_data: this.props.data.description,
     text_id: this.props.data.id,
     owner_id: this.props.data.user_id,
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
    // this.firebaseRef = firebase.database().ref('descriptions').child(this.state.owner_id+"_"+this.state.text_id);
    // this.firebaseRef.on('child_changed', function(data) {
    //   this.setState({
    //     text_data: data.val()
    //   });
    // }.bind(this));

  },
  handleChange: function(e){
    this.setState({text_data: e.target.value});
    var regRef = firebase.database().ref('descriptions').child(this.state.owner_id+"_"+this.state.text_id).set({
      description: this.state.text_data
    });

  },
  handleSave: function(e){
    var data = this.refs.summernote.value;
    $.ajax({
      url: '/data_infos/'+this.state.text_id,
      dataType: 'json',
      type: "PUT",
      data: {description:data},
      cache: false,
      success: function(data) {
        alert("Success")
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleInvite: function(e){
    Modal.open({title: 'Invite'});
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
          {this.state.view.showModal ? <InviteModal handleHideModal={this.handleHideModal} text_id={this.state.text_id}/> : null}
        </div>
      </div>
    );
  }
})
