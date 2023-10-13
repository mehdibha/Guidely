"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui"
import { MouseScrollAnimation } from "./mouse-scroll-animation"

export const HeroBanner = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="pb-28">
        <h1 className="font-display text-center text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl xl:text-5xl">
          Learn a new{" "}
          <HighlightedText
            startColor="#007CF0"
            endColor="#00DFD8"
            animationDelay={0}
          >
            skill
          </HighlightedText>
          , make a new{" "}
          <HighlightedText
            startColor="#7928CA"
            endColor="#FF0080"
            animationDelay={3}
          >
            career
          </HighlightedText>
          <br />
          <span className="text-7xl tracking-normal ">
            Take a different{" "}
            <HighlightedText
              startColor="#FF4D4D"
              endColor="#F9CB28"
              animationDelay={6}
            >
              path
            </HighlightedText>
          </span>
        </h1>
        <h2 className="text-foreground-secondary mb-12 mt-6 text-center text-lg">
          Guidely.me gives you the oppurtunity to have a clear path to reach
          what you want.
        </h2>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          <Button asChild size="lg" variant="default">
            <Link href="#" scroll={true}>
              Browse guides
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#" scroll={true}>
              Create a guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface HighlightedTextProps {
  children: string
  startColor: string
  endColor: string
  animationDelay: number
}

const HighlightedText = (props: HighlightedTextProps) => {
  const { startColor, endColor, animationDelay, children } = props

  const style = {
    "--content": `'${children}'`,
    "--start-color": startColor,
    "--end-color": endColor,
    "--animation-delay": `${animationDelay}s`,
  } as React.CSSProperties

  return (
    <span className="animated-header-gradient" style={style}>
      <span className="header-gradient">{children}</span>
    </span>
  )
}
