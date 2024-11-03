import React, { Fragment } from 'react'
import PrincipalHeader from './principalPageComponents/principal_header/principalHeader'
import Navbar from '../navbar/navbar'
import SecondHeader from './principalPageComponents/second_header/second-header'

function PrincipalPage() {
  return (
    <Fragment>
      <Navbar />
      <PrincipalHeader />
      <SecondHeader />
    </Fragment>
  )
}

export default PrincipalPage
