import { useEffect } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import Item from '../item';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/slices/UserSlice';

export default function Main() {
  const cn = bem('main');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const seed = localStorage.getItem('seed');

    if (!seed) {
      navigate('/');
    } else {
      dispatch(fetchUsers(seed) as any);
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Header />
      <div className={cn('')}>
        <div className={cn('container')}>
          <table className={cn('table')}>
            <thead>
              <tr>
                <th>№</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Пол</th>
                <th>Почта</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              <Item />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
