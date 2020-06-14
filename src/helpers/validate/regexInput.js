
export default function validateValue(value, type) {
    let isValid = true;
    switch (type) {
        case 'alpha':
            isValid = (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/).test(value)
            break;
        case 'dni':
            isValid = (/^(?=.*\d).{5,}$/).test(value)
            break;
        case 'phone':
            isValid = (/^\(?([0-9]{8})\)?$/).test(value)
            break;
        case 'email':
            isValid = (/\S+@\S+\.\S+/).test(value)
            break;
        default:
            console.log('type ---> ', type);
            console.log('inpu type not supported');
            break;
    }
    return isValid
}