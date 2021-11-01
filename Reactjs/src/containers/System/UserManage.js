import React, { Component, useState, useEffect, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./userManage.scss";
import {
  getAllUsers,
  createNewUerService,
  deleteUserService,
} from "./../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from "../../utils/emitter";

function UserManage() {
  const [allUser, setAllUser] = useState([]);
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);

  useEffect(() => {
    getAllUserFromReact();
  }, []);

  const getAllUserFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      setAllUser(response.users);
    }
  };

  const handleAddNewUser = () => {
    setIsOpenModalUser(true);
  };

  const toogleUserModal = () => {
    setIsOpenModalUser(!isOpenModalUser);
  };

  const createNewUser = async (data) => {
    try {
      let response = await createNewUerService(data);
      // console.log(response);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await getAllUserFromReact();
        setIsOpenModalUser(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteUser = async (user) => {
    // console.log(user);
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode === 0) {
        await getAllUserFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="users-container">
      <div className="title mt-3 mx-1">Manage users</div>
      <ModalUser
        isOpen={isOpenModalUser}
        toogleUserModal={toogleUserModal}
        createNewUser={createNewUser}
      />
      <div className="mx-1 my-2">
        <button
          className="btn btn-primary px-3"
          onClick={() => handleAddNewUser()}
        >
          <i className="fas fa-plus"></i>Add new user
        </button>
      </div>
      <div className="users-table">
        <table id="customers">
          <tbody>
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            <>
              {allUser &&
                allUser.map((item, index) => {
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
                        <button
                          className="btn-delete"
                          type=""
                          onClick={() => {
                            handleDeleteUser(item);
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// class UserManage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arrUsers: [],
//       isOpenModalUser: false,
//     };
//   }

//   async componentDidMount() {
//     let response = await getAllUsers("ALL");
//     if (response && response.errCode === 0) {
//       this.setState({
//         arrUsers: response.users,
//       });
//     }
//   }

//   handleAddNewUser = () => {
//     this.setState({
//       isOpenModalUser: true,
//     });
//   };

//   toogleUserModal = () => {
//     this.setState({
//       isOpenModalUser: !this.state.isOpenModalUser,
//     });
//   };

//   createNewUser = async (data) => {
//     try {
//       let response = await createNewUerService(data);
//       console.log(response);
//       if (response && response.errCode !== 0) {
//         alert(response.errMessage);
//       } else {
//         await this.getAllUserFromReact();
//         this.setState({
//           isOpenModalUser: false,
//         });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   render() {
//     let arrUsers = this.state.arrUsers;

//     return (
//       <div className="users-container">
//         <ModalUser
//           isOpen={this.state.isOpenModalUser}
//           toogleUserModal={this.toogleUserModal}
//           createNewUser={this.createNewUser}
//         />
//         <div className="title mt-3 mx-1">Manage users</div>
//         <div className="mx-1 my-2">
//           <button
//             className="btn btn-primary px-3"
//             onClick={() => this.handleAddNewUser()}
//           >
//             <i className="fas fa-plus"></i>Add new user
//           </button>
//         </div>
//         <div className="users-table">
//           <table id="customers">
//             <tbody>
//               <tr>
//                 <th>Email</th>
//                 <th>First name</th>
//                 <th>Last name</th>
//                 <th>Address</th>
//                 <th>Actions</th>
//               </tr>
//               <>
//                 {arrUsers &&
//                   arrUsers.map((item, index) => {
//                     return (
//                       <tr key={index}>
//                         <td>{item.email}</td>
//                         <td>{item.firstName}</td>
//                         <td>{item.lastName}</td>
//                         <td>{item.address}</td>
//                         <td>
//                           <button className="btn-edit" type="">
//                             <i className="fas fa-pencil-alt"></i>
//                           </button>
//                           <button className="btn-delete" type="">
//                             <i className="fas fa-trash"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
