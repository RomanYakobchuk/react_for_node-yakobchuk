import Joi from "joi";

const userValidatorForRegister = Joi.object({
    name: Joi.string().required().min(2).max(20).messages({
        'string.empty': 'Name не може бути порожнім',
        'string.min': 'Name має містити мінімум 2 символи',
        'string.max': 'Name має містити максимум 20 символів',
    }),
    username: Joi.string().required().min(2).max(30).messages({
        'string.empty': 'Username не може бути порожнім',
        'string.min': 'Username має містити мінімум 2 символи',
        'string.max': 'Username має містити максимум 30 символів',
    }),
    age: Joi.number().required().min(14).max(100).messages({
        'number.empty': 'Age не може бути порожнім',
        'number.min': 'Age має складати мінімум 14 років',
        'number.max': 'Age має бути не більше 100 років',
    }),
    // phone: Joi.string().required().regex(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/).messages({
    //     'string.empty': 'Phone не може бути порожнім',
    //     'string.pattern.base': 'Phone має починатися з + та вашого номерного коду країни, має бути дійсним, та складатися тільки з цифр',
    // }),
    email: Joi.string().required().regex(/^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/).messages({
        'string.empty': 'Email не може бути порожнім',
        'string.pattern.base': 'Email має містити @ та бути валідною',
    }),
    password: Joi.string().min(8).required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/).messages({
        'string.empty': 'Password не може бути порожнім',
        'string.min': 'Password має містити мінімум 8 символів',
        'string.pattern.base': 'Password має містити латинські літери нижнього та верхнього регістру, мінімум одну цифру та один інший символ',
    }),
    // avatar: Joi.required().messages({
    //     "string.empty":"Avatar не може бути порожнім"
    // })
});
const userValidatorForLogin = Joi.object({
    email: Joi.string().required().regex(/^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/).messages({
        'string.empty': 'Email не може бути порожнім',
        'string.pattern.base': 'Email має містити @ та бути валідною',
    }),
    password: Joi.string().min(8).required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/).messages({
        'string.empty': 'Password не може бути порожнім',
        'string.min': 'Password має містити мінімум 8 символів',
        'string.pattern.base': 'Password має містити латинські літери нижнього та верхнього регістру, мінімум одну цифру та один інший символ',
    }),
    // avatar: Joi.required().messages({
    //     "string.empty":"Avatar не може бути порожнім"
    // })
});


export {userValidatorForRegister, userValidatorForLogin}