

const SecondaryButton = ({
    children,
    className = "",
    ...props
  }) => {
    
    return (
      <button
      className={`bg-white text-black font-medium px-4 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out text-sm sm:text-base ${className}`}
        {...props}      
      >
        {children}
      </button>
    );
  };
  
  export default SecondaryButton;
  