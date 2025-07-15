import { icons } from './icons'

interface IconProps {
  className?: string
  icon: keyof typeof icons
  viewBox?: string
}

export function Icon({ className, icon, viewBox }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden='true'
      focusable='false'
      viewBox={viewBox}
    >
      <path d={icon} />
    </svg>
  )
}
