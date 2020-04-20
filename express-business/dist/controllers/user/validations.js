"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const userValidation = Joi.object({
    name: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.number().integer().required(),
});
exports.userValidation = userValidation;
const loginUserValiation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});
exports.loginUserValiation = loginUserValiation;
//# sourceMappingURL=validations.js.map