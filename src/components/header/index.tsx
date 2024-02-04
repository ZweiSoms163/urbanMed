import React from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/AddPersonSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const cn = bem('header');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddUserClick = () => {
    dispatch(openModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('seed');
    navigate('/');
  };
  return (
    <div className={cn()}>
      <button className={cn('add')} onClick={handleAddUserClick}>
        Добавить пользователя
      </button>
      <button className={cn('exit')} onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
