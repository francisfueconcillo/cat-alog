import React from 'react';
import { Cat } from 'lucide-react';

function Header() {
  return (
    <div className="flex p-4">
      <Cat size="32" color="#808080" /> &nbsp;
      <h1>Cat-alog</h1>
    </div>
  );
}

export default Header;