import Col from 'react-bootstrap/Col'

const Cards = ({src,name}) => {

    return (
        <>

<div style = {{padding:'0px',cursor:'pointer'}} ><img src= {src} height = '120px'alt="" style = {{borderRadius:'15px',marginBottom:'5px'}} />

<div style = {{fontWeight:'500',textAlign:'center'}}>{name}</div>

</div>


        </>
    )


}
export default Cards