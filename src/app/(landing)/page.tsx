import { Check } from "lucide-react"

import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ShinyButton } from "@/components/shiny-button"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"

const features = [
  "Real-time Discord alerts for critical events",
  "Buy once, use forever",
  "Track sales, new users, and more",
]

const LandingPage = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your Saas. Get instant
              notifications for{" "}
              <span className="font-semibold  text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start for Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 flex items-center justify-center">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc={"/brand-asset-profile-picture.png"}
                    avatarAlt="Ping Panda Avatar"
                    username="PingPanda"
                    timestamp="Today at 12:55 PM"
                    badgeText="Sign Up"
                    badgeColor="#43B581"
                    title="🥳 New user signed up"
                    content={{
                      Name: "Rutu Doshi",
                      Email: "rutu.doshi@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc={"/brand-asset-profile-picture.png"}
                    avatarAlt="Ping Panda Avatar"
                    username="PingPanda"
                    timestamp="Today at 3:21 PM"
                    badgeText="Revenue"
                    badgeColor="#FAA61A"
                    title="💰 Payment received"
                    content={{
                      Amount: "$29.99",
                      Plan: "PRO",
                      Email: "diti.mehta@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc={"/brand-asset-profile-picture.png"}
                    avatarAlt="Ping Panda Avatar"
                    username="PingPanda"
                    timestamp="Today at 7:12 PM"
                    badgeText="Milestone"
                    badgeColor=""
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      RecurringRevenue: "5,000 USD",
                      Growth: "+8.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}

export default LandingPage
