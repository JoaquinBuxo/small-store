// components/Button.js
const Button = ({ onClick, Icon }) => (
  <button
    onClick={onClick}
    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
  >
    <Icon className='h-5 w-5' />
  </button>
);

export default Button;
