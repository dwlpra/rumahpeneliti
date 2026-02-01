'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface PrimaryButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'yellow' | 'outline' | 'outline-on-dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs sm:text-sm',
  md: 'px-6 py-2.5 text-sm sm:text-base',
  lg: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base'
}

const variantClasses = {
  // Blue gradient button with white text (for light backgrounds)
  solid: 'bg-gradient-to-r from-blue-900 to-blue-700 !text-white hover:from-blue-800 hover:to-blue-600 shadow-lg hover:shadow-xl',

  // Yellow button with dark blue text (for dark backgrounds)
  yellow: 'bg-yellow-400 !text-blue-900 hover:bg-yellow-500 shadow-md hover:shadow-lg',

  // Blue outline button (for light backgrounds)
  outline: 'bg-transparent border-2 border-blue-900 !text-blue-900 hover:bg-blue-50',

  // White outline button with white text (for dark backgrounds)
  'outline-on-dark': 'bg-transparent border-2 border-white/30 !text-white hover:bg-white/10 hover:border-white/50',

  ghost: 'bg-gray-200 !text-gray-700 hover:bg-gray-300'
}

export function PrimaryButton({
  children,
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  className,
  disabled = false,
  external = false,
  type = 'button'
}: PrimaryButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300',
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  )
}
