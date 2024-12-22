function validateBookingTime(date: string, time: string) {

    const currentDate = new Date(); 

    const millisecondsCurrentDate = new Date(currentDate).getTime();


    const millisecondsDate = new Date(`${date}T${time}:00`).getTime();


    const [hour, minute] = time.split(":").map(Number);
    if (isNaN(hour) || isNaN(minute)) {
        return 'Invalid time format';
    }

    if (hour < 10 || hour > 23 || (hour === 23 && minute > 59)) {
        return 'Time must be between 10:00 AM and 11:00 PM';
    }


    if (millisecondsCurrentDate > millisecondsDate) {
        return 'Time cannot be in the past';
    }

    return null; 
}

export default validateBookingTime;
