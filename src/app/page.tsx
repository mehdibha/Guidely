import { HeroBanner } from "@/components/hero-banner"


export default async function Home() {

  return (
    <main>
      <HeroBanner />
    </main>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
  id: string
}

const Section = (props: SectionProps) => {
  const { title, id, children } = props
  return (
    <div id={id} className="mx-auto w-full max-w-4xl">
      <h2 className="font-display mb-4 text-4xl font-bold">{title}</h2>
      {children}
    </div>
  )
}
