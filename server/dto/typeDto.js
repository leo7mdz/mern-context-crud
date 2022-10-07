import { Type } from "@sinclair/typebox";

export const titleSchema = Type.String({
  errorMessage: "El formato debe ser de tipo string",
});

export const descriptionSchema = Type.String({
  minLength: 10,
  maxLength: 500,

  errorMessage: {
    minLength: "Debe contener al menos diez caracteres de longitud",
    maxLength: "Debe contener un maximo de veinticinco caracteres",
    Type: "el formato debe ser un string",
  },
});
