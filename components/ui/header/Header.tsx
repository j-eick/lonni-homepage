import { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode;
  className: string;
}

export default function Header({children, className}: HeaderProps) {
  return (
    <header className={className}>{children}</header>
  )
}
