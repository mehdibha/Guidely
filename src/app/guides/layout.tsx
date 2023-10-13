import { REVALIDATE_TIME } from "@/config"
import { PageLayout } from "@/layout"

interface CoursesLayoutProps {
  children: React.ReactNode
}

export const revalidate = REVALIDATE_TIME

export default function CoursesLayout(props: CoursesLayoutProps) {
  const { children } = props
  return (
    <PageLayout title="Find your way with guides made by experts">
      <div className="container max-w-7xl py-8">{children}</div>
    </PageLayout>
  )
}
