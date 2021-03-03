import React, { useState } from 'react';
function App() {
  return <div>
    <Folder name="Desktop" isopen={true}>
      <Folder name="Music" >
        <File name="memories.mp4"/>
        <File name="allstars.mp4"/>
      </Folder>
      <File name="dogs.jpeg"/>
      <File name="Cat.jpg"/>
    </Folder>
    <Folder name="Applications">
    </Folder>
    </div>
}
//function component

const Folder=(props)=>{
  //console.log(useState('False'));
  const[ isOpen,setIsOpen]=useState(true);
  const {name,children}=props;
  const handleClickEvent=()=>{setIsOpen(!isOpen)};
  const direction=isOpen?'down':'right';
  const folder=isOpen?'folder open':'folder';
  return  <div>
            <span onClick={handleClickEvent}>
              <i className={`${folder} icon`}></i>
              <i className={`caret ${direction} icon`}></i>
            </span>
            {name}
            <div style={{marginLeft:'15px'}}>
               {isOpen?children:null} 
            </div>   
          </div>
};

const File=(props)=>{
  const {name}=props;
  const fileExtension=name.split('.')[1];
  const fileIcons={
    mp4:'file audio',
    jpeg:'file image',
    jpg:'file image outline'
  };
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
    </div>
};


export default App;
