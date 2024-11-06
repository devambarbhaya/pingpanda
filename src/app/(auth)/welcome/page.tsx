// Sync auth status with database

import { BackgroundPattern } from "@/components/background-pattern"
import { Heading } from "@/components/heading"
import { LoadingSpinner } from "@/components/loading-spinner"

const WelcomePage = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center px-4">
      <BackgroundPattern className="absolute inset-0 left-1/2 z-0 -translate-x-1/2 opacity-75" />
      <div className="relative z-10 -translate-y-1/2 flex flex-col items-center gap-6 text-center">
        <LoadingSpinner size={"md"} />
        <Heading>Creating your account...</Heading>
        <p className="text-base/7 text-gray-600 max-w-prose">
          Just a moment while we set things up for you
        </p>
      </div>
    </div>
  )
}

export default WelcomePage
