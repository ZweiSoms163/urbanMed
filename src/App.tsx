import './App.css';
import Authorization from './components/authorization';
import Main from './components/main';
import AddPeson from './components/addPerson';
import EditPerson from './components/editPerson';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <AddPeson />
      <EditPerson />
    </div>
  );
}

export default App;

/* 
1. Можно избежать повторения кода с модалками, сделав макет и к нему уже навешивая доп функционал 
2. Возможно не совсем корректно реализована анимация закрытия модалки, т.к. пришлось оборачивать в setTimeout для того, чтобы анимация успела сработать, 
а не сразу tsx исчезал по isOpen = false 
3. Вынести функционал модалки и саму модалку, как переиспользуемый компонент, а не копипастить 
4. Пройтись по всему коду и постараться убрать повторяющийся код
*/
