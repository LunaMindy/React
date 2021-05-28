import { connect } from "react-redux";
import React from "react";
import { createSetUidAction } from "redux/auth-reducer";

class LoginFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:""
    };
  }

  handleChange = (event) => {
    this.setState({uid: event.target.value});
  };

  login = (event) => {
    this.props.setUid(this.state.uid);
  };

  logout = (event) => {
    this.props.setUid("");
  };

  render() {
    return (
      <div className="card">
      <div className="card-header">
      LoginFormClass
      </div>
      <div className="card-body">
        <div className="form-group row">
        <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={this.state.uid} onChange={this.handleChange}/>
          </div>
        </div>
          {this.props.uid === "" ? (
            <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
          ) : ( 
            <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
          )}
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({ //괄호안에는 리턴값
  uid: state.authReducer.uid
});

const mapDispatchToProps = (dispatch) => {
return {
 setUid: (uid) => dispatch(createSetUidAction(uid))
}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormClass);