import React from "react";
 
const PageNotFound =() => {
    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    };
    return (
        <div style={{textAlign:'center'}}>
            <h3>Page not found</h3>
            <div style={style404}>404</div>
            </div>
            
    );
}
 
export default PageNotFound;