'use client';
import React from 'react'
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
  }
const Button = () => {
  return (
    <button>Button</button>
  )
}

export default Button