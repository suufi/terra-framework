(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1005:function(e,n){},1998:function(e,n,t){"use strict";t.r(n),n.default="# Validation Events\n\n## Dynamic Validation\n\nThe default behavior of *react-final-form* is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below.\n\n```jsx\nimport React from 'react';\nimport { Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\n\n  <Field\n    name=\"description\"\n  >\n    {({ input, meta, placeholder, ...rest }) => (\n      <InputField\n        {...rest}\n        label=\"Description\"\n        error={meta.error}\n        isInvalid={!meta.valid}\n        required\n        onChange={(e) => {input.onChange(e.target.value);}}\n        value={input.value}\n        inputAttrs={{\n          type: 'text',\n          ...input,\n        }}\n      />\n    )}\n  </Field>\n```\n\n## Display Validation onSubmit\n\nForms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below.\n\n```jsx\nimport React from 'react';\nimport { Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\n\n<Field\n  name=\"description\"\n>\n  {({ input, meta, placeholder, ...rest }) => (\n    <InputField\n      {...rest}\n      label=\"Description\"\n      error={meta.error}\n      isInvalid={meta.submitFailed && meta.error !== undefined}\n      required\n      onChange={(e) => {input.onChange(e.target.value);}}\n      value={input.value}\n      inputAttrs={{\n        type: 'text',\n        ...input,\n      }}\n    />\n  )}\n</Field>\n```\n\n## Disable form submission for an invalid form\n\nThe form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not.\n\nExample\n\n```jsx\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\n\n  render() {\n    return (\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        >\n        </Form>\n    );\n  }\n\n  renderForm({ handleSubmit, reset, submitting, pristine, values, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <h1>Hello People!</h1>\n        <Field\n          name=\"profile\"\n          type=\"text\"\n          validate={required}>\n          {({ input, meta, placeholder, ...rest }) => (\n            <InputField\n              {...rest}\n              label=\"Profile\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error}\n              required\n              onChange={(e) => {input.onChange(e.target.value);}}\n              value={input.value}\n              inputAttrs={{\n                type: 'text',\n                ...input,\n              }}\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT}/>\n      </form>\n    );\n  }\n\n```\n\nConsult [react-final-form](https://github.com/final-form/react-final-form) for further functionality that can be used.\n"},1999:function(e,n,t){"use strict";var r=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(163)),i=r(t(20)),l=r(t(22)),u=r(t(23)),o=r(t(24)),d=r(t(27)),s=r(t(25)),m=r(t(1139)),c=r(t(1140)),p=r(t(0)),f=t(1079),h=r(t(1080)),v=r(t(54)),b=r(t(363));function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(){var e=(0,c.default)(m.default.mark((function e(n){var t;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return n.length<3?e("Not long enough"):e("TerraUser"===n?"Name is Unavailable":"")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,u.default)(this,(0,o.default)(n).call(this,e))).state={},t.submitForm=t.submitForm.bind((0,d.default)(t)),t}return(0,s.default)(n,e),(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"profile-description",label:"Description",error:t.error,isInvalid:!t.valid,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:t.error,isInvalid:"Name is Unavailable"===t.error,isIncomplete:"Not long enough"===t.error||"Required"===t.error,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(p.default.Component);n.default=k},2e3:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n"},2001:function(e,n,t){"use strict";var r=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(163)),i=r(t(20)),l=r(t(22)),u=r(t(23)),o=r(t(24)),d=r(t(27)),s=r(t(25)),m=r(t(0)),c=t(1079),p=r(t(1080)),f=r(t(1202)),h=r(t(1518)),v=r(t(357)),b=r(t(1516)),F=r(t(1517)),g=r(t(54)),y=r(t(363)),k=r(t(375));function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){return e&&e.length>0?void 0:"Required"},E=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,u.default)(this,(0,o.default)(n).call(this,e))).state={},t.submitForm=t.submitForm.bind((0,d.default)(t)),t}return(0,s.default)(n,e),(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.errors,r=e.submitFailed;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(c.Field,{name:"description",validate:C},(function(e){var n=e.input,t=e.meta;return m.default.createElement(p.default,{inputId:"description",label:"Description",error:t.error,isInvalid:t.submitFailed,inputAttrs:O({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement("div",null,m.default.createElement(F.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==t.meal,error:t.meal},m.default.createElement(c.Field,{name:"meal",type:"radio",value:"chicken",validate:C,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:O({},n),labelText:"Chicken",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"vegetarian",validate:C,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:O({},n),labelText:"Vegetarian",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"fish",validate:C,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:O({},n),labelText:"Fish",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),m.default.createElement(c.Field,{name:"travel",type:"select",validate:C,component:function(e){var n=e.input,t=e.meta;return m.default.createElement(v.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:t.submitFailed&&void 0!==t.error,error:t.error},m.default.createElement(k.default,{id:"airliner",name:n.name,onChange:function(e){n.onChange(e)},defaultValue:n.value,placeholder:"Select an Airline"},m.default.createElement(k.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),m.default.createElement(k.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),m.default.createElement(k.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),m.default.createElement("div",null,m.default.createElement(h.default,{legend:"What are all the conference tracks you plan on attending?",error:t.tracks,isInvalid:r&&void 0!==t.tracks},m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:C,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:O({},n),labelText:"Developer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:C,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:O({},n),labelText:"Designer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:C,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:O({},n),labelText:"Soft skills",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),m.default.createElement(g.default,{text:"Submit",type:g.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(y.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component);n.default=E},2002:function(e,n,t){"use strict";t.r(n),n.default='/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={{\n                placeholder: \'Description\',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n'},2003:function(e,n,t){"use strict";var r=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(163)),i=r(t(20)),l=r(t(22)),u=r(t(23)),o=r(t(24)),d=r(t(27)),s=r(t(25)),m=r(t(1139)),c=r(t(1140)),p=r(t(0)),f=t(1079),h=r(t(1080)),v=r(t(54)),b=r(t(363));function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(){var e=(0,c.default)(m.default.mark((function e(n){var t;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,u.default)(this,(0,o.default)(n).call(this,e))).state={},t.submitForm=t.submitForm.bind((0,d.default)(t)),t}return(0,s.default)(n,e),(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"description-input",label:"Description",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"user-name-disabled",label:"User Name",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:g({placeholder:"Description"},n),value:n.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",isDisabled:r||t,type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(p.default.Component);n.default=k},2004:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n"},2345:function(e,n,t){"use strict";var r=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1004)),l=r(t(1998)),u=r(t(1999)),o=r(t(2e3)),d=r(t(2001)),s=r(t(2002)),m=r(t(2003)),c=r(t(2004)),p=function(){return a.default.createElement(i.default,{readme:l.default,examples:[{title:"Validation onInput",example:a.default.createElement(u.default,null),source:o.default},{title:"Validation onSubmit",example:a.default.createElement(d.default,null),source:s.default},{title:"Validation Disable Submit",example:a.default.createElement(m.default,null),source:c.default}]})};n.default=p}}]);
//# sourceMappingURL=138-1d802f8e99adb3d90475.js.map