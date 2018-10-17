const validate = (value, rules) => {
  let isValid = true;
  
  for (let rule in rules) {
  
    switch (rule) {
      	case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
        
        case 'isRequired': isValid = isValid && requiredValidator(value); break;
		    
        case 'isEmail': isValid = isValid && emailValidator(value); break;
        
      	default: isValid = true;
    }

  }
  
  return isValid;
}


/**
 * minLength Val
 * @param  value 
 * @param  minLength
 * @return          
 */
const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

/**
 * Check to confirm that feild is required
 * 
 * @param  value 
 * @return       
 */
const requiredValidator = value => {
    return value.trim() !== '';	
}

/**
 * Email validation
 * 
 * @param value
 * @return 
 */
const emailValidator = value => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}



export default validate;