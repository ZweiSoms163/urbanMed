// import Del from '../../assets/Vector2.png';
// import Close from '../../assets/Vector.png';
// import { cn as bem } from '@bem-react/classname';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
// import './style.css';
// import {
//   addEditUserToUerList,
//   closeEditModal,
//   updateEditormData,
// } from '../../redux/slices/AddPersonSlice';
// import { User } from '../../redux/types';

// export default function EditPerson() {
//   const [isClosing, setIsClosing] = useState(false);
//   const [gender, setGender] = useState('male');

//   const [isErrorFirstName, setIsErrorFirstName] = useState(false);
//   const [isErrorLastName, setIsErrorLastName] = useState(false);
//   const [isErrorEmail, setIsErrorEmail] = useState(false);
//   const [Error, setIsError] = useState(false);

//   const dispatch = useDispatch();

//   const isOpenEdit = useSelector((state: RootState) => state.AddPersonSlice.isEditModalOpen);

//   const formData = useSelector((state: RootState) => state.AddPersonSlice.formData);

//   const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setGender(e.target.value);
//   };

//   const handleSaveEditUser = () => {
//     const newEditUser: User = {
//       gender,
//       name: {
//         first: formData.firstName,
//         last: formData.lastName,
//       },
//       email: formData.email,
//       isNew: true,
//       id: '',
//     };
//     dispatch(addEditUserToUerList(newEditUser));
//     handleCloseModal();
//   };

//   const handleCloseModal = () => {
//     setIsClosing(true);
//     const timeout = setTimeout(() => {
//       dispatch(closeEditModal());
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
//     const { value } = e.target;
//     if (fieldName === 'email') {
//       if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
//         setIsErrorEmail(true);
//       } else {
//         setIsErrorEmail(false);
//       }
//     } else if (fieldName === 'firstName') {
//       if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
//         setIsErrorFirstName(true);
//       } else {
//         setIsErrorFirstName(false);
//       }
//     } else if (fieldName === 'lastName') {
//       if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
//         setIsErrorLastName(true);
//       } else {
//         setIsErrorLastName(false);
//       }
//     }
//     dispatch(updateEditormData({ [fieldName]: value }));
//   };
//   useEffect(() => {
//     if (isErrorEmail || isErrorFirstName || isErrorLastName) {
//       setIsError(true);
//     } else {
//       setIsError(false);
//     }
//   }, [isErrorEmail, isErrorFirstName, isErrorLastName]);

//   const cn = bem('EditPerson');
//   return (
//     <>
//       {isOpenEdit && (
//         <div className={`modal-overlay ${isClosing ? 'light' : 'dark'}`}>
//           <div className={`modal-content ${isClosing ? 'closed' : ''} ${cn()}`}>
//             <div className={cn('head')}>
//               <h2 className={cn('title')}>Редактировать пользователь</h2>
//               <div className={cn('close')} onClick={handleCloseModal}>
//                 <img src={Close} alt="close" />
//               </div>
//             </div>
//             <div className={cn('btn-group')}>
//               <label className={cn('toggle-switch__option')}>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   className={cn('toggle-switch__radio')}
//                   checked={gender === 'male'}
//                   onChange={handleGenderChange}
//                 />
//                 <span className={cn('toggle-switch__label')}>Мужчина</span>
//               </label>
//               <label className={cn('toggle-switch__option')}>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   className={cn('toggle-switch__radio')}
//                   checked={gender === 'female'}
//                   onChange={handleGenderChange}
//                 />
//                 <span className={cn('toggle-switch__label')}>Женщина</span>
//               </label>
//             </div>

//             <div className={cn('input-group')}>
//               <p className={cn('placeholder')}>Фамилия*</p>
//               <input
//                 className={`${cn('input')} ${isErrorLastName ? 'error' : ''}`}
//                 type="text"
//                 value={formData.lastName}
//                 onChange={(e) => handleInputChange(e, 'lastName')}
//               />
//               <p className={cn('placeholder')}>Имя*</p>
//               <input
//                 className={`${cn('input')} ${isErrorFirstName ? 'error' : ''}`}
//                 type="text"
//                 value={formData.firstName}
//                 onChange={(e) => handleInputChange(e, 'firstName')}
//               />
//               <p className={cn('placeholder')}>Email*</p>
//               <input
//                 className={`${cn('input')} ${isErrorEmail ? 'error' : ''}`}
//                 type="text"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange(e, 'email')}
//               />
//               {Error && <p className={cn('errorMes')}>*Некоторые поля заполнены не корректно</p>}
//             </div>

