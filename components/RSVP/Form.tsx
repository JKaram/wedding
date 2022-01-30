import React, { HTMLInputTypeAttribute, useState } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../commons/Button";
import { dinnerOptions } from "../../constants";
import styled from "styled-components";
import { useValidationSchema } from "../../hooks/useValidationSchema";
// Are They Coming?
// Do you Have a plus one

export default function Form1() {
  const [secondGuest, setSecondGuest] = useState(false);
  const schema = useValidationSchema(secondGuest);
  console.log("🚀 ~ file: Form.tsx ~ line 13 ~ Form1 ~ schema", schema);

  return (
    <Formik
      initialValues={{
        guestOneFoodOption: "",
        guestTwoFoodOption: "",
        message: "",
        guestOneName: "",
        guestTwoName: "",
        song: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col space-y-4 pt-2">
          <div className="md:flex">
            <FormFeild
              label={"Name(s)"}
              description="Your name and name of your guest"
              fieldName="guestOneName"
              touched={touched.guestOneName}
              error={errors.guestOneName}
            />
            <Field as="select" name="guestOneFoodOption">
              <option value="">Please choose a meal</option>
              {dinnerOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          {!secondGuest && <div onClick={() => setSecondGuest(true)}>Add a guest</div>}

          {secondGuest && (
            <div>
              <div className="md:flex">
                <FormFeild
                  label={"Name(s)"}
                  description="Your name and name of your guest"
                  fieldName="guestTwoName"
                  touched={touched.guestTwoName}
                  error={errors.guestTwoName}
                />
                <div onClick={() => setSecondGuest(false)}>Cancel Guest</div>
                <Field as="select" name="guestTwoFoodOption">
                  {dinnerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          )}

          <FormFeild
            label={"Message"}
            description="Anything we should know?"
            fieldName="message"
            touched={touched.message}
            error={errors.message}
          />
          <FormFeild
            label={"Song"}
            description="Any Song requests?"
            fieldName="song"
            touched={touched.song}
            error={errors.song}
          />
          <Button type="submit" onClick={() => console.log("log")}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const FormFeild = ({
  fieldName,
  description,
  label,
  touched,
  error,
  feildType,
  initalValue,
}: {
  fieldName: string;
  description: string;
  label: string;
  touched: boolean | undefined;
  error: string | undefined;
  feildType?: HTMLInputTypeAttribute;
  initalValue?: undefined;
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <p className="text-gray-400 text-sm p-0">{description}</p>
      <Field
        className="border-slate-200 border px-1 py-1"
        name={fieldName}
        type={feildType}
        initalValue={initalValue}
      />
      {error && touched ? <div className="text-red-600 text-sm">{error}</div> : null}
    </div>
  );
};
