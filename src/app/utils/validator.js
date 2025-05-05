export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    if (data === undefined || data === null) {
      return config.message;
    }

    let statusValidate = false;
    const stringData = String(data);

    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValidate = !data;
        } else {
          statusValidate = stringData.trim() === "";
          break;
        }
      }
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(stringData);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(stringData);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(stringData);
        break;
      }
      case "min": {
        statusValidate = stringData.length < config.value;
        break;
      }
      default:
        break;
    }

    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    if (config[fieldName]) {
      for (const validateMethod in config[fieldName]) {
        const error = validate(
          validateMethod,
          data[fieldName],
          config[fieldName][validateMethod]
        );
        if (error && !errors[fieldName]) {
          errors[fieldName] = error;
        }
      }
    }
  }

  return errors;
}
