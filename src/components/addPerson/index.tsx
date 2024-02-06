import React, { useState } from "react";
import Close from "../../assets/Vector.png";
import { cn as bem } from "@bem-react/classname";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeModal,
  updateFormData,
  addUserToUserList,
} from "../../redux/slices/AddPersonSlice";
import "./style.css";
import { User } from "../../redux/types";

export default function AddPeson() {
  const cn = bem("AddPerson");
  const [isClosing, setIsClosing] = useState(false);
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const isOpen = useSelector(
    (state: RootState) => state.AddPersonSlice.isModalOpen
  );
  const formData = useSelector(
    (state: RootState) => state.AddPersonSlice.formData
  );

  const handleCloseModal = () => {
    setIsClosing(true);
    const timeout = setTimeout(() => {
      dispatch(closeModal());
      setIsClosing(false);
    }, 500);
    return () => clearTimeout(timeout);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    dispatch(updateFormData({ [fieldName]: value }));
  };
  const handleSaveUser = () => {
    const newUser: User = {
      gender,
      name: {
        title: "",
        first: formData.firstName,
        last: formData.lastName,
      },
      email: formData.email,
    };

    dispatch(addUserToUserList(newUser));
    console.log("New user data sent:", newUser);
    handleCloseModal();
  };

  return (
    <>
      {isOpen && (
        <div className={`modal-overlay ${isClosing ? "light" : "dark"}`}>
          <div className={`modal-content ${isClosing ? "closed" : ""} ${cn()}`}>
            <div className={cn("head")}>
              <h2 className={cn("title")}>Новый пользователь</h2>
              <div className={cn("close")} onClick={handleCloseModal}>
                <img src={Close} alt="close" />
              </div>
            </div>
            <div className={cn("btn-group")}>
              <label className={cn("toggle-switch__option")}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className={cn("toggle-switch__radio")}
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                <span className={cn("toggle-switch__label")}>Мужчина</span>
              </label>
              <label className={cn("toggle-switch__option")}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className={cn("toggle-switch__radio")}
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                <span className={cn("toggle-switch__label")}>Женщина</span>
              </label>
            </div>
            <div className={cn("input-group")}>
              <p className={cn("placeholder")}>Фамилия*</p>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
              <p className={cn("placeholder")}>Имя*</p>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <p className={cn("placeholder")}>Email*</p>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>
            <div>
              <button className={cn("saveBtn")} onClick={handleSaveUser}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
