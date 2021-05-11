

const MiniCard = ({pic}) => {
    return (
        <>
 <div className="mini-card " style = {{cursor:'pointer',width:'120px',position:'relative'}}>
  <div className="d-flex justify-content-center"><img src= {pic} width = '80px' alt=""  style = {{position:'absolute',top:'-8%'}}/>
      
    </div>
    <div className="d-flex flex-column align-items-center" style = {{position:'absolute',top:'50%'}}>
    <div className="deg">25</div>
    <div className="date">Tue</div>

    </div>
  </div>

        </>
    )
}

export default  MiniCard