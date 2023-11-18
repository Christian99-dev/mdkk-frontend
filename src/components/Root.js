import React from 'react'
import GlobalStyle from '../theme/global'

const Root = ({children}) => {
  return (
    <div>
        <GlobalStyle/>
        {children}
    </div>
  )
}

export default Root