import { useState } from "react";
import todo_image from '../images/to-do-list.png';
import AutoHideToast from "./ToastMsg";
import { createUser } from "./APIutility"
import { isUserNameAvailable } from "./APIutility"
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";

function NewUser() {
  const [userCreated, setUserCreated] = useState(false);
  const [userCreateFailed, setUserCreateFailed] = useState(false);
  const ERROR_MSGS = {
    name: "Please enter the name of the user.",
    userName: "Please enter username for this user.",
    password: "Please enter password.",
    confirmPassword: "Please confirm password.",
    agreement: "User agreement to terms and conditions are necessary."
  };

  const [user, setUser] = useState({ name: "", userName: "", password: "", confirmPassword: "", agreement: false });
  const [errors, setErrors] = useState({});
  const [userNameAvailable, setUserNameAvailable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorStateObj = { ...errors };
    let noErrors = true;

    if (errorStateObj.name || errorStateObj.userName || errorStateObj.password || errorStateObj.confirmPassword || errorStateObj.agreement) {
      setErrors(errorStateObj);
      return false;
    }

    if (!user.name) {
      errorStateObj["name"] = ERROR_MSGS["name"];
      noErrors = false;
    } else if (!user.userName) {
      errorStateObj["userName"] = ERROR_MSGS["userName"];
      noErrors = false;
    } else if (!user.password) {
      errorStateObj["password"] = ERROR_MSGS["password"];
      noErrors = false;
    } else if (!user.confirmPassword) {
      errorStateObj["confirmPassword"] = ERROR_MSGS["confirmPassword"];
      noErrors = false;
    } else if (!user.agreement) {
      errorStateObj["agreement"] = ERROR_MSGS["agreement"];
      noErrors = false;
    }
    setErrors(errorStateObj);

    if (noErrors) {
      console.log(errors);
      console.log(JSON.stringify(user));
      if (noErrors) {
        let bodyData = { 
          name: user.name, 
          username: user.userName, 
          password: user.password 
        }
        // create the user
        createUser(bodyData).then(resp => {
          if (resp) {
            console.log(resp);
            setUserCreated(true);
            resetForm();
            gotoListingPage(resp.id);
          } else {
            setUserCreateFailed(true);
          }
        });
      }
    }
  }

  function gotoListingPage(userId) {
    localStorage.setItem("todo.user", userId);
    localStorage.setItem("user.created", "true");
    navigate("/displayusertodos");
  }

  function resetForm() {
    setUser({ name: "", userName: "", password: "", confirmPassword: "", agreement: false });
    setErrors({});
    setUserNameAvailable(null);
  }

  const inputChange = (e) => {
    validateInput(e);
    let value = e.target.type && e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(e.target.name + " < , > " + e.target.value);
    setUser({ ...user, [name]: value });
  }

  const validateInput = (e) => {
    let errorStateObj = { ...errors };
    let value = e.target.type && e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    if (!value) {
      errorStateObj[name] = ERROR_MSGS[name];
      setErrors(errorStateObj);
      return;
    } else {
      errorStateObj[name] = null;
    }

    switch (name) {
      case "userName":
        // user Name validation
        isUserNameAvailable(value)
          .then(resp => {
            console.log(resp);
            if (resp) {
              errorStateObj[name] = null;
              setUserNameAvailable(true);
            } else {
              setUserNameAvailable(false);
              errorStateObj[name] = "User name already exists.";
            }
          });
        break;

      case "password":
        errorStateObj["confirmPassword"] = (user.confirmPassword && value === user.confirmPassword) ? "" : "Password and Confirm Password does not match.";
        break;

      case "confirmPassword":
        if (value !== user.password) {
          errorStateObj[name] = "Password and Confirm Password does not match.";
        }
        break;

      default:
        break;
    }
    setErrors(errorStateObj);
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop:"100px" }}>New User Registration</h1>
        <div className="row">
        <MediaQuery minWidth={576}>
          <div className="col-md-5">
            <img alt="to_do_image" className="img-fluid" src={todo_image} style={{ marginTop: "150px", marginLeft: "100px" }} />
          </div>
          </MediaQuery>
          <div className="col-md-7">
            <form onSubmit={handleSubmit} className="col-md-7 newuser-container container container-fluid">
              <div className="my-4">
                <label><strong>Name</strong></label>
                <input type="text" name="name" value={user.name} placeholder='Name of the User' className={"form-control " + (errors.name ? "border-danger" : "border-success")} onChange={inputChange} onBlur={validateInput} />
                {errors.name && <p className="error_msg">&#x26A0; {errors.name}</p>}
              </div>
              <div className="my-4">
                <label><strong>Username</strong></label>
                <input type="text" className={"form-control " + (errors.userName ? "border-danger" : "border-success")} name="userName" value={user.userName} placeholder='User name used to login' onChange={inputChange} onBlur={validateInput} />
                {errors.userName && <p className="error_msg">&#x26A0; {errors.userName}</p>}
                {userNameAvailable && <p style={{ color: "green", fontWeight: "bold" }}>&#9989; Username is available</p>}
              </div>
              <div className="my-4">
                <label><strong>Password</strong></label>
                <input type="password" className={"form-control " + (errors.password ? "border-danger" : "border-success")} name="password" value={user.password} placeholder='Password' onChange={inputChange} onBlur={validateInput} />
                {errors.password && <p className="error_msg">&#x26A0; {errors.password}</p>}
              </div>
              <div className="my-4">
                <label><strong>Confirm Password</strong></label>
                <input type="password" className={"form-control " + (errors.confirmPassword ? "border-danger" : "border-success")} name="confirmPassword" value={user.confirmPassword} placeholder='Confirm Password' onChange={inputChange} onBlur={validateInput} />
                {errors.confirmPassword && <p className="error_msg">&#x26A0; {errors.confirmPassword}</p>}
                {user.confirmPassword && !errors.confirmPassword && <p style={{ color: "green", fontWeight: "bold" }}>&#9989; Password matched</p>}
              </div>
              <br />

              <div>
                <input name="agreement" type='checkbox' className="me-2" checked={user.agreement} onChange={inputChange} onBlur={validateInput} ></input>
                <label>Agree to terms and conditions</label>
                {errors.agreement && <p className="error_msg">&#x26A0; {errors.agreement}.</p>}
              </div>
              <button className="btn btn-primary mt-4 me-3 w-40">Create User</button>
              <button className="btn btn-primary mt-4 w-40" onClick={() => {resetForm()}}>Reset</button>
            </form>
          </div>
        </div>
        {userCreated && <AutoHideToast msg="User is successfully created." callbackOnHide={() => { setUserCreated(false) }} />}
        {userCreateFailed && <AutoHideToast msg="User creation failed." bg="danger" callbackOnHide={() => { setUserCreateFailed(false) }} />}
      </div>
      <style jsx="true">{`
        .error_msg {
          color: red;
          font-weight: bold;
        }

        .newuser-container {
          margin: 0 auto;
          margin-top: 100px;
          color: black;
          max-width: 800px;
          min-width: 200px;
          min-height: 550px;
        }

        .img-container{
          margin: 0 auto;
          margin-top: 130px;
          color: black;
          max-width: 100%;
        }
      `}</style>
      {/* <MyFooter></MyFooter> */}
    </>
  );



}

export default NewUser;