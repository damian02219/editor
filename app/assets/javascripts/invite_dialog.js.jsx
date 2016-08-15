var InviteModal = React.createClass({
  getInitialState: function(){
    return {
     text_id: this.props.text_id,
   };
  },
    componentDidMount(){
      var dom = ReactDOM.findDOMNode(this);
      $(dom).modal('show');
      $(dom).on('hidden.bs.modal', this.props.handleHideModal);
    },
    handleInvite: function(){
      email = this.refs.invite_email.value;
      permission = this.refs.invite_permission.value;
      $.ajax({
        url: '/data_infos/'+this.state.text_id+'/invite',
        type: "POST",
        dataType: 'json',
        cache: false,
        data: {invite_data:{email:email, permission:permission}},
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
                  <form>
                    <div className="form-group row">
                      <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" ref="invite_email" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2">Permission</label>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" ref="invite_permission"/> Write
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
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
