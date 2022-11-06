import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
          <h4>{text}</h4>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Off the Wall since 1966.',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#DAFDBA',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header