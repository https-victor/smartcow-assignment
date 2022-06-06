import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./DetailsForm.scss";

const videoDetailsFormValidation = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string(),
  tags: yup.array().of(yup.string()),
});

const DetailsForm = ({ initialValues, onSubmit }: any) => {
  const formDetails = useFormik({
    initialValues,
    validationSchema: videoDetailsFormValidation,
    onSubmit,
  });
  return (
    <form className="details-form" onSubmit={formDetails.handleSubmit}>
      <>
        <Input
          type="text"
          name="title"
          placeholder="Saying Hi to my customers"
          onChange={formDetails.handleChange}
          onBlur={formDetails.handleBlur}
          value={formDetails.values.title}
          error={
            formDetails.errors.title &&
            formDetails.touched.title &&
            formDetails.errors.title
          }
        />

        <textarea
          id="description"
          name="description"
          className="input"
          onChange={formDetails.handleChange}
          onBlur={formDetails.handleBlur}
          value={formDetails.values.description}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={formDetails.isSubmitting}
        >
          Save
        </Button>
      </>
    </form>
  );
};

export default DetailsForm;