//             <div className={cn('control-btn')}>
//               <button className={cn('deleteBtn')}>
//                 <img src={Del} alt="delete" />
//               </button>
//               <button className={cn('saveBtn')} onClick={handleSaveEditUser}>
//                 Сохранить
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// --------------------------------------------------------------------------------
// import { v4 as uuidv4 } from 'uuid';
// import Del from '../../assets/Vector2.png';
// import Close from '../../assets/Vector.png';
// import { cn as bem } from '@bem-react/classname';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
// import './style.css';
// import {
//   addEditUserToUerList,
//   closeEditModal,
//   deleteEditUser,
// } from '../../redux/slices/AddPersonSlice';
// import { User } from '../../redux/types';

// export default function EditPerson() {
//   const [isClosing, setIsClosing] = useState(false);
//   const [gender, setGender] = useState('male');

//   const [isErrorFirstName, setIsErrorFirstName] = useState(false);
//   const [isErrorLastName, setIsErrorLastName] = useState(false);
//   const [isErrorEmail, setIsErrorEmail] = useState(false);
//   const [Error, setIsError] = useState(false);
//   const [formEditData, setFormData] = useState({
//     lastName: '',
//     firstName: '',
//     email: '',
//     gender: 'male',
//   });

//   const [userIdToDelete, setUserIdToDelete] = useState<string>('');

//   const dispatch = useDispatch();

//   const isOpenEdit = useSelector((state: RootState) => state.AddPersonSlice.isEditModalOpen);
//   const editingUser = useSelector((state: RootState) => state.AddPersonSlice.editingUser);
//   console.log(editingUser);

//   const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setGender(e.target.value);
//   };

//   useEffect(() => {
//     if (editingUser && typeof editingUser === 'object') {
//       setFormData({
//         lastName: editingUser.name.last || '',
//         firstName: editingUser.name.first || '',
//         email: editingUser.email || '',
//         gender: editingUser.gender || 'male',
//       });

//       setGender(editingUser.gender || 'male');
//     }
//   }, [editingUser]);

//   const handleSaveEditUser = () => {
//     const newEditUser: User = {
//       gender,
//       name: {
//         first: formEditData.firstName,
//         last: formEditData.lastName,
//       },
//       email: formEditData.email,
//       isNew: true,
//       id: uuidv4(),
//     };
//     dispatch(addEditUserToUerList(newEditUser));
//     handleCloseModal();
//   };

//   const handleCloseModal = () => {
//     setIsClosing(true);
//     const timeout = setTimeout(() => {
//       dispatch(closeEditModal());
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
//     const { value } = e.target;
//     if (fieldName === 'email') {
//       if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
//         setIsErrorEmail(true);
//       } else {
//         setIsErrorEmail(false);
//       }
//     } else if (fieldName === 'firstName') {
//       if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
//         setIsErrorFirstName(true);
//       } else {
//         setIsErrorFirstName(false);
//       }
//     } else if (fieldName === 'lastName') {
//       if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
//         setIsErrorLastName(true);
//       } else {
//         setIsErrorLastName(false);
//       }
//     }
//     setFormData((prevState) => ({ ...prevState, [fieldName]: value }));
//   };

//   useEffect(() => {
//     if (isErrorEmail || isErrorFirstName || isErrorLastName) {
//       setIsError(true);
//     } else {
//       setIsError(false);
//     }
//   }, [isErrorEmail, isErrorFirstName, isErrorLastName]);

//   const cn = bem('EditPerson');

//   const handleDeleteUser = (userId: string) => {
//     setUserIdToDelete(userId);
//     dispatch(deleteEditUser(userId));
//     handleCloseModal();
//   };
//   const handleDeleteUserWrapper = () => {
//     handleDeleteUser(userIdToDelete);
//   };

