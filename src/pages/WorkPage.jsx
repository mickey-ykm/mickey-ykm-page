import CaseStudies from '../components/CaseStudies'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

export default function WorkPage() {
  return (
    <>
      <div className="pt-16">
        <CaseStudies />
        <Clients />
      </div>
      <Footer />
    </>
  )
}
