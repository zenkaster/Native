// import React from 'react'
// import { v4 as uuid } from 'uuid'

// export default function App() {
//   const unique_id1 = uuid();
//   const unique_id2 = uuid();
//   const unique_id3 = uuid();
//   const unique_id4 = uuid();
//   // const small_id = unique_id.slice(0, 8)

//   return (
//     <div>
//       {unique_id1}<br />
//       {unique_id2}<br />
//       {unique_id3}<br />
//       {unique_id4}<br />
//     </div>
//   )
// }

// import React from 'react'

// const uuid = () => {
//   return Date.now().toString(36);
// }

// export default function App() {
//   const unique_id1 = uuid()

//   return (
//     <div>
//       {unique_id1}<br />
//     </div>
//   )
// }


import React, { useState, useRef } from 'react'

export default function App() {
  const unique_id = useRef(3);
  const [arr, setArr] = useState([
    {
      id: 1,
      title: 'first'
    },
    {
      id: 2,
      title: 'second'
    },
  ])

  const pushToArr = () => {
    setArr([...arr, { id: unique_id.current, title: 'third' }]);
    unique_id.current += 1;
  }


  return (
    <div>
      {arr.map(id =>
        <h1 key={id.id}>{id.title} - {id.id}</h1>
      )}
      <button onClick={pushToArr}>New item</button>
    </div>
  )
}


