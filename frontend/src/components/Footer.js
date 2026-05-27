import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#060F1D', paddingTop: 60 }}>

      <div className="section-inner">

        {/* Top Footer */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gap: 48,
            paddingBottom: 48,
            borderBottom:
              '1px solid rgba(255,255,255,0.08)'
          }}
        >

          {/* School Info */}

          <div>

            <h2
              style={{
                fontFamily:
                  "'Playfair Display', serif",

                fontSize: 22,

                color: '#fff',

                marginBottom: 16
              }}
            >
              Kailash Aashram
              <span
                style={{
                  color: 'var(--gold)'
                }}
              >
                {' '}Public School
              </span>

            </h2>


            <p
              style={{
                color:
                  'rgba(255,255,255,0.45)',

                lineHeight: 1.8,

                fontSize: 13,

                marginBottom: 24
              }}
            >
              MP Board affiliated school
              providing quality education
              with discipline, values and
              excellence for students from
              Nursery to Class 8.
            </p>



            {[
              {
                icon:'📍',
                text:
                'Ward 13 Pathara,\nChitrakoot Satna,\nMP - 485334'
              },

              {
                icon:'📞',
                text:
                '+91 91984 23617'
              },

              {
                icon:'✉️',
                text:
                'As187552@gmail.com'
              }

            ].map((item,i)=>(

              <div
                key={i}

                style={{
                  display:'flex',

                  gap:10,

                  marginBottom:15
                }}
              >

                <span
                style={{
                  color:'var(--gold)'
                }}
                >
                  {item.icon}
                </span>


                <span
                style={{
                  fontSize:13,

                  color:
                  'rgba(255,255,255,0.45)',

                  whiteSpace:'pre-line',

                  lineHeight:1.6
                }}
                >
                  {item.text}
                </span>

              </div>

            ))}

          </div>




          {/* Quick Links */}

          <div>

            <div style={headingStyle}>
              Quick Links
            </div>


            {[
              ['/','Home'],
              ['/gallery','Gallery'],
              ['/facilities','Facilities'],
              ['/notices','Notices'],
              ['/fees','Fee Structure'],
              ['/contact','Contact']
            ]

            .map(([path,label])=>(

              <Link
                key={path}

                to={path}

                style={linkStyle}
              >

                {label}

              </Link>

            ))}

          </div>




          {/* Classes */}

          <div>

            <div style={headingStyle}>
              Classes
            </div>


            {[
              'Nursery',
              'KG',
              'Class 1–5',
              'Class 6–8',
              'MP Board Curriculum'
            ]

            .map(item=>(

              <div
                key={item}

                style={linkStyle}
              >

                {item}

              </div>

            ))}

          </div>


        </div>




        {/* Bottom Footer */}

        <div
          style={{
            padding:'20px 0',

            display:'flex',

            justifyContent:
            'space-between',

            flexWrap:'wrap',

            gap:12
          }}
        >

          <div
            style={{
              color:
              'rgba(255,255,255,0.3)',

              fontSize:12
            }}
          >

            © 2026 Kailash Aashram Public School.
            All Rights Reserved.

          </div>



          <div
            style={{
              display:'flex',

              gap:10,

              flexWrap:'wrap'
            }}
          >

            {[
              'MP Board Affiliated',
              'Nursery–8',
              'Admissions Open'
            ]

            .map(item=>(

              <span
                key={item}

                style={{
                  background:
                  'rgba(201,151,58,0.12)',

                  border:
                  '1px solid rgba(201,151,58,0.25)',

                  padding:
                  '5px 12px',

                  borderRadius:8,

                  color:
                  'var(--gold)',

                  fontSize:11,

                  fontWeight:600
                }}
              >

                {item}

              </span>

            ))}

          </div>

        </div>

      </div>




      {/* Responsive */}

      <style>{`

      .footer-grid{

        grid-template-columns:
        2fr 1fr 1fr;

      }


      @media(max-width:900px){

        .footer-grid{

          grid-template-columns:
          1fr 1fr;

        }

      }



      @media(max-width:600px){

        .footer-grid{

          grid-template-columns:
          1fr;

        }

      }

      `}</style>


    </footer>
  );
}




const headingStyle = {

  fontSize:11,

  fontWeight:700,

  color:'var(--gold)',

  textTransform:'uppercase',

  letterSpacing:'0.1em',

  marginBottom:20

};



const linkStyle = {

  display:'block',

  fontSize:13,

  color:
  'rgba(255,255,255,0.45)',

  marginBottom:12,

  textDecoration:'none',

  lineHeight:1.6

};