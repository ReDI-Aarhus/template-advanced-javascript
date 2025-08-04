const buttonStyle = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
  };
  
export const InlineButton = ({children}) => <button style={buttonStyle}>{children}</button>;