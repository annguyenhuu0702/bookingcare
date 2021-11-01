import React, { Component, useState, useEffect, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./userManage.scss";
import { getAllUsers } from "./../../services/userService";
import ModalUser from "./ModalUser";

// function UserManage() {
//   const [allUser, setAllUser] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       let response = await getAllUsers("ALL");
//       if (response && response.errCode === 0) {
//         setAllUser(response.users);
//       }
//     }
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     getAllUsers("ALL").then((response) => setAllUser(response.users));
//   }, []);

//   return (
//     <div className="users-container">
//       <div className="title mt-3 mx-1">Manage users</div>
//       <div className="users-table">
//         <table id="customers">
//           <tr>
//             <th>Email</th>
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//           <>
//             {allUser &&
//               allUser.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{item.email}</td>
//                     <td>{item.firstName}</td>
//                     <td>{item.lastName}</td>
//                     <td>{item.address}</td>
//                     <td>
//                       <button className="btn-edit" type="">
//                         <i className="fas fa-pencil-alt"></i>
//                       </button>
//                       <button className="btn-delete" type="">
//                         <i className="fas fa-trash"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//           </>
//         </table>
//       </div>
//     </div>
//   );
// }

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toogleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  render() {
    let arrUsers = this.state.arrUsers;

    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toogleUserModal={this.toogleUserModal}
        />
        <div className="title mt-3 mx-1">Manage users</div>
        <div className="mx-1 my-2">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus"></i>Add new user
          </button>
        </div>
        <div className="users-table">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            <>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit" type="">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-delete" type="">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
