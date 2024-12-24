import Container from "../../Layout/Container/Container"
import TemplateOne from "../FirstOneTemplate/TemplateOne"
import TemplateTwo from "../SecondOneTemplate/TemplateTwo"

const Home = () => {
  return (
    <div>
      <Container>
            <div className="grid grid-cols-2 gap-5 p-5">
               <TemplateOne />
               <TemplateTwo/>
            </div>
      </Container>
    </div>
  )
}

export default Home
