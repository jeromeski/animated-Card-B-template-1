import React from "react";
import CardComponent from './Item'
import "./styles.css";

const items = [
  { 
    id: 1,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },
  { 
    id: 2,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },
  { 
    id: 3,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },
  { 
    id: 4,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },
  { 
    id: 5,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },
  { 
    id: 6,
    name: 'Website 1',
    imgURI: 'https://via.placeholder.com/370x279'
  },

]



export default function App() {
  return (
    <section className='blog-one'>
      <div className='container'>
        <div className='row h-100'>
          {items.map((item) => 
            <div className='col-lg-4 col-md-6' key={item.id}>
              <CardComponent  imgURI={item.imgURI} name={item.name} />
            </div>
            )}
        </div>
      </div>
    </section>

  );
}
