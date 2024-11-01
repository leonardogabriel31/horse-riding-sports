import { Fragment } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/features/hooks/hooks";
import { Stack, TextField } from "@mui/material";
import {
  setError,
  setErrorCodepostal,
  setErrorCountry,
  setErrorEmail,
  setErrorPassword,
  setErrorPhone,
  setForm,
  setHelperText,
  setHelperTextCodepostal,
  setHelperTextCountry,
  setHelperTextEmail,
  setHelperTextPassword,
  setHelperTextPhone,
} from "../lib/features/actions/register/registerAction.js";

const InputHandler = () => {
  const form = useAppSelector((state) => state.register.form);
  const error = useAppSelector((state) => state.register.error);
  const errorEmail = useAppSelector((state) => state.register.errorEmail);
  const errorPhone = useAppSelector((state) => state.register.errorPhone);
  const errorPassword = useAppSelector((state) => state.register.errorPassword);
  const errorCountry = useAppSelector((state) => state.register.errorCountry);
  const errorCodepostal = useAppSelector(
    (state) => state.register.errorCodepostal
  );
  const helperText = useAppSelector((state) => state.register.helperText);
  const helperTextEmail = useAppSelector(
    (state) => state.register.helperTextEmail
  );
  const helperTextPhone = useAppSelector(
    (state) => state.register.helperTextPhone
  );
  const helperTextPassword = useAppSelector(
    (state) => state.register.helperTextPassword
  );
  const helperTextCountry = useAppSelector(
    (state) => state.register.helperTextCountry
  );
  const helperTextCodepostal = useAppSelector(
    (state) => state.register.helperTextCodepostal
  );
  const dispatch = useAppDispatch();

  const handleChangeName = (e) => {
    if (error) {
      console.log(error);
      if (error.errors) {
        console.log(error.errors.person.fullName);
      }
    }
    dispatch(setForm({ ...form, fullName: e.target.value }));
    if (e.target.value.length > 50) {
      dispatch(setError(true));
      dispatch(
        setHelperText("It should not be more than 50 characters allowed")
      );
    } else if (e.target.value.length < 8) {
      dispatch(setError(true));
      dispatch(setHelperText("Must not be less than 8 characters allowed"));
    } else if (!e.target.value) {
      dispatch(setError(true));
    } else {
      dispatch(setError(false));
    }
  };

  const handleChangeEmail = (e) => {
    dispatch(setForm({ ...form, email: e.target.value }));
    if (e.target.value.length > 50) {
      dispatch(setErrorEmail(true));
      dispatch(
        setHelperTextEmail("It should not be more than 50 characters allowed")
      );
    } else {
      dispatch(setErrorEmail(false));
    }
  };

  const handleChangePhone = (e) => {
    dispatch(setForm({ ...form, phoneNumber: e.target.value }));
    if (e.target.value.length > 20) {
      dispatch(setErrorPhone(true));
      dispatch(
        setHelperTextPhone("It should not be more than 20 characters allowed")
      );
    } else {
      dispatch(setErrorPhone(false));
    }
  };

  const handleChangePassword = (e) => {
    dispatch(setForm({ ...form, password: e.target.value }));
    if (e.target.value.length < 8) {
      dispatch(setErrorPassword(true));
      dispatch(
        setHelperTextPassword("Must not be less than 8 characters allowed")
      );
    } else {
      dispatch(setErrorPassword(false));
    }
  };

  const handleChangeCountry = (e) => {
    dispatch(setForm({ ...form, country: e.target.value }));
    if (e.target.value.length > 20) {
      dispatch(setErrorCountry(true));
      dispatch(
        setHelperTextCountry("It should not be more than 20 characters allowed")
      );
    } else {
      dispatch(setErrorCountry(false));
    }
  };

  const handleChangeCodePostal = (e) => {
    dispatch(setForm({ ...form, codepostal: e.target.value }));
    if (e.target.value.length > 10) {
      dispatch(setErrorCodepostal(true));
      dispatch(
        setHelperTextCodepostal(
          "It should not be more than 10 characters allowed"
        )
      );
    } else {
      dispatch(setErrorCodepostal(false));
    }
  };

  return (
    <Fragment>
      <Stack spacing={2} margin={2}>
        <TextField
          required
          variant="outlined"
          label="Nombres y apellidos"
          type="text"
          placeholder="Nombres y apellidos"
          name="fullname"
          value={form.fullName}
          onChange={handleChangeName}
          error={error}
          helperText={error ? helperText : ""}
          autoComplete="off"
        />
        <TextField
          required
          variant="outlined"
          label="Correo Electronico"
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChangeEmail}
          error={errorEmail}
          helperText={error ? helperTextEmail : ""}
          autocomplete="off"
        />
        <TextField
          required
          variant="outlined"
          label="Telefono"
          type="text"
          placeholder="telefono"
          name="phone"
          value={form.phoneNumber}
          onChange={handleChangePhone}
          error={errorPhone}
          helperText={errorPhone ? helperTextPhone : ""}
          autoComplete="off"
        />
        <TextField
          required
          variant="outlined"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={form.password}
          onChange={handleChangePassword}
          error={errorPassword}
          helperText={errorPassword ? helperTextPassword : ""}
          autoComplete="new-password"
        />
        <TextField
          required
          variant="outlined"
          label="Pais"
          type="text"
          placeholder="Pais"
          name="country"
          value={form.country}
          onChange={handleChangeCountry}
          error={errorCountry}
          helperText={errorCountry ? helperTextCountry : ""}
          autoComplete="off"
        />
        <TextField
          required
          variant="outlined"
          label="Código postal"
          type="number"
          placeholder="Código postal"
          name="country"
          value={form.codepostal}
          error={errorCodepostal}
          onChange={handleChangeCodePostal}
          helperText={errorCodepostal ? helperTextCodepostal : ""}
          autoComplete="off"
        />
      </Stack>
    </Fragment>
  );
};

export default InputHandler;
