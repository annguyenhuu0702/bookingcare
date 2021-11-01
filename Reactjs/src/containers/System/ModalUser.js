import React, { Component, useState, useEffect } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

function ModalUser({ isOpen, toogleUserModal, createNewUser }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
  });

  const toogle = () => {
    toogleUserModal();
  };

  const handleOnchangeInput = (e, id) => {
    let copyUser = { ...user };
    copyUser[id] = e.target.value;
    setUser(copyUser);
  };

  const checkValidateInPut = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!user[arrInput[i]]) {
        isValid = false;
        alert("Missing paremeters: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  const handleAddNewUser = () => {
    let isValid = checkValidateInPut();
    if (isValid === true) {
      // call api
      createNewUser(user);
    }
  };

  return (
    <Modal
      className={"modal-user-container"}
      isOpen={isOpen}
      toggle={() => {
        toogle();
      }}
      size="lg"
    >
      <ModalHeader
        toggle={() => {
          toogle();
        }}
      >
        Create a new user
      </ModalHeader>
      <ModalBody>
        <div className="modal-user-body">
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => {
                handleOnchangeInput(e, "email");
              }}
              value={user.email}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                handleOnchangeInput(e, "password");
              }}
              value={user.password}
            />
          </div>
          <div className="input-container">
            <label>First name</label>
            <input
              type="text"
              onChange={(e) => {
                handleOnchangeInput(e, "firstName");
              }}
              value={user.firstName}
            />
          </div>
          <div className="input-container">
            <label>Last name</label>
            <input
              type="text"
              onChange={(e) => {
                handleOnchangeInput(e, "lastName");
              }}
              value={user.lastName}
            />
          </div>
          <div className="input-container max-width-input">
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => {
                handleOnchangeInput(e, "address");
              }}
              value={user.address}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          className="px-3"
          onClick={() => {
            handleAddNewUser();
          }}
        >
          Add new
        </Button>
        <Button
          onClick={() => {
            toogle();
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

// class ModalUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   state = {};

//   componentDidMount() {}

//   toogle = () => {
//     this.props.toogleUserModal();
//   };

//   render() {
//     return (
//       <Modal
//         className={"modal-user-container"}
//         isOpen={this.props.isOpen}
//         toggle={() => {
//           this.toogle();
//         }}
//         size="lg"
//       >
//         <ModalHeader
//           toggle={() => {
//             this.toogle();
//           }}
//         >
//           Create a new user
//         </ModalHeader>
//         <ModalBody>
//           <div className="modal-user-body">
//             <div className="input-container">
//               <label>Email</label>
//               <input type="text" />
//             </div>
//             <div className="input-container">
//               <label>Password</label>
//               <input type="password" />
//             </div>
//             <div className="input-container">
//               <label>First name</label>
//               <input type="text" />
//             </div>
//             <div className="input-container">
//               <label>Last name</label>
//               <input type="text" />
//             </div>
//             <div className="input-container max-width-input">
//               <label>Address</label>
//               <input type="text" />
//             </div>
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             onClick={() => {
//               this.toogle();
//             }}
//             color="primary"
//             className="px-3"
//           >
//             Add new
//           </Button>
//           <Button
//             onClick={() => {
//               this.toogle();
//             }}
//             color="secondary"
//             className="px-3"
//           >
//             Close
//           </Button>
//         </ModalFooter>
//       </Modal>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
