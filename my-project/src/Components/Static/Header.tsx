import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-red-400 flex items-center justify-between">
      <div>Logo</div>
      <div>Navbar</div>
      <button>Button</button>
    </div>
  );
};

export default Header;
