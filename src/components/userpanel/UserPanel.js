import React, { useContext, useState } from "react";
import "./UserPanel.scss";

import { AppContext } from "../../context/AppContext";

const UserPanel = () => {
  const { user, todos, completedTodos, updateUser } = useContext(AppContext);
  const [isChangingForm, setIsChangingForm] = useState(false);
  const [changeType, setChangeType] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [error, setError] = useState("");
  let avatars = [1, 2, 3, 23, 5, 65, 119, 8, 9, 10, 72, 17];

  const handleCloseChangeForm = () => {
    setIsChangingForm(false);
    setChangeType("");
    setEditUsername("");
    setEditPassword("");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setEditAvatar("");
    setError("");
  };

  const handleChangeUsernameForm = () => {
    setIsChangingForm(true);
    setChangeType("username");
  };

  const handleChangePasswordForm = () => {
    setIsChangingForm(true);
    setChangeType("password");
  };

  const handleChangeAvatarForm = () => {
    setIsChangingForm(true);
    setChangeType("avatar");
  };

  const handleChange = () => {
    if (changeType === "password") {
      if (oldPassword === user.password) {
        if (newPassword.length < 5) {
          setError("Password cannot be less than 5 characters");
        }
        if (newPassword === confirmPassword) {
          setEditPassword(newPassword);

          const editedUser = {
            id: user.id,
            username: user.username,
            password: editPassword,
            img: user.img,
          };
          updateUser(editedUser);
        } else {
          setError("Password not match");
        }
      } else {
        setError("Please enter your correct old password");
      }

      setEditPassword("");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else if (changeType === "username") {
      const editedUser = {
        id: user.id,
        username: editUsername,
        password: user.password,
        img: user.img,
      };

      updateUser(editedUser);
      setEditUsername("");
    } else if (changeType === "avatar") {
      const editedUser = {
        id: user.id,
        username: user.username,
        password: user.password,
        img: editAvatar,
      };

      updateUser(editedUser);
      setEditAvatar("");
    }

    console.log(user);
    console.log(error);

    // set to initial
    setIsChangingForm(false);
    setChangeType("");
  };

  return (
    <div className="userpanel">
      <div
        className="userpanel__changingFormContainer"
        style={{ display: `${isChangingForm ? "block" : "none"}` }}
      ></div>
      <div
        className="userpanel__changingForm"
        style={{ display: `${isChangingForm ? "block" : "none"}` }}
      >
        <div className="changingInput">
          {changeType === "username" ? (
            <input
              type="text"
              placeholder="Enter your new username"
              value={editUsername}
              onChange={(e) => setEditUsername(e.target.value)}
            />
          ) : changeType === "password" ? (
            <>
              <input
                type="text"
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          ) : (
            changeType === "avatar" && (
              <div className="avatarChangeContainer">
                <div className="avatarContainer">
                  {avatars.map((avatar) => (
                    <div
                      className="avatarOuter"
                      onClick={() =>
                        setEditAvatar(
                          `https://avatars.dicebear.com/api/human/${avatar}.svg`
                        )
                      }
                    >
                      <img
                        src={`https://avatars.dicebear.com/api/human/${avatar}.svg`}
                        alt={`avatar ${avatar}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="avatarPreview">
                  <img src={editAvatar} alt={`avatar`} />
                </div>
              </div>
            )
          )}
        </div>
        <div className="changingButton">
          <button className="close" onClick={handleCloseChangeForm}>
            Close
          </button>
          <button className="change" onClick={handleChange}>
            Change
          </button>
        </div>
      </div>

      <div className="userpanel__top">
        <div className="imageContainer">
          <img src={user.img} alt="user" />
        </div>
        <p className="username">{user.username}</p>
        <button onClick={handleChangeUsernameForm}>Change Username</button>
        <button onClick={handleChangePasswordForm}>Change Password</button>
        <button onClick={handleChangeAvatarForm}>Change Avatar</button>
      </div>
      <div className="userpanel__bottom">
        <div className="total__todo">Total Todo: {todos.length}</div>
        <div className="completed__todo">
          Completed Todo: {completedTodos.length}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
