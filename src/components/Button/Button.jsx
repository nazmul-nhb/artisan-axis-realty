import PropTypes from 'prop-types';

const Button = (props) => {
    const { buttonText, color, hoverColor } = props;
    return (
        <button className={`border border-${color} bg-${color} text-${hoverColor} rounded-xl hover:bg-${hoverColor} hover:text-${color} transition duration-500 flex justify-center items-center`}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
}

export default Button;