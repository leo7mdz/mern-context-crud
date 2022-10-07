import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { descriptionSchema, titleSchema } from "./typeDto.js";

const putDTOSchema = Type.Object({
  title: titleSchema,
  description: descriptionSchema,
});

const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

addErrors(ajv);

const validate = ajv.compile(putDTOSchema);

const tasksPutValidate = (req, res, next) => {
  const isValidate = validate(req.body);
  console.log(validate.errors);

  if (!isValidate) {
    return res
      .status(401)
      .send({ error: validate.errors.map((error) => error.message) });
  }

  next();
};

export default tasksPutValidate;
