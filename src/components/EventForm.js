import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { DateTimePicker } from 'formik-material-ui-pickers';
import { TwitterPicker } from 'react-color';

function EventForm() {
  return (
    <div>
       <h2>Event</h2>
    
    <Formik
      initialValues={{ reminder: '', start: null, end: null, city: '', color: '#3174ad'}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ values, submitForm, isSubmitting, setFieldValue }) => (
        <Form >
          {JSON.stringify(values)}
          <div style={{ backgroundColor: values.color, padding: 2, color: 'white',
            border:'none',
            boxSizing: 'border-box',
            boxShadow:'none',
            margin:'0',
            padding: '2px 5px',
            borderRadius:'5px', 
            cursor:'pointer',
            width:'100%',
            textAlign:'left',
          }}>
            {values.reminder} - {values.city}
          </div>
          <Field component={TextField} fullWidth name="reminder" type="text" label="Reminder" variant="outlined" margin="normal" size="small"  multiline rows={2} inputProps={{ maxLength: 30}} />
          <Field component={TextField} fullWidth name="city" type="text" label="City" variant="outlined" margin="normal" size="small"/>
          <Field component={DateTimePicker} fullWidth name="start" label="Start Date Time" inputVariant="outlined" margin="normal" size="small"/>
          <Field component={DateTimePicker} fullWidth name="end" label="End Date Time" inputVariant="outlined" margin="normal" size="small"/>
          <TwitterPicker width="100%" style={{justifyContent: 'center'}} triangle='hide' onChange={(color ) => {
            setFieldValue('color', color.hex)
          }}/>
          <h5>Weather: <span>Rain</span></h5>

          
          {isSubmitting && <LinearProgress />}
          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}  margin="normal" size="small">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default EventForm

