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
});

const EventForm = ({  initialValues,  onClickDelele = ()=>{},  onAddEvent = ()=>{},onUpdateEvent = ()=>{}, onCancel = ()=>{}}) => (
  <div>
    <h2>Event</h2>
    <Formik
      enableReinitialize={true}
      initialValues={
        {
          title: initialValues.title || '',
          city: initialValues.city || '',
          color: initialValues.color || '#ff6900',
          start: initialValues.start || null,
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
      {({ values, errors, touched, handleBlur, submitForm, isSubmitting, setFieldValue, isValid }) => (
        <Form >
          <TwitterPicker width="100%" style={{ justifyContent: 'center' }} triangle='hide' onChange={(color) => {
            setFieldValue('color', color.hex)
          }} />
          <Field required component={TextField} fullWidth name="title" type="text" label="Reminder" variant="outlined" margin="normal" size="small" multiline rows={2} inputProps={{ maxLength: 30 }} InputLabelProps={{ shrink: true }}  />
          <Field required component={TextField} fullWidth name="city" type="text" label="City" variant="outlined" margin="normal" size="small" InputLabelProps={{ shrink: true }}  />
          <Field required component={DateTimePicker} fullWidth name="start" label="Date and time"  inputVariant="outlined" margin="normal" size="small" InputLabelProps={{ shrink: true }} 
            helperText={touched.start && errors.start} value={values.start} error={touched.start && !!errors.start } showTodayButton
            onBlur={handleBlur} onChange={(date) => setFieldValue('start',moment(date))} />

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