//   return (
//     <>
//       {isOpenEdit && (
//         <div className={`modal-overlay ${isClosing ? 'light' : 'dark'}`}>
//           <div className={`modal-content ${isClosing ? 'closed' : ''} ${cn()}`}>
//             <div className={cn('head')}>
//               <h2 className={cn('title')}>Редактировать пользователь</h2>
//               <div className={cn('close')} onClick={handleCloseModal}>
//                 <img src={Close} alt="close" />
//               </div>
//             </div>
//             <div className={cn('btn-group')}>
//               <label className={cn('toggle-switch__option')}>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   className={cn('toggle-switch__radio')}
//                   checked={gender === 'male'}
//                   onChange={handleGenderChange}
//                 />
//                 <span className={cn('toggle-switch__label')}>Мужчина</span>
//               </label>
//               <label className={cn('toggle-switch__option')}>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   className={cn('toggle-switch__radio')}
//                   checked={gender === 'female'}
//                   onChange={handleGenderChange}
//                 />
//                 <span className={cn('toggle-switch__label')}>Женщина</span>
//               </label>
//             </div>

//             <div className={cn('input-group')}>
//               <p className={cn('placeholder')}>Фамилия*</p>
//               <input
//                 className={`${cn('input')} ${isErrorLastName ? 'error' : ''}`}
//                 type="text"
//                 value={formEditData.lastName}
//                 onChange={(e) => {
//                   setFormData({ ...formEditData, lastName: e.target.value }); // Обновляем значение имени
//                   handleInputChange(e, 'lastName'); // Вызываем функцию обработчика изменения
//                 }}
//               />
//               <p className={cn('placeholder')}>Имя*</p>
//               <input
//                 className={`${cn('input')} ${isErrorFirstName ? 'error' : ''}`}
//                 type="text"
//                 value={formEditData.firstName}
//                 onChange={(e) => {
//                   setFormData({ ...formEditData, firstName: e.target.value }); // Обновляем значение имени
//                   handleInputChange(e, 'firstName'); // Вызываем функцию обработчика изменения
//                 }}
//               />
//               <p className={cn('placeholder')}>Email*</p>
//               <input
//                 className={`${cn('input')} ${isErrorEmail ? 'error' : ''}`}
//                 type="text"
//                 value={formEditData.email}
//                 onChange={(e) => {
//                   setFormData({ ...formEditData, email: e.target.value }); // Обновляем значение имени
//                   handleInputChange(e, 'email'); // Вызываем функцию обработчика изменения
//                 }}
//               />
//               {Error && <p className={cn('errorMes')}>*Некоторые поля заполнены не корректно</p>}
//             </div>

//             <div className={cn('control-btn')}>
//               <button className={cn('deleteBtn')} onClick={handleDeleteUserWrapper}>
//                 <img src={Del} alt="delete" />
//               </button>
//               <button className={cn('saveBtn')} onClick={handleSaveEditUser}>
//                 Сохранить
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import Del from '../../assets/Vector2.png';
import Close from '../../assets/Vector.png';
import { cn as bem } from '@bem-react/classname';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import {
  addEditUserToUerList,
  closeEditModal,
  deleteEditUser,
} from '../../redux/slices/AddPersonSlice';
import { User } from '../../redux/types';

