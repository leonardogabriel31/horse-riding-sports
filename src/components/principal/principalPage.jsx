import React, { Fragment } from 'react'
import PrincipalHeader from './principalPageComponents/principal_header/principalHeader'
import Navbar from '../navbar/navbar'

function PrincipalPage() {
  return (
    <Fragment>
      <Navbar />
      <PrincipalHeader />
    </Fragment>
  )
}

export default PrincipalPage
