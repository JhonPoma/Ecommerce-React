
const OrdenesCard = (propiedades)=>{
    
    const { propFecha, propTotalPrecio, propTotalProductos } = propiedades


    return(
        <>
            <div className="flex justify-between items-center px-1 border border-black my-3">

                <p className="flex flex-col py-3 ">
                    <span>Fecha :{propFecha}</span>
                    <span>TotalProductos : {propTotalProductos}</span>
                    <span>TotalPrecio : {propTotalPrecio}</span>
                </p>
            
            </div>   
        
        </>

    ) 

}

export default OrdenesCard