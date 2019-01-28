/**
 * Function to convert actual time to relative time.
 * 
 * @param {Date} date 
 */
const RelativeTimeConverter = (date) => {

  const currentDate =  Date.now();

  const relativeDate = currentDate - date;
  
  const min = 60 * 1000;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;

  if(relativeDate < min) {
    return 'just now';
  }else if(relativeDate < hour) {
    return parseInt(relativeDate/min)+' minutes ago';
  }else if(relativeDate < day) {
    return parseInt(relativeDate/hour)+' hours ago';
  }else if(relativeDate < week) {
    return parseInt(relativeDate/day) +' days ago';
  }else {
    return parseInt(relativeDate/week) +' weeks ago';
  }
  
};

export default RelativeTimeConverter;
