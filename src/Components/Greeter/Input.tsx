type InputProps ={
    value: string;
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value, handleChange}: InputProps) => {
  return (
    <input type="text" 
    onChange={event => handleChange(event)} 
    value={value} 
    />
  )
}

export default Input