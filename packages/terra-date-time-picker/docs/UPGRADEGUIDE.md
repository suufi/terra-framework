# Terra Date Time Picker Upgrade Guide

## Changes from version 3 to version 4

### Removed props
* Removed `minDateTime`
* Removed `maxDateTime`
* Removed `releaseFocus`
* Removed `requestFocus`

### New props
* Added `minDate`
* Added `maxDate`
* Added `onBlur`
* Added `onFocus`
* Added `onClickOutside`

### Changes to minDate and maxDate
The time portion of the ISO date provided in the old `minDateTime` and `maxDateTime` props are now being ignored in the internal validation implementation and checking for ranges. Hence, these two props are renamed from `minDateTime` and `maxDateTime` to `minDate` and `maxDate` respectively. To uplift change `minDateTime` to `minDate` and `maxDateTime` to `maxDate` where applicable.

### Changes to onBlur and onFocus

The `onBlur` and `onFocus` props previously could be passed down as custom props. These props have now become first-class props. The `onFocus` prop used to be triggered when focus is moved from one date time element to another date time element of the same date-time-picker component. For example, the focus is moved from the date input to the hour input.  The `onFocus` prop will still be triggered if the date time picker component did not have focus and now just gained focus. However, if the focus is then moved from one date time element to another date time element, the `onFocus` callback now would not be triggered because the focus is still within the date time picker container. The `onBlur` callback now behaves similar to the `onFocus` callback where `onBlur` would not be triggered when focus is transfered from one date time element to another date time element of the same date-time-picker component. The `onBlur` callback would be triggered only when focus is lost from the entire date time picker component.

### Changes to filterDate
The parameter in the `filterDate` callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks. To uplift create a new moment using the iSO date in the parameter.

```diff
import React from 'react';
import moment from 'moment';
import DateTimePicker from 'terra-date-time-picker';

class Default extends React.Component {
  constructor() {
    super();
    this.handleFilterDate = this.handleFilterDate.bind(this);
  }

  handleFilterDate(date) {
+   const momentDate = moment(date)
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  render() {
    return (
      <DateTimePicker
        name="date-time-picker"
        filterDate={this.handleFilterDate}
      />
    );
  }
}

export default Default;
```

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-date-time-clarification-modal-background-color | --terra-date-time-picker-clarification-modal-background-color |
| --terra-date-time-clarification-modal-border | --terra-date-time-picker-clarification-modal-border |
| --terra-date-time-clarification-modal-border-radius | --terra-date-time-picker-clarification-modal-border-radius |
| --terra-date-time-clarification-modal-box-shadow | --terra-date-time-picker-clarification-modal-box-shadow |
| --terra-date-time-clarification-modal-foreground-color | --terra-date-time-picker-clarification-modal-color |

#### Added
* --terra-date-time-picker-clarification-header-background-color
* --terra-date-time-picker-clarification-header-border-bottom-color
* --terra-date-time-picker-clarification-header-color
* --terra-date-time-picker-clarification-header-height
* --terra-date-time-picker-clarification-header-padding
* --terra-date-time-picker-clarification-title-font-size
* --terra-date-time-picker-clarification-title-line-height
* --terra-date-time-picker-clarification-button-offset-background-color
* --terra-date-time-picker-clarification-button-offset-height
