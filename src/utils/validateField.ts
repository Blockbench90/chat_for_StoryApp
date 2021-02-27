//валидация инпутов на касание (touched)

const validateField = (key: any, touched: any, errors: any) => {
  if (touched[key]) {
    if (errors[key]) {
      return "error";
    } else {
      return "success";
    }
  } else {
    return "";
  }
};
export default validateField
