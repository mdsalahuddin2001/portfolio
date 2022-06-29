import PropTypes from 'prop-types';
const Button = ({
  type = 'button',
  variant = 'primary',
  children,
  block,
  className,
}) => {
  return (
    <button
      type={type}
      className={`px-8 py-3 cursor-pointer uppercase hover:scale-110 transition-all ${
        variant === 'primary' ? 'bg-primary' : 'bg-secondary'
      }  text-white ${className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
};
export default Button;
