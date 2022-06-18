import PropTypes from 'prop-types'
const AppInput = ({ name, label, error, ...rest }) => {
  return (
      <div className="form-group text-right">
          {label && <label htmlFor={name}>{label}</label>}
          <input
              {...rest}
              name={name}
              id={name}
              className="form-control text-right"
          />
          {error && <div className="alert alert-danger">{error}</div>}
      </div>
  )
}

AppInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default AppInput
