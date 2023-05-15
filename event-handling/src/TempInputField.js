export default function TempInputField(props) {
  return (
    <>
      <p>Temperature Converter</p>
      <input type="number" onChange={e => props.func(e.target.value)} value={props.value} /> {props.unitofmeasure}
    </>
  );
}