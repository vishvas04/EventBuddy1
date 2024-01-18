import './Signup.css';
import { useForm } from "react-hook-form";
import {useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
function Signup() {
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
            <h1 className="mb-3 heading">Register</h1>
            <p className="lead para">
                Create your account.It's free and only takes few minutes
            </p>
          <Form.Group className="row mb-3">
            <Form.Label className='col-sm-6'>First Name</Form.Label>
            <Form.Control className='col-sm-6 input1'type="text" {...register("fname", { required: true })}/>
            {errors.fname && (
              <p className="text-danger">First Name is required</p>
            )}
          </Form.Group>
          <Form.Group className="row mb-3">
            <Form.Label className='col-sm-6'>Last Name</Form.Label>
            <Form.Control className='col-sm-6 input1'type="text" {...register("lname", { required: true })}/>
            {errors.lname && (
              <p className="text-danger">Last Name is required</p>
            )}
          </Form.Group>
          <Form.Group className="row mb-3">
            <Form.Label className='col-sm-6'>Email</Form.Label>
            <Form.Control className='col-sm-6 input1' type="email" {...register("email", { required: true })} />
            {errors.email>=2000 &&(
              <p className="text-danger">Email is required</p>
            )}
          </Form.Group>
          <Form.Group className=" row mb-3">
            <Form.Label className='col-sm-6'>Password</Form.Label>
            <Form.Control className='col-sm-6 input1' type='password' {...register("pass", { required: true })} />
            {errors.pass && (
              <p className="text-danger">Password is required</p>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  </Container>
  );
}

export default Signup;
