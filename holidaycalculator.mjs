import * as datefns from 'date-fns';

const datefortesting = '07/05/2022';
const columnfortesting = 'observed_holiday'
const country = 'us';

function bqdates(date,column,countryabrv){

//_________________________________________________copy/paste everything below this line

function NationalHeroesDay(date){
  //National Heroes day is the last Monday of August.
  //getMonth is base 0 so January returns as month 0 and december returns as month 11.

  let IsMonday = datefns.isMonday(date);
  let IsAugust = datefns.getMonth(date) == 7;
  let EndOfWeek = datefns.endOfWeek(date);

  // If the end of the week is a different month, then that means the Monday in question is the last Monday.
  let EOWNewMonth = datefns.getMonth(EndOfWeek) > 7;

  //If all below is true, then it will be National Heroes Day
  return  IsMonday && IsAugust && EOWNewMonth

};

function LunarNewYear(date){
  //source - https://en.wikipedia.org/wiki/Chinese_New_Year
  let YearOfDate = datefns.getYear(date);
  
  //for both actual and observed columns, we want to return true. if the columns is 'holiday name' then we return the text name if the date matches.
  switch(YearOfDate){
    case 2022:

      //feb 12th
  
    return  datefns.getMonth(date) == 1 && datefns.getDate(date) == 12

    case 2022:

    //feb 1st

    return  datefns.getMonth(date) == 1 && datefns.getDate(date) == 1

    break;
    case 2023:

    //jan 22nd
    return  datefns.getMonth(date) == 0 && datefns.getDate(date) == 22

    break;
    case 2024:

    //feb 10th
    return  datefns.getMonth(date) == 1 && datefns.getDate(date) == 10

    break;
    case 2025:

    //jan 29th
    return  datefns.getMonth(date) == 0 && datefns.getDate(date) == 29

    break;

    case 2026:

    //feb 17th
    return  datefns.getMonth(date) == 1 && datefns.getDate(date) == 17

    break;

    case 2027:

    //feb 6th
    return  datefns.getMonth(date) == 1 && datefns.getDate(date) == 6


    break;
    case 2028:

    //jan 26th
    return  String(datefns.getMonth(date) == 0 && datefns.getDate(date) == 26)

    break;

    case 2029:

    //feb 13th
    return  String(datefns.getMonth(date) == 1 && datefns.getDate(date) == 13)

    break;

  }
};

function EasterHolidays(date,holidayname){
//source - 
// Js' date function is a base-0 system so the month of march is month 2 and april is month 3. the days are normal.
// date.ToString removes the time component from the date object. without it, even though the dates and times are the same, '===' does not work. 
// let YearOfDate = datefns.getYear(date);
let easterdate;

switch(YearOfDate){

  case 2021:
    //april 4th
    easterdate = new Date(YearOfDate,3,4);
  
    if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
      return true;
    } else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
      return true;
    } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
      return true;
    } else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
      return true;
    } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
      return true;
    }

    break;
  case 2022:
  //april 17th
  easterdate = new Date(YearOfDate,3,17);

  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }

  break;

  case 2023:
  //april 9th
  easterdate = new Date(YearOfDate,3,9);

  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }
  
  break;

  case 2024:
  //march 31st
  easterdate = new Date(YearOfDate,2,31);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }
  
  break;

  case 2025:
  //april 20th
  easterdate = new Date(YearOfDate,3,20);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }
  
  break;

  case 2026:
  //april 5th
  easterdate = new Date(YearOfDate,3,5);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }

  break;

  case 2027:
  //march 28th
  easterdate = new Date(YearOfDate,2,28);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
      return true;
    }
  
  break;

  case 2028:
  //april 16th
  easterdate = new Date(YearOfDate,3,16);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }
  
  break;

  case 2029:
  //april 1st
  easterdate = new Date(YearOfDate,3,1);
  if(date.toDateString() === datefns.subDays(easterdate,3).toDateString() && holidayname == "Maundy Thursday"){
    return true;
  }else if(date.toDateString() === datefns.subDays(easterdate,2).toDateString() && holidayname == "Good Friday"){
    return true;
  } else if(date.toDateString() === datefns.subDays(easterdate,1).toDateString() && holidayname == "Black Saturday"){
    return true;
  }else if(date.toDateString() === easterdate.toDateString() && holidayname == "Easter Sunday"){
    return true;
  } else if(date.toDateString() === datefns.addDays(easterdate,1).toDateString() && holidayname == "Easter Monday"){
    return true;
  }
  
  break;

}

};

