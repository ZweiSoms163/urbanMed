import React, { useState } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Authorization() {
  const cn = bem('authorization');
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;

    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setInputValue(inputValue);
      setIsError(false);
      setIsValidInput(true);
    } else {
      setInputValue(inputValue);
      setIsError(true);
      setIsValidInput(false);
    }
  };

  const handleLogin = () => {
    if (inputValue.trim() !== '') {
      localStorage.setItem('seed', inputValue.trim());
      navigate('/main');
    } else {
      setIsError(true);
    }
  };

  return (
    <div className={cn()}>
      <div className={cn('box')}>
        <h1 className={cn('title')}>Добро пожаловать</h1>
        <p className={cn('placeholder')}>Seed</p>
        <input
          type="text"
          className={cn('input')}
          value={inputValue}
          onChange={handleInputChange}
        />
        {isError && <p className={cn('error')}>*Поле заполнено не корректно</p>}
        <div className={isError ? cn('strip-error') : cn('strip')}></div>
        <button className={cn('button')} onClick={handleLogin} disabled={!isValidInput}>
          Войти
        </button>
      </div>
    </div>
  );
}
