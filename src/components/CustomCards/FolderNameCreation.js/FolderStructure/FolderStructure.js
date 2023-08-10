import React from 'react'
import './FolderStructure.css'

function FolderStructure({folderName}) {
  return (
    <>
       <section>
    <div class="folder-shapes">
      <div class="folder">
        <div class="top"></div>
        <div class="head">
          <div class="icon">
            📁
          </div>
          <div class="dot2">•.•</div>
        </div>
        <div class="info">
          <h1>{folderName}</h1>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default FolderStructure