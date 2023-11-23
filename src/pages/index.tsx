import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Hero from "../components/Hero"
import Camp from "../components/Camp"
import Features from "../components/Features"
import GetApp from "../components/GetApp"
import Guide from "../components/Guide"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
