import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import Item from "../item";
import Header from "../header";

export default function Main() {
  const cn = bem("main");
  return (
    <div>
      <Header />
      <div className={cn("")}>
        <div className={cn("container")}>
          <table className={cn("table")}>
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
