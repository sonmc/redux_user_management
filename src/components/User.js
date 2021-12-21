import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DELETE_USER, FETCH_USER } from "../redux/action";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({
      type: FETCH_USER,
    });
  }, []);

  const onDelete = (userId) => {
    dispatch({
      type: DELETE_USER,
      payload: userId,
    });
  };

  return (
    <div>
      <table border="1" style={{ width: "700px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    onDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;
