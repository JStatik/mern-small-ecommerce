import validator from 'validator';

export const isValidRegisterForm = ( name, email, password ) => {
    let nameValidator = validator.escape( name );
    let emailValidator = validator.escape( email );
    let passwordValidator = validator.escape( password );

    nameValidator = validator.trim( nameValidator );

    emailValidator = validator.trim( emailValidator );
    emailValidator = validator.normalizeEmail( emailValidator, { all_lowercase: false, gmail_remove_dots: false } );

    passwordValidator = validator.trim( passwordValidator );

    if( !validator.isAlpha( nameValidator, [ 'es-ES' ], { ignore: ' ' } ) || validator.isEmpty( nameValidator ) || nameValidator.length < 2 ) {
        return {
            isValid: false,
            errorRegister: 'Ingrese un nombre válido.',
            name: null,
            email: null,
            password: null
        };
    }

    if( !validator.isEmail( emailValidator ) || validator.isEmpty( emailValidator ) ) {
        return {
            isValid: false,
            errorRegister: 'Ingrese un email válido.',
            name: null,
            email: null,
            password: null
        };
    }
    
    if( !validator.isAlphanumeric( passwordValidator, [ 'es-ES' ] ) || validator.isEmpty( passwordValidator ) || passwordValidator.length <= 5 ) {
        return {
            isValid: false,
            errorRegister: 'Ingrese un password válido. Al menos 6 caracteres y alfanúmerico.',
            name: null,
            email: null,
            password: null
        };
    }

    return {
        isValid: true,
        errorRegister: null,
        name: nameValidator,
        email: emailValidator,
        password: passwordValidator
    };
};

export default isValidRegisterForm;
