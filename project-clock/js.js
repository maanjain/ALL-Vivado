/**concept of the clock 
 *12 hours - 30 degree per interval + minuite retoation 
 * 60 min = 30 degree rotation =>1 min =1/2 degree rotate 
 * 60 seconds =1/2 degree => M seconds =m/120;
 * 
 * formula = 30P + N/2 + M/120;
 * 
 * {with HOUR  } minutes hand -  60 min=360 =>6M
 *  for seconds 360 ...=>6s
 */

// work as a for loop  
setInterval(() => {
     date = new Date();
    // creating functions
    htime =date.getHours();
    mtime = date.getMinutes();
    stime =date.getSeconds();
    // rotaion variables
    hroto= 30*htime + mtime/2;
    mroto= 6*mtime;
    sroto=6*stime;

    // rotation 
    hour.style.transform =`rotate(${hroto}deg)`
    minute.style.transform =`rotate(${mroto}deg)`
    second.style.transform =`rotate(${sroto}deg)`

}, 1000);
 