const Header = ({logo}) => {
    return (
        <>
          <div className = 'row logo-con' style = {{height:'50px',color:'white',fontSize:'22px',fontWeight:'500'}}  >
                <div className = 'col d-flex justify-content-center align-items-center '> <img height = '40px'src = {logo} className = 'padding'></img> ATLAS</div>
          </div>
        </>
    )
}

export default Header