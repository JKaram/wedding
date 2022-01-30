import * as Yup from "yup";

export const useValidationSchema = (isSecondGuest: boolean) => {
  const oneGuest = Yup.object().shape({
    guestOneName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const twoGuests = Yup.object().shape({
    guestOneName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    guestTwoName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  return isSecondGuest ? twoGuests : oneGuest;
};