export default function EditPerson() {
  const [isClosing, setIsClosing] = useState(false);
  const [gender, setGender] = useState('male');

  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [Error, setIsError] = useState(false);
  const [formEditData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    gender: 'male',
  });

  const [userIdToDelete, setUserIdToDelete] = useState<string>('');

  const dispatch = useDispatch();

  const isOpenEdit = useSelector((state: RootState) => state.AddPersonSlice.isEditModalOpen);
  const editingUser = useSelector((state: RootState) => state.AddPersonSlice.editingUser);
  const userId = useSelector((state: RootState) => state.users.userId);

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    if (editingUser && typeof editingUser === 'object') {
      setFormData({
        lastName: editingUser.name.last || '',
        firstName: editingUser.name.first || '',
        email: editingUser.email || '',
        gender: editingUser.gender || 'male',
      });

      setGender(editingUser.gender || 'male');
    }
  }, [editingUser]);

  const handleSaveEditUser = () => {
    const newUser: User = {
      gender,
      name: {
        first: formEditData.firstName,
        last: formEditData.lastName,
      },
      email: formEditData.email,
      isNew: true,
      id: userId,
    };
    dispatch(addEditUserToUerList(newUser));
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    const timeout = setTimeout(() => {
      dispatch(closeEditModal());
      setIsClosing(false);
    }, 500);
    return () => clearTimeout(timeout);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { value } = e.target;
    if (fieldName === 'email') {
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
        setIsErrorEmail(true);
      } else {
        setIsErrorEmail(false);
      }
    } else if (fieldName === 'firstName') {
      if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
        setIsErrorFirstName(true);
      } else {
        setIsErrorFirstName(false);
      }
    } else if (fieldName === 'lastName') {
      if (!/^[а-яА-ЯЁё-]{0,25}$/.test(value)) {
        setIsErrorLastName(true);
      } else {
        setIsErrorLastName(false);
      }
    }
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  useEffect(() => {
    if (isErrorEmail || isErrorFirstName || isErrorLastName) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [isErrorEmail, isErrorFirstName, isErrorLastName]);

  const cn = bem('EditPerson');

  const handleDeleteUser = (userId: string) => {
    setUserIdToDelete(userId);
    console.log('userId ' + userId);

    dispatch(deleteEditUser(userId));
    handleCloseModal();
  };
  const handleDeleteUserWrapper = () => {
    handleDeleteUser(userIdToDelete);
  };

  return (
    <>
      {isOpenEdit && (
        <div className={`modal-overlay ${isClosing ? 'light' : 'dark'}`}>
          <div className={`modal-content ${isClosing ? 'closed' : ''} ${cn()}`}>
            <div className={cn('head')}>
              <h2 className={cn('title')}>Редактировать пользователь</h2>
              <div className={cn('close')} onClick={handleCloseModal}>
                <img src={Close} alt="close" />
              </div>
            </div>
            <div className={cn('btn-group')}>
              <label className={cn('toggle-switch__option')}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className={cn('toggle-switch__radio')}
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                <span className={cn('toggle-switch__label')}>Мужчина</span>
              </label>
              <label className={cn('toggle-switch__option')}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className={cn('toggle-switch__radio')}
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                <span className={cn('toggle-switch__label')}>Женщина</span>
              </label>
            </div>

            <div className={cn('input-group')}>
              <p className={cn('placeholder')}>Фамилия*</p>
              <input
                className={`${cn('input')} ${isErrorLastName ? 'error' : ''}`}
                type="text"
                value={formEditData.lastName}
                onChange={(e) => {
                  setFormData({ ...formEditData, lastName: e.target.value }); // Обновляем значение имени
                  handleInputChange(e, 'lastName'); // Вызываем функцию обработчика изменения
                }}
              />
              <p className={cn('placeholder')}>Имя*</p>
              <input
                className={`${cn('input')} ${isErrorFirstName ? 'error' : ''}`}
                type="text"
                value={formEditData.firstName}
                onChange={(e) => {
                  setFormData({ ...formEditData, firstName: e.target.value }); // Обновляем значение имени
                  handleInputChange(e, 'firstName'); // Вызываем функцию обработчика изменения
                }}
              />
              <p className={cn('placeholder')}>Email*</p>
              <input
                className={`${cn('input')} ${isErrorEmail ? 'error' : ''}`}
                type="text"
                value={formEditData.email}
                onChange={(e) => {
                  setFormData({ ...formEditData, email: e.target.value }); // Обновляем значение имени
                  handleInputChange(e, 'email'); // Вызываем функцию обработчика изменения
                }}
              />
              {Error && <p className={cn('errorMes')}>*Некоторые поля заполнены не корректно</p>}
            </div>

            <div className={cn('control-btn')}>
              <button className={cn('deleteBtn')} onClick={handleDeleteUserWrapper}>
                <img src={Del} alt="delete" />
              </button>
              <button className={cn('saveBtn')} onClick={handleSaveEditUser}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
