import "./page.css";
import Typing from "@/components/ui/typing"
import Header from "@/components/ui/header"

export default function page() {

  return (
    <div>
      <Header/>
      <div className="main">
        <Typing/>
      </div>
    </div>
  )
}
