import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="page-wrapper">

      <PageHeader
        tag="Contact"
        title="Contact Us"
        subtitle="Get in touch with us for admissions or any school-related queries."
      />

      <section style={{ padding: '60px 0' }}>
        <div className="section-inner">

          <h2
            className="section-title"
            style={{
              textAlign: 'center',
              marginBottom: 40
            }}
          >
            School Information
          </h2>


          {/* Contact Cards */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 20,
              marginBottom: 40
            }}
          >

            {[
              {
                icon:'📍',
                label:'Address',
                value:'Kailash Aashram Public School,\nWard 13 Pathara Chitrakoot Satna MP, 485334'
              },

              {
                icon:'📞',
                label:'Phone',
                value:'+91 91984 23617'
              },

              {
                icon:'✉️',
                label:'Email',
                value:'As187552@gmail.com'
              },

              {
                icon:'🕐',
                label:'Office Hours',
                value:'Mon-Sat\n8 AM - 4 PM'
              }

            ].map((item,i)=>(

              <div
                key={i}
                style={{
                  background:'#fff',
                  padding:25,
                  borderRadius:14,
                  border:'1px solid #eee',
                  textAlign:'center'
                }}
              >

                <div
                  style={{
                    fontSize:30,
                    marginBottom:10
                  }}
                >
                  {item.icon}
                </div>


                <div
                  style={{
                    fontWeight:700,
                    marginBottom:10,
                    color:'var(--navy)'
                  }}
                >
                  {item.label}
                </div>


                <div
                  style={{
                    whiteSpace:'pre-line',
                    color:'#666',
                    fontSize:14
                  }}
                >
                  {item.value}
                </div>

              </div>

            ))}

          </div>



          {/* BIG GOOGLE MAP */}

          <div
            style={{
              borderRadius:20,
              overflow:'hidden',
              boxShadow:'0 10px 40px rgba(0,0,0,0.1)'
            }}
          >

            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1975.9364887379004!2d80.82153011410988!3d25.11129701728838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA2JzQxLjMiTiA4MMKwNDknMjEuOSJF!5e0!3m2!1sen!2sin!4v1779637487399!5m2!1sen!2sin"
              width="100%"
              height="500"

              style={{
                border:0
              }}

              allowFullScreen=""
              loading="lazy"
            />
    

          </div>

        </div>
      </section>

    </div>
  );
}