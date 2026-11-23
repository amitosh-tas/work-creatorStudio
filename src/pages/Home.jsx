import Hero from "../components/home/Hero"
import { CourseOverview, ProductExamples } from "../components/home/CourseOverview"
import { BusinessModel } from "../components/home/BusinessModel"
import { CourseFit, Curriculum, Instructor } from "../components/home/CourseDetails"
import { FAQ, Footer, Pricing, Testimonials } from "../components/home/Enrollment"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CourseOverview />
        <ProductExamples />
        <BusinessModel />
        <CourseFit />
        <Instructor />
        <Curriculum />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
