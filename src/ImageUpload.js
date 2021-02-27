// file to contain the stuff to uplaod the image
import React from 'react'

function Imageupload() {
  return (
    <div>
      <form>
        <label>Upload Image:</label>
        <input type="file" id="img" name="img" accept="image/*"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Imageupload
