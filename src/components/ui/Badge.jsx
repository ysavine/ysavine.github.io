import PropTypes from 'prop-types'

export function Badge({ children, variant = 'solid' }) {
  return <span className={`badge badge--${variant}`}>{children}</span>
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline', 'skill']),
}
