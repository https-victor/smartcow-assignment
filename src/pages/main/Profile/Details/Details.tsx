import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import "./Details.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "../../../../app/hooks";
import { ReactComponent as EditBtn } from "../../../../assets/svg/edit-btn.svg";
import {
  onUpdateImage,
  onUpdateProfile,
} from "../../../../app/features/auth/auth-slice";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

const formValidation = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Inform a valid email")
    .required("Email is required"),
});

const Details = () => {
  const user = useSelector((state) => state.auth.user);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  function onSubmitPicture(values: any) {
    setModal(false);
    dispatch(onUpdateImage(values.url));
  }
  const initialValues = user
    ? { firstName: user.firstName, lastName: user.lastName, email: user.email }
    : {
        firstName: "Victor",
        lastName: "Oliveira",
        email: "jvictorddo@gmail.com",
      };
  const formProfile = useFormik({
    initialValues: initialValues,
    validationSchema: formValidation,
    onSubmit: (values) => {
      dispatch(onUpdateProfile(values));
    },
  });

  return (
    <div className="profile-details">
      <div className="profile-picture">
        <img
          src={user?.image || "https://i.imgur.com/gt7dWQ7.jpg"}
          alt=""
          className="picture"
        />
        <div
          className="edit-btn"
          onClick={() => {
            setModal(true);
          }}
        >
          <EditBtn />
        </div>
      </div>
      <form onSubmit={formProfile.handleSubmit}>
        <div className="profile-form">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            onChange={formProfile.handleChange}
            onBlur={formProfile.handleBlur}
            value={formProfile.values.firstName}
            error={
              formProfile.errors.firstName &&
              formProfile.touched.firstName &&
              formProfile.errors.firstName
            }
          />

          <Input
            label="Last Name"
            type="text"
            name="lastName"
            onChange={formProfile.handleChange}
            onBlur={formProfile.handleBlur}
            value={formProfile.values.lastName}
            error={
              formProfile.errors.lastName &&
              formProfile.touched.lastName &&
              formProfile.errors.lastName
            }
          />

          <Input
            label="Email"
            type="email"
            name="email"
            onChange={formProfile.handleChange}
            onBlur={formProfile.handleBlur}
            value={formProfile.values.email}
            error={
              formProfile.errors.email &&
              formProfile.touched.email &&
              formProfile.errors.email
            }
          />
        </div>
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </form>
      {modal && (
        <div className="profile-pic-modal">
          <ProfilePicture onSubmit={onSubmitPicture} image={user?.image} />
        </div>
      )}
    </div>
  );
};

export default Details;
