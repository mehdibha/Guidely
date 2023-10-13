interface CreateGuideProps {
  children: React.ReactNode
}

export default function CreateGuideLayout(props: CreateGuideProps) {
  const { children } = props
  return <div>{children}</div>
}
