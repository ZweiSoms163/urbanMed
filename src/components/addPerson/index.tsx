import React, { useEffect, useState } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

import Close from '../../assets/Vector.png';
import { addUserToUserList, closeModal, updateFormData } from '../../redux/slices/AddPersonSlice';
import { User } from '../../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { v4 as uuidv4 } from 'uuid';
export default function EditPerson() {
  const cn = bem('AddPerson');
  const [isClosing, setIsClosing] = useState(false);
  const [gender, setGender] = useState('male');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [Error, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const isOpen = useSelector((state: RootState) => state.AddPersonSlice.isModalOpen);
  const formData = useSelector((state: RootState) => state.AddPersonSlice.formData);

  const handleCloseModal = () => {
    setIsClosing(true);
    const timeout = setTimeout(() => {
      dispatch(closeModal());
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
    dispatch(updateFormData({ [fieldName]: value }));
  };
  useEffect(() => {
    if (isErrorEmail || isErrorFirstName || isErrorLastName) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [isErrorEmail, isErrorFirstName, isErrorLastName]);

  const handleSaveUser = () => {
    const newUserId = uuidv4(); // Создание нового id
    const newUser: User = {
      id: newUserId,
      gender,
      name: {
        first: formData.firstName,
        last: formData.lastName,
      },
      email: formData.email,
      isNew: true,
    };

    dispatch(addUserToUserList(newUser));
    handleCloseModal();
  };

  return (
    <>
      {isOpen && (
        <div className={`modal-overlay ${isClosing ? 'light' : 'dark'}`}>
          <div className={`modal-content ${isClosing ? 'closed' : ''} ${cn()}`}>
            <div className={cn('head')}>
              <h2 className={cn('title')}>Новый пользователь</h2>
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
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, 'lastName')}
              />
              <p className={cn('placeholder')}>Имя*</p>
              <input
                className={`${cn('input')} ${isErrorFirstName ? 'error' : ''}`}
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, 'firstName')}
              />
              <p className={cn('placeholder')}>Email*</p>
              <input
                className={`${cn('input')} ${isErrorEmail ? 'error' : ''}`}
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
              {Error && <p className={cn('errorMes')}>*Некоторые поля заполнены не корректно</p>}
            </div>

            <div>
              <button
                className={cn('saveBtn')}
                disabled={!formData.firstName || !formData.lastName || !formData.email || Error}
                onClick={handleSaveUser}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
