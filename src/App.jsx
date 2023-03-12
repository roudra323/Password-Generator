import React, { useState } from "react";
import "./App.css";

const generatePassword = (length) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]\\|<,>.?/"';
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const App = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    setPassword(generatePassword(passwordLength));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Password Generator
              </h3>
              <div className="form-group">
                <label htmlFor="passwordLength">Password length:</label>
                <input
                  type="number"
                  className="form-control"
                  id="passwordLength"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                  min={8}
                />
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={handleGeneratePassword}
              >
                Generate password
              </button>
              <div className="form-group mt-4">
                <label htmlFor="generatedPassword">Generated password:</label>
                <input
                  type="text"
                  className="form-control"
                  id="generatedPassword"
                  value={password}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
