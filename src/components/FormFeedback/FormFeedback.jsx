import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { ReactComponent as IconPin } from "../../images/pin.svg";
import s from "./FormFeedback.module.scss";
import { validationSchema } from "./YupValidationSchema";
import InputField from "../../shared/components/InputField/InputField";
import ErrorMessageField from "../../shared/components/ErrorMessage/ErrorMessage";
import CheckBoxGroup from "../../shared/components/CheckBoxGroup/CheckBoxGroup";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  comment: "",
  file: null,
  communicateBy: ["email"],
};

const FormFeedback = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];

    setSelectedFile(file);
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("comment", values.comment);
    formData.append("file", selectedFile);
    formData.append("communicateBy", values.communicateBy);

    resetForm();
    setSelectedFile(null);
  };

  return (
    <>
      <div className={s.FormBox}>
        <p className={s.FormTitle}>Зв’язатися з нами</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={s.InputBox}>
              <InputField name="name" placeholder="Ваше ім’я" />
              <ErrorMessageField name="name" />
            </div>
            <div className={s.InputBox}>
              <InputField name="phone" placeholder="Номер телефону" />
              <ErrorMessageField name="phone" />
            </div>
            <div className={s.InputBox}>
              <InputField name="email" placeholder="Електронна пошта" />
              <ErrorMessageField name="email" />
            </div>
            <Field
              className={s.FormTextArea}
              as="textarea"
              name="comment"
              placeholder="Коментар"
            />
            <label htmlFor="file" className={s.FileInputLabel}>
              <IconPin className={s.FileInputIcon} />
              {selectedFile ? (
                <span className={s.FileName}>{selectedFile.name}</span>
              ) : (
                <span className={s.FileName}>
                  "Натисніть тут, якщо ви хочете додати свій файл"
                </span>
              )}
              <Field
                type="file"
                id="file"
                name="file"
                className={s.FileInput}
                onChange={handleFileChange}
              />
            </label>
            <p className={s.TextContact}>
              Ви можете зв'язатися з нами за допомогою електронної пошти,
              Telegram або Viber.
            </p>
            <div className={s.CheckBox}>
              <CheckBoxGroup
                name="communicateBy"
                options={[
                  { label: "Email", value: "email", checked: true },
                  { label: "Viber", value: "viber" },
                  { label: "Telegram", value: "telegram" },
                ]}
              />
              <ErrorMessageField name="communicateBy" />
            </div>
            <button className={s.Button} type="submit">
              Надіслати
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormFeedback;