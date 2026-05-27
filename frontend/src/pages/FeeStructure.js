import React from 'react';
import PageHeader from '../components/PageHeader';

export default function FeeStructure() {
  return (
    <div className="page-wrapper">

      <PageHeader
        tag="Fees"
        title="Fee Structure"
        subtitle="School fee details and updates will appear here."
      />


      <section
        style={{
          padding: '80px 0',
          minHeight: '60vh'
        }}
      >

        <div className="section-inner">

          <div
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '80px 30px',
              textAlign: 'center',

              border:
              '2px dashed rgba(201,151,58,0.3)',

              boxShadow:
              '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >

            <div
            style={{
              fontSize:'80px',
              marginBottom:'20px'
            }}
            >
              💰
            </div>



            <h1
            style={{
              fontSize:'48px',
              fontWeight:'900',
              color:'var(--navy)',

              marginBottom:'16px',

              fontFamily:
              "'Playfair Display', serif"
            }}
            >
              Uploaded Soon
            </h1>



            <p
            style={{
              fontSize:'18px',

              color:'var(--gray)',

              maxWidth:'600px',

              margin:'0 auto',

              lineHeight:'1.8'
            }}
            >

              Fee structures uploaded by
              the admin will automatically
              appear here.

              Students and parents will be
              able to view updated fee details,
              transport charges and download
              fee documents.

            </p>



            <div
            style={{
              marginTop:'35px',

              display:'inline-block',

              padding:
              '10px 22px',

              borderRadius:'30px',

              background:
              'rgba(201,151,58,0.12)',

              color:
              'var(--gold)',

              fontWeight:'700',

              fontSize:'14px'
            }}
            >

              Admin Upload System Coming Soon

            </div>


          </div>

        </div>

      </section>



      <style>{`

      @media(max-width:768px){

        h1{
          font-size:
          34px !important;
        }

      }

      `}</style>


    </div>
  );
}