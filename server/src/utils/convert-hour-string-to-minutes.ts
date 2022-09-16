//18:00 ---> 1080

export function convertHoursStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)

    const minutesAmaunt = (hours * 60) + minutes;

    return minutesAmaunt;
}