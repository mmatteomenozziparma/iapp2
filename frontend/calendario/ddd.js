import {itemNodes} from './calendario/eventmodalcal.js'
import React, { Component } from 'react';
import { DropdownDate, DropdownComponent } from 'react-dropdown-date';

const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class DropDownCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, selectedDate: '2012-11-15' };
  }

  render() {
    return (
      <div>

        <DropdownDate
          startDate={                       // optional, if not provided 1900-01-01 is startDate
            this.getDate.today()                   // 'yyyy-mm-dd' format only
          }
          endDate={                         // optional, if not provided current date is endDate
            '2121-12-31'                    // 'yyyy-mm-dd' format only
          }
          selectedDate={                    // optional
            this.state.selectedDate         // 'yyyy-mm-dd' format only
          }
          order={[                          // optional
            DropdownComponent.year,         // Order of the dropdowns
            DropdownComponent.day,
            DropdownComponent.month
          ]}
          onMonthChange={(month) => {       // optional
            console.log(month);
          }}
          onDayChange={(day) => {           // optional
            console.log(day);
          }}
          onYearChange={(year) => {         // optional
            console.log(year);
          }}
          onDateChange={(date) => {         // optional
            console.log(date);
            this.setState({ date: date, selectedDate: formatDate(date) });
          }}
          ids={                             // optional
            {
              year: 'select-year',
              month: 'select-month',
              day: 'select-day'
            }
          }
          names={                           // optional
            {
              year: 'year',
              month: 'month',
              day: 'day'
            }
          }
          classes={                         // optional
            {
              dateContainer: 'classes',
              yearContainer: 'classes',
              monthContainer: 'classes',
              dayContainer: 'classes',
              year: 'classes classes',
              month: 'classes classes',
              day: 'classes classes',
              yearOptions: 'classes',
              monthOptions: 'classes',
              dayOptions: 'classes'
            }
          }
          defaultValues={                   // optional
            {
              year: 'select year',
              month: 'select month',
              day: 'select day'
            }
          }
          options={                         // optional
            {
              yearReverse: true,            // false by default
              monthShort: true,             // false by default
              monthCaps: true               // false by default
            }
          }
        />
      </div>
    );
  }
}

export default DropdDownCalendar;
