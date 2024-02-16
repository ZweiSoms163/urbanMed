
import { selectUserList } from "../../redux/slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { openEditModal } from "../../redux/slices/AddPersonSlice";
import "./style.css";
import { User } from "../../redux/types";

export default function Item() {
  const userList = useSelector(selectUserList);

  const dispatch = useDispatch();

  const handleEditClick = (userList: User) => {
    dispatch(openEditModal(userList)); 
    console.log("userList " + userList.id);
  };

  return (
    <>
      {userList.map((user, index) => (
        <tr key={index} className="item">
          <td>{index + 1}</td>
          <td>{user.name.last}</td>
          <td>{user.name.first}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>
            {user.isNew ? (
              <button
                className="item-btn"
                onClick={() => handleEditClick(user)}
              >
                Редактировать
              </button>
            ) : (
              <button className="item-btn-dis" disabled>
                Редактировать
              </button>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}
