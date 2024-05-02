import React from 'react';
import { Cat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate('/')
  };

  return (
    <div className="flex p-4" onClick={logoClickHandler}>
      <Cat size="32" color="#808080" /> &nbsp;
      <h1>Cat-alog</h1>
    </div>
  );
}

export default Header;