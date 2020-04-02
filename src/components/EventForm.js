import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { DateTimePicker } from '@material-ui/pickers'
import { TwitterPicker } from 'react-color'
import moment from 'moment'

import * as Yup from 'yup';

const EventSchema = Yup.object().shape({
  title: Yup.string().min(1, 'Too Short!').max(30, 'Too Long!').required('Required'),
  city: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!').required('Required'),
  color: Yup.string().required('Required'),
  start: Yup.date().required('Required').nullable(),
  // end: Yup.date().required('Required').min(Yup.ref('start', 'End date must be later or equal than start date')),
  end: Yup.date().required('Required').nullable().min(Yup.ref('start', 'End date must be later or equal than start date')),
    
});

const EventForm = ({  initialValues,  onClickDeleleAll = ()=>{},  onClickDelele = ()=>{},  onAddEvent = ()=>{},onUpdateEvent = ()=>{}, onCancel = ()=>{}}) => (
  <div>
    <h2>Event</h2>
    <Formik
      enableReinitialize={true}
      initialValues={
        {
          title: initialValues.title || '',
          city: initialValues.city || '',
          color: initialValues.color || '#22194D',
          start: initialValues.start || null,
          end: initialValues.end || null,
        }
      }
      validationSchema={EventSchema}
      onSubmit={(values, { setSubmitting , resetForm }) => {
        setTimeout(() => {
          initialValues.id ? onUpdateEvent({id: initialValues.id, ...values}) : onAddEvent(values)
          setSubmitting(false)
          resetForm({})
        }, 1000)
      }}
    >
      {({ values, errors, touched, handleBlur, handleChange, setFieldTouched, submitForm, isSubmitting, setFieldValue, isValid }) => (
        <Form >
          <TwitterPicker width="100%" style={{ justifyContent: 'center' }} triangle='hide' onChange={(color) => {
            setFieldValue('color', color.hex)
          }} />
          <Field required component={TextField} fullWidth name="title" type="text" label="Reminder" variant="outlined" margin="normal" size="small" multiline rows={2} inputProps={{ maxLength: 30 }} InputLabelProps={{ shrink: true }}  />
          <Field required component={TextField} fullWidth name="city" type="text" label="City" variant="outlined" margin="normal" size="small" InputLabelProps={{ shrink: true }}  />
          <Field required component={DateTimePicker} 
          helperText={touched.start && errors.start}
          value={values.start}
          error={touched.start && !!errors.start } 
          onBlur={handleBlur}
          onChange={(date) => {
            setFieldValue('start',moment(date))
          }}
           showTodayButton fullWidth id="start" name="start" label="Start Date Time" inputVariant="outlined" margin="normal" size="small" InputLabelProps={{ shrink: true }} />
          <Field required component={DateTimePicker} 
          helperText={ touched.end && errors.end }
          value={values.end}
          error={touched.end && !!errors.end} 
          onBlur={handleBlur}
          onChange={(date) => {
            setFieldValue('end',moment(date))
          }}  showTodayButton fullWidth id="end"  name="end" label="End Date Time" inputVariant="outlined" margin="normal" size="small" InputLabelProps={{ shrink: true }}  />
          
          <h5>Weather: <span>Rain</span></h5>

          {isSubmitting && <LinearProgress />}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr'}}>
              <Button variant="contained" color="primary" disabled={isSubmitting || !isValid} margin="normal" onClick={submitForm} >
                Submit
              </Button>
              <Button variant="outlined" color="secondary" disabled={isSubmitting} margin="normal" onClick={onCancel} >
                Clear
              </Button>
            </div>
            {initialValues.id && <Button variant="contained" color="secondary" disabled={isSubmitting} margin="normal" onClick={onClickDelele} >
              Delete
            </Button>}
          </div>
        </Form>
      )}
    </Formik>
  </div>
)
export default EventForm

