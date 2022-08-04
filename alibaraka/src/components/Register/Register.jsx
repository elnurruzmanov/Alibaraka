import React from "react";
import "./Register.css";

import Gardener from "../images/gardender.png";

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="container">
          <img src={Gardener} alt="" />
          <h3 className="register-title">BIZGA SAVOLLARINGIZ BORMI?</h3>
          <p className="register-text">
            Agar sizda biror taklif yoki savollar bo'lsa, mana shu yerda yozib
            qoldiring, biz doim javob berishga shaymiz.
          </p>
          <form className="form">
            <div className="form-input">
              <label className="contact-label">
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  required
                  className="inputs"
                />
              </label>
              <label className="contact-label">
                <input
                  type="number"
                  placeholder="+375259577762"
                  required
                  className="inputs"
                />
              </label>

              <textarea
                placeholder="Murojaatni kiriting"
                id="textarea"
                name="textarea"
                class="contact-textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-btn">Xabar Jo'natish</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
