import React from "react";
import "./lightbox.css";

const Lightbox = (props) =>{

    const closeLightBox = ()=>{
        const _d = document;
        _d.querySelector(".lightbox").style.display = "none"; 
    }
    return(
        <>
            <section className = 'lightbox'>
                <section className = 'lightbox-content'>
                        <div className = 'message-box'>
                                <div className = 'message-box-header'>
                                    <div className = 'mb-h-title'>
                                        {props.title}
                                    </div>
                                    <div className = 'mbh-close'>
                                        <button value = 'Close' className = 'cl-btn' onClick = {closeLightBox}>Close</button>
                                    </div>    
                                </div> 

                                <div className = 'message-box-body'>
                                    <div className = 'message-box-body-content'>
                                        {props.message}    
                                    </div>    
                                </div>   
                        </div>    
                </section>    
            </section>  
        </>
    );
}

export default Lightbox;