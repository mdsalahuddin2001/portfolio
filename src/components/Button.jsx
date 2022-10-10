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
      className={`px-8 py-3 cursor-pointer uppercase transition duration-300 hover:shadow-xl rounded-sm active:scale-95 ${
        variant === 'primary'
          ? 'bg-primary border border-primary'
          : 'bg-secondary border border-secondary'
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
