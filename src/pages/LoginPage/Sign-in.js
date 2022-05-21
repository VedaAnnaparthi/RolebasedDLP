import React, { useState,memo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Uri";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const Sign=()=> {
  var userStatus = null;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const navigate = useNavigate();
  const history = useHistory();

  const intialValues = {
    userName,
    password,
  };
  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    //1 prevent propagation
    event.preventDefault();
    //2 make the async call and set the session storage on successful login
    const sendLoginRequest = async () => {
      try {
        const resp = await axios.get(
          `/login/authenticateUser?userName=${userName}&password=${password}`
        );
        console.log('login is successful');
        toast.success("You are successfully Logged In");
        userStatus = resp.data;
        sessionStorage.setItem("userdata", JSON.stringify(userStatus));

        if (userStatus.status === true) {
          history.push("/app");
        }
      } catch (err) {
        console.error(err);
        toast.error("Login Failed, Please try again.");

      }
    };

    sendLoginRequest();
  };

  return (
    <>
      <Container>
        <Row style={{ marginTop: "70px", marginLeft: "40px" }}>
          <Col
            className="p-5 m-auto shadow-sm rounded-lg"
            style={{
              height: "600px",
              width: "430px",
              alignments: "center",
              backgroundColor: "#FFDEAD",
              borderRadius: "25px",
            }}
            lg={5}
            md={6}
            sm={12}
          >
            <h1 style={{ textAlign: "center", paddingTop: "10px" }}>Login</h1>
            <Form style={{ paddingTop: "40px" }}>
              <Form.Group controlld="userName">
                <Form.Label style={{ fontWeight: "bold" }}>UserName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your UserName."
                  size="lg"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <Form.Group controlid="fornBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password."
                  size="lg"
                  value={password}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your password",
                    },
                    pattern: {
                      value: "^[A-Za-z0-9]+$",
                      errorMessage:
                        "Your password must be composed only with letter and numbers",
                    },
                    minLength: {
                      value: 6,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <div>
                <a
                  class="text-muted"
                  href="/resetPassword"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Forgot password?
                </a>
              </div>
              &nbsp;
              <Button
                size="lg"
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(to left,#fc6174,#F5503A)",
                }}
                disabled={!validateForm()}
                onClick={handleSubmit}
              >
                Signin
              </Button>
              {/* {sessionStorage.getItem("userName") && (
                  <div>
                    Name:<p>{sessionStorage.getItem("userName")}</p>
                  </div>
                )}
                {sessionStorage.getItem("password") && (
                  <div>
                    Password:<p>{sessionStorage.getItem("password")}</p>
                  </div>
                )}  */}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default memo(Sign);
