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
  return (
    <Modal
      title="Редактировать пользователя"
      options={[
        { label: 'Опция 1' },
        { label: 'Опция 2' },
      ]}
      onSave={handleSave}
    />
  );
}      как пример для понимания 
2. Возможно не совсем корректно реализована анимация закрытия модалки, т.к. пришлось оборачивать в setTimeout для того, чтобы анимация успела сработать, 
а не сразу tsx исчезал по isOpen = false 
3. после полностью готового функц. распределить на составляющие код, так как многий функц. можно вынести в отдельный компонент
4. реализовать функционал изменения {
  1. создать reducer updateUser (получать данные пользователя и редактировать их)
  2. создать reducer deletedUser (удалять пользователя из массива и из localStorage)
  3. в итем записывать нажатие кнопки редактировать 
  4. в editPerson открывать модалку по состоянию, полученную из item   modalEditOpen && (контет)
}
5. Вынести функционал модалки и саму модалку, как переиспользуемый компонент, а не копипастить 
6. Пройтись по всему коду и постараться убрать повторяющийся код
*/
