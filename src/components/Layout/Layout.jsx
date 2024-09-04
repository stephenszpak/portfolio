import PropTypes from 'prop-types'
import styles from './Layout.module.scss'
import React from 'react'

export const Layout = ({ heading }) => {

  return (
    <div className={styles['layout']}>
      <h1>{heading}</h1>
    </div>
  )
}

Layout.propTypes = {
  heading: PropTypes.string,
}

Layout.defaultProps = {
  heading: "",
}
