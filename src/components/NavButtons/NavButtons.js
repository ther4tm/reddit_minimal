import React from "react";
import style from './navButtons.module.css';
import { useNavigate } from "react-router-dom";

export default function NavButtons() {

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/') //sends the user back to the root
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  return (
    <div className={style.navButtons}>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </div>
  );
}