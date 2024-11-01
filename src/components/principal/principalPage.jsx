import React, { Fragment } from 'react'
import PrincipalHeader from './principalPageComponents/principalHeader'
import Navbar from './principalPageComponents/navbar'

function PrincipalPage() {
  return (
    <Fragment>
      <Navbar />
      <PrincipalHeader />
    </Fragment>
  )
}

export default PrincipalPage
