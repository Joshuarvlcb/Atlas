const Header = ({logo}) => {
    return (
        <>
          <div style = {{height:'15%',color:'white',fontSize:'22px',fontWeight:'500'}} className = 'col d-flex justify-content-center align-items-center ' >
                <div style = {{color:'#4FA1CA'}} > <img height = '40px'src = {logo} className = 'padding'></img> ATLAS</div>
          </div>
        </>
    )
}

export default Header