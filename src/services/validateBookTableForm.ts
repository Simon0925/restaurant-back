
import { type } from 'os';
import { FormValues,FormErrors } from '../interface/InterfaceBookTableForm';
import validateBookingTime from './validateBookingTime';

 const validateBookTableForm = (formData:FormValues) => {

    const { name, phoneNumber, email, guests, date, time } = formData;

    const validationErrors:FormErrors = {} 

    if (!name) {
        validationErrors.errorName = 'Name is required';
    } else if (name.length < 2) {
        validationErrors.errorName = 'Name must be at least two characters';
    } else if (!/^[\p{L}' -]+$/u.test(name)) {
        validationErrors.errorName = 'Name can only contain valid letters, spaces, hyphens, and apostrophes';
    }

    if(!phoneNumber){
        validationErrors.errorPhoneNumber = 'Phone number is required';
    }else if (phoneNumber && !/^(?:\+?\d{1,3})?\(?\d{1,5}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/.test(phoneNumber)) {
        validationErrors.errorPhoneNumber = 'Phone number must be a valid format (e.g., +447812312312 or 07812312312)';
    }

    if (!email) {
        validationErrors.errorEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        validationErrors.errorEmail = 'Email address is invalid';
    }

    if (!guests) {
        validationErrors.errorGuests = 'Number of guests is mandatory';
    } else if (isNaN(guests) || guests <= 0) {
        validationErrors.errorGuests = 'Number of guests must be a positive number';
    } else if (guests > 10) {
        validationErrors.errorGuests = 'The number of guests cannot exceed 10';
    }

    if (!date) {
        validationErrors.errorDate = 'Date is required';
    } else {
        const currentDate = new Date(); 
        const inputDate = new Date(date); 

        currentDate.setHours(0, 0, 0, 0);
        inputDate.setHours(0, 0, 0, 0);
    
        if (inputDate < currentDate) {
            validationErrors.errorDate = 'Date cannot be in the past';
        }
    }

    if(!time){
        validationErrors.errorTime = 'Tate is required';
    }

    let validationError  = validateBookingTime(date,time)

    console.log("validationError:",validationError)
    
    if(validationError && time) {
        validationErrors.errorTime = validationError
    }

    return Object.keys(validationErrors).length > 0 ? validationErrors : null;

   
    

}

export default validateBookTableForm