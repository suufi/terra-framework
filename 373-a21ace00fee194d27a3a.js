(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1005:function(e,t){},1922:function(e,t,a){"use strict";a.r(t),t.default="# Terra Date Time Picker Upgrade Guide\n\n## Changes from version 3 to version 4\n\n### Removed props\n* Removed `minDateTime`\n* Removed `maxDateTime`\n* Removed `releaseFocus`\n* Removed `requestFocus`\n\n### New props\n* Added `minDate`\n* Added `maxDate`\n* Added `onBlur`\n* Added `onFocus`\n* Added `onClickOutside`\n\n### Changes to minDate and maxDate\nThe time portion of the ISO date provided in the old `minDateTime` and `maxDateTime` props are now being ignored in the internal validation implementation and checking for ranges. Hence, these two props are renamed from `minDateTime` and `maxDateTime` to `minDate` and `maxDate` respectively. To uplift change `minDateTime` to `minDate` and `maxDateTime` to `maxDate` where applicable.\n\n### Changes to onBlur and onFocus\n\nThe `onBlur` and `onFocus` props previously could be passed down as custom props. These props have now become first-class props. The `onFocus` prop used to be triggered when focus is moved from one date time element to another date time element of the same date-time-picker component. For example, the focus is moved from the date input to the hour input.  The `onFocus` prop will still be triggered if the date time picker component did not have focus and now just gained focus. However, if the focus is then moved from one date time element to another date time element, the `onFocus` callback now would not be triggered because the focus is still within the date time picker container. The `onBlur` callback now behaves similar to the `onFocus` callback where `onBlur` would not be triggered when focus is transfered from one date time element to another date time element of the same date-time-picker component. The `onBlur` callback would be triggered only when focus is lost from the entire date time picker component.\n\n### Changes to filterDate\nThe parameter in the `filterDate` callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks. To uplift create a new moment using the iSO date in the parameter.\n\n```diff\nimport React from 'react';\nimport moment from 'moment';\nimport DateTimePicker from 'terra-date-time-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DateTimePicker\n        name=\"date-time-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n```\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-date-time-clarification-modal-background-color | --terra-date-time-picker-clarification-modal-background-color |\n| --terra-date-time-clarification-modal-border | --terra-date-time-picker-clarification-modal-border |\n| --terra-date-time-clarification-modal-border-radius | --terra-date-time-picker-clarification-modal-border-radius |\n| --terra-date-time-clarification-modal-box-shadow | --terra-date-time-picker-clarification-modal-box-shadow |\n| --terra-date-time-clarification-modal-foreground-color | --terra-date-time-picker-clarification-modal-color |\n\n#### Added\n* --terra-date-time-picker-clarification-header-background-color\n* --terra-date-time-picker-clarification-header-border-bottom-color\n* --terra-date-time-picker-clarification-header-color\n* --terra-date-time-picker-clarification-header-height\n* --terra-date-time-picker-clarification-header-padding\n* --terra-date-time-picker-clarification-title-font-size\n* --terra-date-time-picker-clarification-title-line-height\n* --terra-date-time-picker-clarification-button-offset-background-color\n* --terra-date-time-picker-clarification-button-offset-height\n"},2329:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(1004)),i=n(a(1922)),d=function(){return r.default.createElement(o.default,{packageName:"terra-date-time-picker",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-date-time-picker",readme:i.default})};t.default=d}}]);
//# sourceMappingURL=373-a21ace00fee194d27a3a.js.map