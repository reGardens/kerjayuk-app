import { ReactNode } from "react"
import "../styles/index.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-slate-200 overflow-x-hidden">
      <div className="max-w-screen-sm mx-auto px-5 bg-white">
        <Header />
      </div>
      <main className="max-w-screen-sm mx-auto bg-white">
        {children}
      </main>
      <div className="max-w-screen-sm mx-auto">
        <Footer />
      </div>
    </div>
  )
}