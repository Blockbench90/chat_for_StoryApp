import {FormikHelpers, withFormik} from 'formik';

import LoginForm from "./LoginForm";
import validateForm from '../../utils/validate';

export interface Values {
    email: string
    password: string
}


const LoginFormContainer = withFormik({
    //значение по умолчанию, если было касание, чтобы показало валидацию
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),

    validate: values => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },

    handleSubmit: (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;
