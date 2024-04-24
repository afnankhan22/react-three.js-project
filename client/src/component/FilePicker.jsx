import React from 'react'
import CustomButton from './CustomButton'
import state from '../store'
import { useSnapshot } from 'valtio'
const FilePicker = ({file , setfile,readFile}) => {
  const snap = useSnapshot(state)
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex flex-col'>
      
      <input
        id='file-upload'
        type='file'
        accept='image/*'
        onChange={(e)=>setfile(e.target.files[0])}
      />
       <label htmlFor='file-upload' className='filepicker-label'>
        upload File
       </label>
       <p className='mt-2 text-gray-500 text-xs truncate'>
        {file===''?"no file selected" : file.name}
       </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
         <CustomButton
         type="outline"
         title="logo"
         handleClick={()=> readFile('logo')}
         customStyle="text-xs" />

        <CustomButton
         type="filled"
         title="full"
         handleClick={()=>readFile('full')}
         customStyle='text-xs' />
       </div>
    </div>
  )
}

export default FilePicker