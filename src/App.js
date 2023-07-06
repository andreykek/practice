import './App.css';
import header from "./header.module.css"
import btn from "./btn.module.css"
import container from "./container.module.css"
import intro from "./intro_style.module.css"
import image from "./image.module.css"
import section from "./section.module.css"
import title from "./title.module.css"
import text from "./text.module.css"
import contacts from "./contacts.module.css"
import portfolio from "./portfolio.module.css"
import btn_message from "./btn_message.module.css"


function App() {
  return (
    <div className={App}>
      <header className={header.header}>
         <div className={container.container}>
               <div className={header.header__inner}>
                     <nav className={header.nav}>
                        <div className={btn.box_1}>
                           <div className={`${btn.btn_one} ${btn.btn}`}>
                             <span>Home</span>
                           </div>
                         </div>
                         <div className={btn.box_1}>
                           <div className={`${btn.btn_one} ${btn.btn}`}>
                             <span>About me</span>
                           </div>
                         </div>
                         <div classNameName={btn.box_1}>
                           <div className={`${btn.btn_one} ${btn.btn}`}>
                             <span>Skills</span>
                           </div>
                         </div>
                         <div className={btn.box_1}>
                           <div className={`${btn.btn_one} ${btn.btn}`}>
                             <span>Portfolio</span>
                           </div>
                         </div>
                         <div className={btn.box_1}>
                           <div className={`${btn.btn_one} ${btn.btn}`}>
                             <span>Contacts</span>
                           </div>
                        </div>
                     </nav>
               </div>
         </div>
      </header>

      <div className={intro.size}>
            <div className={container.container}>
                  <div className={intro.intro__up}>
                        <div className={intro.name}>Denis Novik</div>
                        <div className={intro.inform}>UX | UI designer<p></p>
                            24 years old, Minsk</div>
                  </div>
            
                  <img className={image.size_image_for_my_intro} src="./images/intro.jpg" />
            </div>
      </div>

      <section className={section.section_size}>
            <div className={section.section__inner}>
                  <div className={title.title_settings}>About me</div>
                        <div className={text.text_settings}>
                           <div className={text.text_item}>I'm Denis, UX/UI designer from Minsk. <p></p>
                           I'm interested in design and everything connected with it.
                           </div>
               
                           <div className={text.text_item}>I`m studying at courses "Web and mobile design <p></p>
                           interfaces" in IT-Academy.
                           </div>
                  
                           <div className={text.text_item}>Ready to implement excellent projects<p></p>
                           with wonderful people.</div>
                        </div>
            </div>
      </section>

      <section className={`${section.section_size} ${section.section_mod_color}`}>
         <div className={section.section__inner}>
               
               <div className={title.title_settings}>Skills</div>

                     <div className={`${text.text_settings} ${text.text_mod}`}>
                        <div className={text.text_item}>I work in such programs as</div>
                     </div>
                     <div className={image.size_image_for_my_program}>
                        <img className={image.size_image_for_my_program_item} src="/images/1.jpg"/>
                        <img className={image.size_image_for_my_program_item} src="/images/2.jpg"/>
                        <img className={image.size_image_for_my_program_item} src="/images/3.jpg"/>
                        <img className={image.size_image_for_my_program_item} src="/images/4.jpg"/>
                     </div>
         </div>
      </section>

{/* Портфолио */}
      <section className={portfolio.portfolio_size}>
            <div className={portfolio.portfolio__inner}>
                  <div className={title.title_settings}>Portfolio</div>
                  <div className={image.size_image}>
                     <img src={'./images/portfolio_1.jpg'}/>
                     <div className={`${text.text_settings} ${portfolio.text_mt30}`}>Online fashion store - Homepage</div>
                  </div>
            </div>
      </section>


      <section className={portfolio.portfolio_size}>
            <div className={portfolio.portfolio__inner}>
                  <div className={image.size_image}>
                     <img src={'./images/portfolio_2.jpg'}/>
                     <div className={`${text.text_settings} ${portfolio.text_mt30}`}>Reebok Store - Concept</div>
                  </div>
            </div>
      </section>


      <section className={portfolio.portfolio_size}>
            <div className={portfolio.portfolio__inner}>
                  <div className={image.size_image}>
                     <img src={'./images/portfolio_3.jpg'}/>
                     <div className={`${text.text_settings} ${portfolio.text_mt30}`}>Braun Landing Page - Concept</div>
                  </div>
            </div>
      </section>
{/* Портфолио */}

<section className={`${section.section_size} ${section.section_mod_contacts} ${section.section_mod} ${section.section_mod_color}`}>
<div className={section.section__inner}>
   <div className={title.title_settings}>Contacts</div>
         <div className={text.text_settings}>
            <div className={text.text_item}>Want to know more or just chat?<p></p>
               You are welcome!</div>
               <div className={btn_message.size}>
                  <a className={btn_message.btn_message} href="">Send message</a>
               </div>
         </div>
         <div className={contacts.my_contacts}>
            <img className={image.size_image_contacts} src="images/contacts.jpg"/>
         </div>

         <div className={text.text_settings}>
            <div className={`${text.text_item} ${text.text_item_end}`}>Like me on<p></p>
               LinkedIn, Instagram, Behance, Dribble</div>
        </div>
</div>
</section>

     

    </div>
  );
}

export default App;