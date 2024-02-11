// import React, { useState } from 'react';
// import Close from '../../assets/Vector.png';
// import { cn as bem } from '@bem-react/classname';
// import { useDispatch } from 'react-redux';

// import { closeModal } from '../../redux/slices/AddPersonSlice';
// import Del from '../../assets/Vector2.png';
// import './style.css';

// export default function EditPerson() {
//   const [isClosing, setIsClosing] = useState(false);

//   const dispatch = useDispatch();
//   const handleCloseModal = () => {
//     setIsClosing(true);
//     const timeout = setTimeout(() => {
//       dispatch(closeModal());
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   };
//   let isOpens = false;
//   const cn = bem('EditPerson');
//   return (
//     <>
//       {isOpens && (
//         <div className={`modal-overlay ${isClosing ? 'light' : 'dark'}`}>
//           <div className={`modal-content ${isClosing ? 'closed' : ''} ${cn()}`}>
//             <div className={cn('head')}>
//               <h2 className={cn('title')}>Новый пользователь</h2>
//               <div className={cn('close')} onClick={handleCloseModal}>
//                 <img src={Close} alt="close" />
//               </div>
//             </div>
//             <div className={cn('btn-group')}>
//               <label className={cn('toggle-switch__option')}>
//                 <input type="radio" name="view" className={cn('toggle-switch__radio')} checked />
//                 <span className={cn('toggle-switch__label')}>Мужчина</span>
//               </label>
//               <label className={cn('toggle-switch__option')}>
//                 <input type="radio" name="view" className={cn('toggle-switch__radio')} checked />
//                 <span className={cn('toggle-switch__label')}>Женщина</span>
//               </label>
//             </div>
//             <div className={cn('input-group')}>
//               <p className={cn('placeholder')}>Фамилия*</p>
//               <input type="text" />
//               <p className={cn('placeholder')}>Имя*</p>
//               <input type="text" />
//               <p className={cn('placeholder')}>Email*</p>
//               <input type="text" />
//             </div>
//             <div className={cn('control-btn')}>
//               <button className={cn('deleteBtn')}>
//                 <img src={Del} alt="delete" />
//               </button>
//               <button className={cn('saveBtn')}>Сохранить</button>
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
import { closeEditModal } from '../../redux/slices/AddPersonSlice';

export default function EditPerson() {
  const [isClosing, setIsClosing] = useState(false);
  const [gender, setGender] = useState('male');

  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [Error, setIsError] = useState(false);

  const dispatch = useDispatch();

  const isOpenEdit = useSelector((state: RootState) => state.AddPersonSlice.isEditModalOpen);

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
    // dispatch(updateFormData({ [fieldName]: value })); добавить мой диспач на editPeson
  };
  useEffect(() => {
    if (isErrorEmail || isErrorFirstName || isErrorLastName) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [isErrorEmail, isErrorFirstName, isErrorLastName]);
  const cn = bem('EditPerson');
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
                  name="view"
                  className={cn('toggle-switch__radio')}
                  checked={gender === 'male'}
                />
                <span className={cn('toggle-switch__label')}>Мужчина</span>
              </label>
              <label className={cn('toggle-switch__option')}>
                <input
                  type="radio"
                  name="view"
                  className={cn('toggle-switch__radio')}
                  checked={gender === 'female'}
                />
                <span className={cn('toggle-switch__label')}>Женщина</span>
              </label>
            </div>

            <div className={cn('input-group')}>
              <p className={cn('placeholder')}>Фамилия*</p>
              <input
                className={`${cn('input')} ${isErrorLastName ? 'error' : ''}`}
                type="text"
                // value={formData.lastName} добавить значения на edit, для изменения
                onChange={(e) => handleInputChange(e, 'lastName')}
              />
              <p className={cn('placeholder')}>Имя*</p>
              <input
                className={`${cn('input')} ${isErrorFirstName ? 'error' : ''}`}
                type="text"
                // value={formData.firstName} добавить значения на edit, для изменения
                onChange={(e) => handleInputChange(e, 'firstName')}
              />
              <p className={cn('placeholder')}>Email*</p>
              <input
                className={`${cn('input')} ${isErrorEmail ? 'error' : ''}`}
                type="text"
                // value={formData.email} добавить значения на edit, для изменения
                onChange={(e) => handleInputChange(e, 'email')}
              />
              {Error && <p className={cn('errorMes')}>*Некоторые поля заполнены не корректно</p>}
            </div>

            <div className={cn('control-btn')}>
              <button className={cn('deleteBtn')}>
                <img src={Del} alt="delete" />
              </button>
              <button className={cn('saveBtn')}>Сохранить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
