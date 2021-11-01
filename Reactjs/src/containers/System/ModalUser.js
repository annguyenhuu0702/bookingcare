import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {};

  componentDidMount() {}

  toogle = () => {
    this.props.toogleUserModal();
  };

  render() {
    return (
      <Modal
        className={"modal-user-container"}
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toogle();
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toogle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="input-container">
              <label>First name</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text" />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input type="text" name="" value="" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              this.toogle();
            }}
            color="primary"
            className="px-3"
          >
            Saves changes
          </Button>
          <Button
            onClick={() => {
              this.toogle();
            }}
            color="secondary"
            className="px-3"
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
