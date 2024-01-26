import React, { useState } from "react";

export const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const validatePassword = function () {
    if (password.length > 8)
      setPasswordMessage("Hasło jest za długie max 8 znaków");
    else if (password.length < 3)
      setPasswordMessage("Hasło jest za krótkie min 3 znaki");
    else if (
      !password.includes("!") &&
      !password.includes("@") &&
      !password.includes("#") &&
      !password.includes("$") &&
      !password.includes("%")
    )
      setPasswordMessage(
        "Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %"
      );
    else setPasswordMessage("Hasło jest ok");
  };

  return (
    <article>
      <p>Password validator</p>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordMessage("");
        }}
      />
      <p>{passwordMessage}</p>
      <button onClick={validatePassword}>Validate</button>
    </article>
  );
};
