import { ReactNode } from "react"
import { Navbar } from "@/components/navbar"

interface LandingLayoutProps {
  children: ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default LandingLayout
