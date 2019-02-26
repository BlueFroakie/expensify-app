import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

test('Should generate set start date action object', () => {
     const action = setStartDate(moment(0));
     expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
     });
});

test('Should generate set end date action object', () => {
   const action = setEndDate(moment(0));
   expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
   });
});

test('Should generate set text filter action object with provided value', () => {
   const text = 'Rent';
   const action = setTextFilter(text);
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
   });
});

test('Should generate set text filter action object with default value', () => {
   const action = setTextFilter();
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
   });
});

test('Should generate set sort by date action object', () => {
   const action = sortByDate();
   expect(action).toEqual({
      type: 'SORT_BY_DATE',
      sortBy: 'date'
   });
});

test('Should generate set sort by amount action object', () => {
   const action = sortByAmount();
   expect(action).toEqual({
      type: 'SORT_BY_AMOUNT',
      sortBy: 'amount'
   });
});

/* You don't need to create an action constant, you can just toss the function inside of expect */
