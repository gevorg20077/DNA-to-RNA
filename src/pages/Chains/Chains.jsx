import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { addValueRNA } from "../../store/slices/valueRNA/valueRNA";
import './chains.css'

const Chains = () => {
  const dispatch = useDispatch()
  const valueRNA = useSelector(state => state.valueRNA)
  const validateDNA = (value) => {
    if (!/^[ACGTacgt ]+$/.test(value)) {
      dispatch(addValueRNA(''))
      return 'Your message is incorrect';
    } else {
      return ''
    }
  }
  const createRNA = (value) => {
    const filter = value.dnaValue.toUpperCase()
      .replace(/A/g, "U")
      .replace(/C/g, "x")
      .replace(/G/g, "C")
      .replace(/T/g, "A")
      .replace(/x/g, "G");
    dispatch(addValueRNA(filter))
  };
  return (
    <Formik initialValues={{ dnaValue: "" }} onSubmit={value => { createRNA(value) }}>
      <Form className="DNA_to_RNA">
        <h1 className="DNA_to_RNA__text_DNA">Write DNA</h1>
        <Field className="DNA_to_RNA__input_DNA" type="text" name="dnaValue" validate={validateDNA} />
        <button className="DNA_to_RNA__button" type='submit'>Submit</button>
        <ErrorMessage className="DNA_to_RNA__error_DNA" component="p" name="dnaValue" />
        {valueRNA && <p className="DNA_to_RNA__value_RNA">RNA: <b>{valueRNA}</b></p>}
      </Form>
    </Formik>
  )
}

export default Chains