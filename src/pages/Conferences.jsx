import React from 'react';
import './Conferences.css'; // You can copy your CSS styles from conferences.css here
import profilePic from '../assets/profile.png'; 
export default function Conferences() {
  return (
    <div>
      <div id="logo">
        <a href="/">
           <img src={profilePic} alt="Logo" className="top-left-logo" />
        </a>
      </div>

      <div id="content1">
        <div id="conferences">Conferences</div>
        <div id="about">
          Beginning 2020, Team S.T.A.R.D.U.ST has represented Ramaiah Institute of Technology<br />
          at the International Astronautical Congress (IAC) organized by the International Astronautical Federation.
        </div>
      </div>

      <div id="content2">
        <div id="content21" className="contents2">
          <div id="content211">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65dd0221bfc78b8692dccb1a_IAC-2020-VIRTUAL_Logo_2020-04-23_FINAL-72dpi_RGB-p-500.jpg" alt="IAC 2020" />
          </div>
          <div id="content212">
            Presented 9 research papers in the virtual CyberSpace edition of IAC
          </div>
        </div>

        <div id="content22" className="contents2">
          <div id="content221">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65dd02608e29a06302d8c994_iac-2021-logo.d96f0fe6-p-500.png" alt="IAC 2021" />
          </div>
          <div id="content222">
            Presented 15 research papers and interactive presentations in the Dubai<br />
            conference of IAC in 2021.
          </div>
        </div>

        <div id="content23" className="contents2">
          <div id="content231">
            <img src="https://cdn.prod.website-files.com/65db947b1591364dfccc2ea9/65dd02212620cb16a2b94b96_IAC22-Logo-225x202.png" alt="IAC 2022" />
          </div>
          <div id="content232">
            Showcased over 7 research ideas in the Paris conference of IAC in 2022.
          </div>
        </div>
      </div>

      <div id="gallery">Gallery</div>
      <div id="content3">
        <div id="gallery1" className="contents3">
          <div id="gallery11" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65e0f82a7878aa8f0b560d5d_IMG_20211025_161128%20(1)%20(1).jpg" alt="Gallery 1" />
          </div>
          <div id="gallery12" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65e0efda1279f15dc08fe228_IMG-20211118-WA0011-p-1080.jpg" alt="Gallery 2" />
          </div>
          <div id="gallery13" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65e0f5457a5b934ae4b85c4e_Screenshot_20211213-202000.jpg" alt="Gallery 3" />
          </div>
        </div>

        <div id="gallery2" className="contents3">
          <div id="gallery21" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65e0efd9bc44a9cf13cd819a_IMG-20211213-WA0012-p-1080.jpg" alt="Gallery 4" />
          </div>
          <div id="gallery22" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65dc31dce0c30bf479f79a05_IMG_20211028_133854%20(1)-p-1080.jpg" alt="Gallery 5" />
          </div>
          <div id="gallery23" className="contentgallery">
            <img src="https://assets-global.website-files.com/65db947b1591364dfccc2ea9/65e0f546e559fbd4075aaa2c_IMG_20211025_133059-p-1080.jpg" alt="Gallery 6" />
          </div>
        </div>
      </div>
    </div>
  );
}
