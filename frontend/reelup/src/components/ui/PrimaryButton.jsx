

const PrimaryButton = ({
    children,
    type = 'button',
    className = "",
    ...props
  }) => {
    
    return (
      <button
        className={`bg-red-500 px-4 py-3 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200  ${className}`}
        type={type}
        {...props}      
      >
        {children}
      </button>
    );
  };
  
  export default PrimaryButton;
  