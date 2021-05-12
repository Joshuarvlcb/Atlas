

const MiniCard = ({pic,page, temp, text,miniData,arr,daily}) => {
    return (
        <>
 <div onClick = {() => {
   if(page === 'daily'){
    let clicked = arr.findIndex(obj => {
      return obj.temp == temp
    })
    
    miniData(temp,text,arr[clicked].humidity,arr[clicked].wind_speed,pic)
   }else if(page == 'hour'){
    miniData(daily.t,daily.day ,daily.h,daily.w,pic)
   }


 } } className="mini-card " style = {{cursor:'pointer',width:'120px',position:'relative'}}>
  <div className="d-flex justify-content-center"><img src= {pic} width = '80px' alt=""  style = {{position:'absolute',top:'-8%'}}/>
      
    </div>
    <div className="d-flex flex-column align-items-center" style = {{position:'absolute',top:'50%'}}>
    <div className="deg">{temp}</div>
    <div className="date">{text}</div>

    </div>
  </div>

        </>
    )
}

export default  MiniCard