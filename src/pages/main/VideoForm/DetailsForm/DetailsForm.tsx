import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

const DetailsForm = ({ form }: any) => {
  return (
    <form className="login-form" onSubmit={form.handleSubmit}>
      <Input
        label="Title"
        type="text"
        name="title"
        placeholder="Saying Hi to my customers"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        value={form.values.title}
      />
      {form.errors.title && form.touched.title && form.errors.title}
      <Input
        label="Description"
        type="text"
        name="description"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        value={form.values.description}
      />
      <Button variant="contained" type="submit" disabled={form.isSubmitting}>
        Save
      </Button>
    </form>
  );
};

export default DetailsForm;
