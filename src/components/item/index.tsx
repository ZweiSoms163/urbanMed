// import { selectUserList } from '../../redux/slices/UserSlice';
// import './style.css';
// import { useSelector } from 'react-redux';

// export default function Item() {
//   const userList = useSelector(selectUserList);

//   console.log('Current user list:', userList);

//   return (
//     <>
//       {userList.map((user, index) => (
//         <tr key={index} className="item">
//           <td>{index + 1}</td>
//           <td>{user.name.last}</td>
//           <td>{user.name.first}</td>
//           <td>{user.gender}</td>
//           <td>{user.email}</td>
//           <td>
//             {user.isNew ? (
//               <button className="item-btn">Редактировать</button>
//             ) : (
//               <button className="item-btn-dis" disabled>
//                 Редактировать
//               </button>
//             )}
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// }

import { selectUserList } from '../../redux/slices/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { openEditModal, closeEditModal } from '../../redux/slices/AddPersonSlice';
import './style.css';
import { User } from '../../redux/types';

export default function Item() {
  const userList = useSelector(selectUserList);
  const dispatch = useDispatch();

  const handleEditClick = (userList: User) => {
    dispatch(openEditModal(userList)); // Отправляем действие на открытие модального окна редактирования
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
              <button className="item-btn" onClick={() => handleEditClick(user)}>
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