const d = new Date(date);
const YearOfDate = datefns.getYear(d);
console.log(datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)))
console.log(datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)) <= 7 && datefns.getMonth(d) == 4 && datefns.isSunday(d))
//fixed means the date does not change. however the day it falls on may in the case of US holidays.
let holidays = 
  {"ph":
    [

      {"observedday": d.toString() == new Date(YearOfDate,0,1) && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,0,1),"name":"New Years Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,1,25).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,1,25).toString(),"name":"People Power Anniversary","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,3,9).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,3,9).toString(),"name":"Araw ng Kagitingan","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,4,1).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,4,1).toString(),"name":"Labor Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,5,12).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,5,12).toString(),"name":"PH Independence Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,10,30).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,10,30).toString(),"name":"Bonifacio Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,11,8).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,11,8).toString(),"name":"Feast of the Immaculate Conception of Mary","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,11,25) && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,11,25),"name":"Christmas Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,11,30).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":new Date(YearOfDate,11,30).toString(),"name":"Rizal Day","type":"fixed"},

      //i don't want the lunar new year function running unless the date is in jan or feb.
      {"observedday": (datefns.getMonth(d) == 0 || datefns.getMonth(d) == 1) ? LunarNewYear(d)  && !datefns.isSaturday(d) && !datefns.isSunday(d): false,"actualday": (datefns.getMonth(d) == 0 || datefns.getMonth(d) == 1) ? LunarNewYear(d) : false,"name":"Lunar New Year","type":"variable"},

      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Maundy Thursday") : false,"actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Maundy Thursday") : false,"name":"Maundy Thursday","type":"variable"},

      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Good Friday") : false,"actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Good Friday") : false,"name":"Good Friday","type":"variable"},
      //I add a !Saturday condition to flip this to false when it's true because observed holidays should be on weekdays.
      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Black Saturday") && !datefns.isSaturday(d): false,"actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Black Saturday") : false,"name":"Black Saturday","type":"variable"},

      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Sunday")  && !datefns.isSaturday(d) && !datefns.isSunday(d) : false, "actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Sunday") : false, "name":"Easter Sunday","type":"variable"},

      //always an aug 21st https://en.wikipedia.org/wiki/Ninoy_Aquino_Day
      {"observedday": d.toString() == new Date(YearOfDate,7,21).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,11,8).toString(),"name":"Ninoy Aquino Day","type":"fixed"},

      //always on november 1st https://www.timeanddate.com/holidays/philippines/all-saints-day
      {"observedday": d.toString() == new Date(YearOfDate,10,1).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,10,1).toString(),"name":"All Saints' Day","type":"fixed"},
      //last monday of August.
      {"observedday": datefns.getMonth(d) == 7 ? NationalHeroesDay(d) : false,"actualday":datefns.getMonth(d) == 7 ? NationalHeroesDay(d) : false,"name":"National Heroes Day","type":"variable"}
    
  
    ],
    //https://www.officeholidays.com/countries/lithuania/2022

    "lt":[
      {"observedday": d.toString() == new Date(YearOfDate,0,1).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,0,1).toString(),"name":"New Years Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,1,16).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,0,1).toString(),"name":"Restoration of the State Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,2,11).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,2,11).toString(),"name":"Restoration of Independence Day","type":"fixed"},

      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Sunday")  && !datefns.isSaturday(d) && !datefns.isSunday(d) : false,"actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Sunday") : false, "name":"Easter Sunday","type":"variable"},

      {"observedday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Monday") && datefns.isMonday(d): false,"actualday": (datefns.getMonth(d) == 2 || datefns.getMonth(d) == 3) ? EasterHolidays(d,"Easter Monday") : false, "name":"Easter Monday","type":"variable"},

      //always May 1st
      {"observedday": d.toString() == new Date(YearOfDate,4,1).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,4,1).toString(),"name":"Labor Day","type":"fixed"},

      //for mother and fathers day, I want to have the logic for the observed day just in case but it needs to return false 
      //because observed holidays are on weekdays.

      //first Sunday of May. If the day is a sunday and it is less than or equal to 7 days from the beginning of the month, it must be the first week.
      {"observedday": datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)) <= 7 && datefns.getMonth(d) == 4 && datefns.isSunday(d) ? false : false ,"actualday":datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)) <= 7 && datefns.getMonth(d) == 4 && datefns.isSunday(d),"name":"Mother's Day","type":"fixed"},

      //First Sunday of June. If the day is a sunday and it is less than or equal to 7 days from the beginning of the month, it must be the first week.
      {"observedday": datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)) <= 7 && datefns.getMonth(d) == 5 && datefns.isSunday(d) ? false : false,"actualday":datefns.differenceInCalendarDays(d,datefns.startOfMonth(d)) <= 7 && datefns.getMonth(d) == 5 && datefns.isSunday(d),"name":"Father's Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,5,24).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,5,24).toString(),"name":"St John's Day","type":"fixed"},
      
      {"observedday": d.toString() == new Date(YearOfDate,6,6).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,6,6).toString(),"name":"Anniversay of the Coronation of King Mindaugas","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,7,15).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,7,15).toString(),"name":"Assumption Day","type":"fixed"},

      //always on november 1st https://www.timeanddate.com/holidays/philippines/all-saints-day
      {"observedday": d.toString() == new Date(YearOfDate,10,1).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,10,1).toString(),"name":"All Saints' Day","type":"fixed"},

      //always on november 1st https://www.timeanddate.com/holidays/philippines/all-saints-day
      {"observedday": d.toString() == new Date(YearOfDate,10,2).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,10,2).toString(),"name":"All Souls Day","type":"fixed"},

      {"observedday": d.toString() == new Date(YearOfDate,11,24).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday":d.toString() == new Date(YearOfDate,10,2).toString(),"name":"Christmas Eve","type":"fixed"},

      {"observedday":d.toString() == new Date(YearOfDate,11,25).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d),"actualday": d.toString() == new Date(YearOfDate,11,25).toString(),"name":"Christmas Day","type":"fixed"},

      //second day of Christmas
      {"observedday":d.toString() == new Date(YearOfDate,11,26).toString() && !datefns.isSaturday(d) && !datefns.isSunday(d), "actualday":d.toString() == new Date(YearOfDate,10,2).toString(),"actualday": d.toString() == new Date(YearOfDate,11,25).toString(),"name":"Second Day of Christmas","type":"fixed"}
    ],

    "us":[

        
        {"observedday": (datefns.addDays(d,1).toString() == new Date(datefns.getYear(datefns.addYears(d,1)),0,1).toString() && datefns.isFriday(d)) || (datefns.subDays(d,1).toString() == new Date(YearOfDate,0,1).toString() && datefns.isMonday(d)) || (d.toString() == new Date(YearOfDate,0,1).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)), "actualday": d.toString() == new Date(datefns.getYear(datefns.addYears(d,1)),0,1).toString(), "name": "New Years Day", "type":"fixed"},
        
        // Labor Day floating Monday between the 1st and 7th of September
        {"observedday": datefns.getMonth(d) == 8 && (datefns.getDate(d) >= 1 && datefns.getDate(d) <= 7 && datefns.isMonday(d)),"actualday":datefns.getMonth(d) == 8 && (datefns.getDate(d) >= 1 && datefns.getDate(d) <= 7 && datefns.isMonday(d)),"name":"Labor Day"},
        
        //Martin Luther King Jr. birthday floating Monday between the 15th and 21st of January.
        {"observedday": datefns.getMonth(d) == 0 && (datefns.getDate(d) >= 25 && datefns.getDate(d) <= 31 && datefns.isMonday(d)),"actualday":datefns.getMonth(d) == 0 && (datefns.getDate(d) >= 25 && datefns.getDate(d) <= 31 && datefns.isMonday(d)),"name":"Martin Luther King Jr. Birthday","type":"variable"},
        
        //Presidents day floating Monday between the 15th and 21st of February.
        {"observedday": datefns.getMonth(d) == 1 && (datefns.getDate(d) >= 15 && datefns.getDate(d) <= 21 && datefns.isMonday(d)),"actualday":datefns.getMonth(d) == 1 && (datefns.getDate(d) >= 15 && datefns.getDate(d) <= 21 && datefns.isMonday(d)),"name":"Presidents Day","type":"variable"},
        
        //Memorial Day floating Monday between the 25th and 31st
        {"observedday": datefns.getMonth(d) == 4 && (datefns.getDate(d) >= 25 && datefns.getDate(d) <= 31) && datefns.isMonday(d),"actualday": datefns.getMonth(d) == 4 && (datefns.getDate(d) >= 5 && datefns.getDate(d) <= 31 && datefns.isMonday(d)),"name":"Memorial Day","type":"variable"},
      
        {"observedday": (datefns.addDays(d,1).toString() == new Date(YearOfDate,5,19).toString() && datefns.isFriday(d)) || (datefns.subDays(d,1).toString() == new Date(YearOfDate,5,19).toString() && datefns.isMonday(d)) || (d.toString() == new Date(YearOfDate,5,19).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)),"actualday":d.toString() == new Date(YearOfDate,5,19).toString(),"name":"Juneteenth National Independence Day","type":"fixed"},
        
        {"observedday": (datefns.addDays(d,1).toString() == new Date(YearOfDate,6,4).toString() && datefns.isFriday(d)) || (datefns.subDays(d,1).toString() == new Date(YearOfDate,6,4).toString() && datefns.isMonday(d)) || (d.toString() == new Date(YearOfDate,6,4).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)),"actualday":d.toString() == new Date(YearOfDate,6,4).toString(),"name":"US Independence Day","type":"fixed"},
        
        //Columbus Day floating Monday between the 8th and 14th of October
        {"observedday": datefns.getMonth(d) == 9 && (datefns.getDate(d) >= 8 && datefns.getDate(d) <= 14 && datefns.isMonday(d)),"actualday":datefns.getMonth(d) == 9 && (datefns.getDate(d) >= 8 && datefns.getDate(d) <= 14 && datefns.isMonday(d)),"name":"Columbus Day","type":"fixed"},
        
        {"observedday": (datefns.addDays(d,1).toString() == new Date(YearOfDate,10,11).toString() && datefns.isFriday(d)) || (datefns.subDays(d,1).toString() == new Date(YearOfDate,10,11).toString() && datefns.isMonday(d)) || (d.toString() == new Date(YearOfDate,10,11).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)),"actualday": d.toString() == new Date(YearOfDate,10,11).toString(),"name":"Veterans Day","type":"fixed"},
        
        {"observedday": datefns.getMonth(d) == 10 && (datefns.getDate(d) >= 22 && datefns.getDate(d) <= 28 && datefns.isThursday(d)),"actualday":datefns.getMonth(d) == 10 && (datefns.getDate(d) >= 22 && datefns.getDate(d) <= 28 && datefns.isThursday(d)),"name":"Thanksgiving Day","type":"variable"},
        
        //Since we expect thanksgiving day to be within the 22nd to 28, I move that range forward 1 day to look for the day after thanksgiving. 
        {"observedday": datefns.getMonth(d) == 10 && (datefns.getDate(d) >= 23 && datefns.getDate(d) <= 29 && datefns.isFriday(d)),"actualday":datefns.getMonth(d) == 10 && (datefns.getDate(d) >= 23 && datefns.getDate(d) <= 29 && datefns.isFriday(d)),"name":"Day after Thanksgiving","type":"variable"},

        //In 2021, Christmas landed on a Saturday. this would normally be observed on Friday but Christmas Eve is also a holiday. Christmas logic is unique compared to others. Essentially, we tend to wrap Christmas around a weekend. So Even though Christmas Eve might be on a Sunday, we observe it on Friday. For Christmas Eve, I check 1 and 2 days into the future and if the day is friday then that is the observed day. 

        //For Christmas Day, I effectively do the opposite of Christmas Eve. So if 1 or 2 days back is saturday or sunday, then that means the date is a monday and that is the observed day. The other condition for both is if the day falls on the exact day AND it's not a saturday or sunday.

        //Christmas Eve

        {"observedday": (datefns.addDays(d,1).toString() == new Date(YearOfDate,11,24).toString() && datefns.isFriday(d)) || (datefns.addDays(d,2).toString() == new Date(YearOfDate,11,24).toString() && datefns.isFriday(d)) || (d.toString() == new Date(YearOfDate,11,24).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)),"actualday": d.toString() == new Date(YearOfDate,11,24).toString(),"name":"Christmas Eve","type":"fixed"},

        //this returns true if the holiday lands on the exact day, a saturday or a sunday.

        {"observedday":(datefns.subDays(d,1).toString() == new Date(YearOfDate,11,25).toString() && datefns.isMonday(d)) || (datefns.subDays(d,2).toString() == new Date(YearOfDate,11,25).toString() && datefns.isMonday(d)) || (d.toString() == new Date(YearOfDate,11,25).toString() && !datefns.isSaturday(d)  && !datefns.isSunday(d)),"actualday": d.toString() == new Date(YearOfDate,11,25).toString(),"name":"Christmas Day","type":"fixed"}

    ]
  }
  //Switch based on what country is calling this function.
  //In all conditions, I add a length and undefined qualifier. TODO: try to rewrite this with a try catch.
  //All data returned must be a string otherwise the function will fail. 
  switch(countryabrv){

    case 'lt':
      switch (column) {

        case 'observed_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['observedday'] ==true)[0]['observedday'])

          } else {return String(false)}

          break;

        case 'actual_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['actualday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['actualday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['actualday'] ==true)[0]['actualday'])

          } else {return String(false)}

          break;  


        default: 

          String(false);

          break;
      }
      // return column == 'observed_holiday'  && holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined ? String(holidays[countryabrv].filter(holiday => holiday['observedday'] ==true)[0]['observedday']) : column == 'actual_holiday' && holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined ? String(holidays[countryabrv].filter(holiday => holiday['observedday'] == true)[0]['observedday']) : String(false)

    break;
    
    case 'ph':

      switch (column) {

        case 'observed_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['observedday'] ==true)[0]['observedday'])

          } else {return String(false)}

          break;

        case 'actual_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['actualday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['actualday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['actualday'] ==true)[0]['actualday'])

          } else {return String(false)}

          break;  


        default: 

          String(false);

          break;
      }



    // return column == 'observed_holiday'  && holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined ? String(holidays[countryabrv].filter(holiday => holiday['observedday'] ==true)[0]['observedday']) : column == 'actual_holiday' && holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined ? String(holidays[countryabrv].filter(holiday => holiday['observedday'] == true)[0]['observedday']) : String(false)
    
    break;
    
    case 'us':
      switch (column) {

        case 'observed_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['observedday'] ==true)[0]['observedday'])

          } else {return String(false)}

          break;

        case 'actual_holiday':
          
          if(holidays[countryabrv].filter(holiday => holiday['actualday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['actualday'] == true) !== undefined){

            return String(holidays[countryabrv].filter(holiday => holiday['actualday'] ==true)[0]['actualday'])

          } else {return String(false)}

          break;  


        default: 

          String(false);

          break;
      }
      // return column == 'observed_holiday' && holidays[countryabrv].filter(holiday => holiday['observedday'] == true).length > 0 && holidays[countryabrv].filter(holiday => holiday['observedday'] == true) !== undefined ? String(holidays[countryabrv].filter(holiday => holiday['observedday'] == true)[0]['observedday']) : column == 'actual_holiday' && holidays[countryabrv].filter(holiday => holiday['actualday'] == true) !== undefined && holidays[countryabrv].filter(holiday => holiday['actualday'] == true).length > 0 ? String(holidays[countryabrv].filter(holiday => holiday['actualday'] == true)[0]['actualday']) : String(false)
    
      break;
    case 'all':
      //this spread operator helps put all 3 objects into a single array to iterate on.
      let holidayspread = [...holidays['us'],...holidays['ph'],...holidays['lt']];
      //The holiday name should appear on the actual day or observed day so that we can have it available for filtering both types.
      return holidayspread.filter(holiday => holiday['observedday'] == true || holiday['actualday'] == true).length > 0 ? holidayspread.filter(holiday => holiday['observedday'] == true || holiday['actualday'] == true)[0]['name'] : ''
    
    }


//________________________________________________________________________________copy do not copy anything below this line.
}


let randomtesting = 
[
  {"date":'05/16/22',"column":'actual_holiday',"country":'lt'},
  {"date":'04/15/22',"column":'observed_holiday',"country":'lt'},
  {"date":'04/16/22',"column":'observed_holiday',"country":'lt'},
  {"date":'11/11/22',"column":'observed_holiday',"country":'us'},
  {"date":'01/01/23',"column":'observed_holiday',"country":'us'},
  {"date":'02/01/22',"column":'actual_holiday',"country":'ph'},
  {"date":'11/24/22',"column":'actual_holiday',"country":'us'},
  {"date":'11/24/22',"column":'observed_holiday',"country":'us'}
]


  for (let index = 0; index < randomtesting.length; index++) {
    
    const date = randomtesting[index];
    console.log(date);
    console.log(bqdates(date['date'],date['column'],date['country']))
    
  };






