import './Login.css';
import { useForm } from "react-hook-form";
import {useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
// import Signup from './Signup'

function Login() {
  const [response, setResponse] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit=(userObj)=>{
    // console.log(userObj)
  //   const a=parseInt(userObj.electricity)+parseInt(userObj.water)+parseInt(userObj.groceries)+parseInt(userObj.rent);
  // (a<=1000)?(
  //     console.log(a,'hello'),
    setResponse(userObj)
  //   (console.log("exceeded the daily limit"),
    handleCreate(userObj)
  };
  const handleCreate = (userObj) => {
    console.log(userObj);
  };
  return (
    <Container>
    {/* <div className="display-3 text-center mb-3"><h1 className="display-13">Expense in the year 2022</h1></div> */}
    <div className="mb-1">
      {/* <div className="col-12 col-sm-8 col-md-6 mx-auto"> */}
        <Form onSubmit={handleSubmit(onFormSubmit)} className='mx-auto mt-3 bg-light p-5 shadow form1'>
            <h1 className="mb-3 heading">Login</h1>
          <Form.Group className="row mb-3">
            <Form.Label className='col-sm-6'>Email</Form.Label>
            <Form.Control className='col-sm-6 input2'type="email" {...register("email", { required: true })}/>
            {errors.email && (
              <p className="text-danger">Email is required</p>
            )}
          </Form.Group>
          <Form.Group className="row mb-3">
            <Form.Label className='col-sm-6'>Password</Form.Label>
            <Form.Control className='col-sm-6 input2'type="password" {...register("pass", { required: true })}/>
            {errors.pass && (
              <p className="text-danger">Password is required</p>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
          {/* <div className="mt-3 imp">
            <p className="">New member? <a href={Signup} target="_blank">signup</a></p>
        </div> */}
        </Form>
    </div>
  </Container>
  );
}

export default Login;