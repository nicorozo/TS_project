type GreetProps ={
    text:string;
    messageCount?: number;
    isLoggedIn:boolean;
}

const Greeter = (props: GreetProps) => {
    
    // this is in case that messageCount is not defined
    const { messageCount = 10 } = props
  return (
    <h1>
        {props.isLoggedIn ? props.text + messageCount
    : 'Please log in'    
    }
    </h1>
  )
}

export default Greeter