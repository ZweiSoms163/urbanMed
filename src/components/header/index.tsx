import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
export default function Header() {
  const cn = bem("header");
  return (
    <div className={cn()}>
      <button className={cn('add')}>Добавить пользователя</button>
      <button className={cn('exit')}>Выйти</button>
    </div>
  );
}
