/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const Header = ({ title }) => {
  return (
        <div className="header">{title}</div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
