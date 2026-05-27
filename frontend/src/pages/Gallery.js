import React from 'react';
import PageHeader from '../components/PageHeader';

// Images
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.png';
import photo6 from '../assets/photo6.png';
import photo7 from '../assets/photo7.png';


const photos = [
  { id: 1, src: photo1 },
  { id: 2, src: photo2 },
  { id: 3, src: photo3 },
  { id: 4, src: photo4 },
  { id: 5, src: photo5 },
  { id: 6, src: photo6 },
  { id: 7, src: photo7 },

];

export default function Gallery() {

  return (

    <div className="page-wrapper">

      <PageHeader
        tag="Gallery"
        title="School Gallery"
        subtitle="Memories and moments from our school"
      />


      <section style={{ padding: '60px 0' }}>

        <div className="section-inner">


          {/* Masonry Gallery */}

          <div className="gallery-grid">

            {photos.map((photo) => (

              <div
                key={photo.id}

                className="gallery-card"

                onMouseOver={(e)=>{

                  e.currentTarget.style.transform =
                  'translateY(-5px) scale(1.02)';

                }}

                onMouseOut={(e)=>{

                  e.currentTarget.style.transform =
                  'translateY(0) scale(1)';

                }}

              >

                <img
                  src={photo.src}
                  alt="gallery"

                  style={{

                    width:'100%',

                    height:'auto',

                    display:'block',

                    borderRadius:'16px'

                  }}

                />


              </div>

            ))}

          </div>


        </div>

      </section>



      <style>{`

      .gallery-grid{

        column-count:3;

        column-gap:18px;

      }


      .gallery-card{

        break-inside:avoid;

        margin-bottom:18px;

        overflow:hidden;

        border-radius:16px;

        cursor:pointer;

        transition:0.3s;

        box-shadow:
        0 6px 20px rgba(0,0,0,0.08);

        background:white;

      }



      @media(max-width:900px){

      .gallery-grid{

      column-count:2;

      }

      }



      @media(max-width:600px){

      .gallery-grid{

      column-count:1;

      }

      }


      `}</style>


    </div>

  );

}