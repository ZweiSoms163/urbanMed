import React, { useState } from 'react';
import Close from '../../assets/Vector.png';
import { cn as bem } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeModal } from '../../redux/slices/AddPersonSlice';
import Del from '../../assets/Vector2.png';
import './style.css';

export default function EditPerson() {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setIsClosing(true);
    const timeout = setTimeout(() => {
      dispatch(closeModal());
      setIsClosing(false);
    }, 500);
    return () => clearTimeout(timeout);
  };
  let isOpens = false;
  const cn = bem('AddPerson');
  return (
    <>
      {isOpens && (
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
                <input type="radio" name="view" className={cn('toggle-switch__radio')} checked />
                <span className={cn('toggle-switch__label')}>Мужчина</span>
              </label>
              <label className={cn('toggle-switch__option')}>
                <input type="radio" name="view" className={cn('toggle-switch__radio')} checked />
                <span className={cn('toggle-switch__label')}>Женщина</span>
              </label>
            </div>
            <div className={cn('input-group')}>
              <p className={cn('placeholder')}>Фамилия*</p>
              <input type="text" />
              <p className={cn('placeholder')}>Имя*</p>
              <input type="text" />
              <p className={cn('placeholder')}>Email*</p>
              <input type="text" />
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
