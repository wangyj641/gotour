import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Input } from "antd";
import styles from "./PaymentForm.module.css";

export const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div id="PaymentForm" style={{ marginTop: 50 }}>
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        //focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <form className={styles["payment-form"]}>
        <Input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
}
