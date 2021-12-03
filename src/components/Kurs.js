import React from "react";

const Kurs = props => (
  <div>
  { props.cc &&
    <div>
    <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
    <p>Сокращенное имя валюты: <strong>{props.cc}</strong></p>
    <p>Дата: {props.exchangedate}</p>
    <p>Код валюты: {props.r030}</p>
    <p>Курс: <strong>{props.rate}</strong></p>
    <p>Название валюты: {props.txt}</p>
    <p>______________________________________________</p>
    </div>
  }
  <p>{ props.error }</p>
  </div>
);

export default Kurs;
