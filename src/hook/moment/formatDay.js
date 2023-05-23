import React from 'react';
import moment from 'moment';

export const momentDayMonthYear = (dateString) => {
  //   const dateString = '2023-05-12T07:28:01.883Z';
  const momentObj = moment(dateString);
  const formattedDate = momentObj.format('DD/MM/YYYY');
  // console.log(formattedDate);
  return formattedDate;
};
