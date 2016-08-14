var InviteModal = React.createClass({
    componentDidMount(){
      var dom = ReactDOM.findDOMNode(this);
      $(dom).modal('show');
      $(dom).on('hidden.bs.modal', this.props.handleHideModal);
    },
    handleInvite: function(){
      // var dom = ReactDOM.findDOMNode(this);
      // $(dom).modal('hide');
      email = this.refs.invite_email.value;
      $.ajax({
        url: 'invete',
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.props.handleHideModal
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render(){
        return (
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Invite</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Input Invite Email</label>
                    <input type="email" ref="invite_email" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.handleInvite}>Invite</button>
                </div>
              </div>
            </div>
          </div>
        )
    },
    propTypes:{
        handleHideModal: React.PropTypes.func.isRequired
    }
});
