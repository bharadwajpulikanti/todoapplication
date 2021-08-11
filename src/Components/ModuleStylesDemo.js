import React from 'react'
import './appStyles.css' //normal css stylesheets import
import styles from './appStyles.module.css' //css modules import

function ModuleStylesDemo() {
    return (
        <div>
            <h1 className={styles.success}>Success</h1>
            <h1 className='error'>Error</h1>  {/* normal css stylesheets*/}
        </div>
    )
}

export default ModuleStylesDemo
