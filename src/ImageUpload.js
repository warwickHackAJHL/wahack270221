// file to contain the stuff to uplaod the image
import React,{useState} from 'react'

function Imageupload({setImage}) {
  // const [image,setImage] = useState()
  const handleChange = (event) =>{
    setImage(URL.createObjectURL(event.target.files[0]))
  }
  return (
    <div>
      <input type="file" id="img" name="img" accept="image/*" onChange={handleChange}/>
    </div>
  )
}

export default Imageupload
