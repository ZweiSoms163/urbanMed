import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
export default function AddPeson() {
  const cn = bem("AddPerson");
  return (
    <div className={cn()}>
      <div>
        <h2 className={cn("title")}>Новый пользователь</h2>
        <div>X</div>
      </div>
      <div className={cn("btn-group")}>
        <button>Мужчина</button>
        <button>Женщина</button>
      </div>
      <div className={cn("input-group")}>
        <input type="text" placeholder="Фамилия*" />
        <input type="text" placeholder="Имя*" />
        <input type="text" placeholder="Email*" />
      </div>
      <div className={cn("saveBtn")}>
        <button>Сохранить</button>
      </div>
    </div>
  );
}
