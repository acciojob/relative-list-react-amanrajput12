import React from 'react'

const App = () => {
  const list =[1,3,4,43,43];
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={"relativelist"}>
                {list.map((data,i)=><li key={`relativeListItem${i}`}>{data}</li>)}
               </ol>
    </div>
  )
}

export default App
