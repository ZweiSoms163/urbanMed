import { selectUserList } from "../../redux/slices/UserSlice";
import "./style.css";
import { useSelector } from "react-redux";

export default function Item() {
  const userList = useSelector(selectUserList);
  console.log("Current user list:", userList);

  return (
    <>
      {userList.length > 0 ? (
        userList.map((user, index) => (
          <tr key={index} className="item">
            <td>{index + 1}</td>
            <td>{user.name.last}</td>
            <td>{user.name.first}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>
              <button className="item-btn">Редактировать</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>Загрузка...</td>
        </tr>
      )}
    </>
  );
}
