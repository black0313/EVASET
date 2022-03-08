const validation = (error) => {
    let errors = {};
    // langv1: '',
    // telegram:'',
    // dukon: '',
    // idraqam: '',
    // login: '',
    // loginplaceholder:'Mr/Mrs/Mis',
    // ismi: '',
    // otaismi: '',
    // familiyasi: '',
    // inputsearch: '',
    // tID: '',
    if(!error.langv1){
        errors.langv1 = true;
    }
    return errors;
}

export default validation;