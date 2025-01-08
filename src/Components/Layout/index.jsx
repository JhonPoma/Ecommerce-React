
const Layout= ({children})=>{

    return(
        <>
            <div className='flex flex-col items-center mt-20'>
                {children}  {/* Aquí se renderizamoz el contenido hijo (Home, MyAccount,..) */}
            </div>
        </>
    )
}
export default Layout
