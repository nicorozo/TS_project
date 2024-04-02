
type StatusProps ={
    status: 'success' | 'error' | 'loading'
}

const Status = (props: StatusProps) => {
    let message 
    if(props.status === 'success'){
        message = props.status
    }else if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'error'){
        message = '<> Error <>'
    }
  return (
    <div>{message}</div>
  )
}

export default Status