import { ReactNode } from "react"
import { Navbar } from "@/components/navbar"

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AuthLayout
