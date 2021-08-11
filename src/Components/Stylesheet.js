import React from 'react'
import './myStyles.css'
function Stylesheet({applyPrimaryStyle}) {
    let classname = applyPrimaryStyle ? 'primary' : 'secondary'
    return (
        <div>
            <h2 className={`${classname} fontsize`}>Style Sheet</h2> 
        </div>
    )
}

export default Stylesheet
