import React, { useState } from 'react';
import DisplayButton from '../DisplayButton/DisplayButton';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <DisplayButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}