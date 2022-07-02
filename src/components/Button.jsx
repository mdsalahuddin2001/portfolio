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
      className={`px-8 py-3 cursor-pointer uppercase transition duration-300 ${
        variant === 'primary'
          ? 'bg-primary border border-primary  hover:text-primary hover:bg-transparent'
          : 'bg-secondary border border-secondary hover:text-secondary hover:bg-transparent'
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
