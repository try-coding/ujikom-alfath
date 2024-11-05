import Navigasi from "../components/Navigasi"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import About from "@/components/About"
import DatePicker from "@/components/uttils/DatePicker"
import FormPesanan from "../components/form/FormPesanan"
import FormKamar from "@/components/form/FormKamar"

import FasilitasHotel from "@/components/FasilitasHotel"
import Kamar from "@/components/Kamar"
import { Typography } from "@/MTailwind"
import FormFasilitasHotel from "@/components/form/FormFasilitasHotel"
export default function Home() {
  return (
    <div >
     <header>
        <Navigasi />  
        <Hero />

     </header>

      <section  className="container mb-20  grid grid-cols-1 gap-20 p-4 pt-20 md:flex-row sm:gap-6  sm:p-4 sm:mx-auto md:p-8 md:mt-40">
        <div id='form-pesanan'  className="" >
          <FormPesanan  />
        </div>
        <div className="">

          <About />
        </div>

        <div id="list-kamar" className="row-start-1"> 
         
          <Kamar />
        </div>

        <FasilitasHotel />
      </section>

    
      <footer>

        <Footer />
      </footer>
    </div>
  );
}
