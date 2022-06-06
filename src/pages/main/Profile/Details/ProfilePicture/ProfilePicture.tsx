import React from "react";
import Input from "../../../../../components/Input/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../../../../components/Button/Button";

const formPictureValidation = yup.object({
  url: yup.string().required("Picture is required"),
});
const ProfilePicture = ({ image, onSubmit }: any) => {
  const formPicture = useFormik({
    initialValues: { url: image || "https://i.imgur.com/gt7dWQ7.jpg" },
    validationSchema: formPictureValidation,
    onSubmit: onSubmit,
  });
  return (
    <form className="profile-pic-form" onSubmit={formPicture.handleSubmit}>
      <>
        <Input
          label="Image's url"
          type="text"
          name="url"
          placeholder="Inform an URL for an image"
          onChange={formPicture.handleChange}
          onBlur={formPicture.handleBlur}
          value={formPicture.values.url}
          error={
            formPicture.errors.url &&
            formPicture.touched.url &&
            formPicture.errors.url
          }
        />
        <Button
          variant="contained"
          type="submit"
          disabled={formPicture.isSubmitting}
        >
          Save
        </Button>
      </>
    </form>
  );
};

export default ProfilePicture;
