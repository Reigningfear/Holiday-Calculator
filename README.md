# Holiday-Calculator

This code was originally designed to work with BigQuery as a JavaScript UDF. This script requires 'date-fns' which can be found at https://date-fns.org/. At some point I may expand this to work with more countries and make it more modular but for now it works as is.

To make this work as a UDF in BigQuery, you will need to add the js code inside of the function and ensure you've webpacked the 'date-fns' and uploaded it to a bucket you have permission to. I named my export 'datefns.js' which is how you will access the functions in the UDF; example datefns.getMonth(date). I found this article helpful when putting all of these puzzle pieces together - https://medium.com/analytics-vidhya/using-npm-library-in-google-bigquery-udf-8aef01b868f4.

This Script calculates 2 holiday variations: Observed and Actual holidays. Observed Holidays can only occur on weekdays and not all countries actually observe holidays. The Philippines and Lithuania for example do not have the day off if a holiday lands on the weekend. That is where the 'actual holiday' part comes in. In case there are businesses that do work weekends, the actual holiday returns true and can be filtered in the BigQuery table. 

To make this work with a table, you will need to add 2 columns for each country: 'observed_holiday' and 'actual_holiday'. To make this work for more countries, simply add a new object in the 'holidays' array that contains an array of all of the holidays with the applicable logic to calculate the day. Then, add the country case to the switch statement that switches on the country. Add functions as needed for specific holiday cases as has been done for Lunar New year and National Heroes Day.

The BQ query foundation was pulled from this helpful starting point - https://gist.github.com/ewhauser/d7dd635ad2d4b20331c7f18038f04817.
