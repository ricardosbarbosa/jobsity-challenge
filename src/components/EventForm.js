import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { DateTimePicker } from 'formik-material-ui-pickers';

function EventForm() {
  return (
    <div>
       <h2>Event</h2>
    
    <Formik
      initialValues={{ reminder: '', datetime: null, city: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form >
          <Field component={TextField} fullWidth name="reminder" type="text" label="Reminder" variant="outlined" margin="normal" size="small"  multiline rows={2} inputProps={{ maxLength: 30}} />
          <Field component={TextField} fullWidth name="city" type="text" label="City" variant="outlined" margin="normal" size="small"/>
          <Field component={DateTimePicker} fullWidth name="datetime" label="Date Time" inputVariant="outlined" margin="normal" size="small"/>
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

