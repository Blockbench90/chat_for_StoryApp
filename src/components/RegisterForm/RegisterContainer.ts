import {FormikHelpers, withFormik} from 'formik';


import validateForm from '../../utils/validate';
import RegisterForm from "./RegisterForm";

export interface RegisterValues {
    email: string
    fullName: string
    password: string
    password_2: string
}

export default withFormik({
    //значение по умолчанию, если было касание, чтобы показало валидацию
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        fullName: '',
        password: '',
        password_2: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values: RegisterValues, { setSubmitting }: FormikHelpers<RegisterValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'RegisterForm'
})(RegisterForm);
