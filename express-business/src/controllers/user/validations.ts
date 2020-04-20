import { join } from "path";

const Joi = require('@hapi/joi');

const userValidation = Joi.object({
  name: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.number().integer().required(),
});

const loginUserValiation = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
})


export {
 userValidation,
 loginUserValiation };