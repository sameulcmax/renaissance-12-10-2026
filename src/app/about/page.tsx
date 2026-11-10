import About from "@/components/About"
import CopyrightBar from "@/components/CopyrightBar"
import Header from "@/components/Header"

const page = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100svh-8rem)] items-center justify-center py-6 lg:min-h-[calc(100svh-12rem)]">
        <About />
      </main>
      <CopyrightBar />
    </>
  )

}

export default page