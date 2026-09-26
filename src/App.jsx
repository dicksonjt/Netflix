import Hero from './Hero/Hero'
import CurveDivider from './Curve_divider/CurveDivider'
import Second_page from './Second Page/Second_page'
import Third_page from './Third Page/Third_page'
import Fourth_page from './Fourth Page/Fourth_page'
import Fifth_Page from './Fith Page/Fifth_Page'
import Sixth_Page from './Sixth_Page/Sixth_Page'

const App = () => {
  return (
    <div className='bg-black text-white font-sans min-h-screen flex flex-col'>
      <Hero />
      <CurveDivider />
      <Second_page />
      <Third_page />
      <Fourth_page />
      <Fifth_Page />
      <Sixth_Page />
    </div>
  )
}
export default App