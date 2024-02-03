import React, { useState } from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

export default function Authorization() {
  const cn = bem("authorization");
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;

    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setInputValue(inputValue);
      setIsError(false);
    } else {
      setInputValue(inputValue);
      setIsError(true);
    }
  };

  console.log(inputValue);

  return (
    <div className={cn()}>
      <div className={cn("box")}>
        <h1 className={cn("title")}>Добро пожаловать</h1>
        <p className={cn("placeholder")}>Seed</p>
        <input
          type="text"
          className={cn("input")}
          value={inputValue}
          onChange={handleInputChange}
        />
        {isError && <p className={cn("error")}>*Поле заполнено не корректно</p>}
        <div className={isError ? cn("strip-error") : cn("strip")}></div>
        <button className={cn("button")}>Войти</button>
      </div>
    </div>
  );
}
