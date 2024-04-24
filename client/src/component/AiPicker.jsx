import React from 'react'
import CustomButton from './CustomButton'
const AiPicker = ({prompt,setprompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder='ask ai'
      rows={5}
      value={prompt}
      onChange={(e)=>setprompt(e.target.value)}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
        <CustomButton
          type="outline"
          title="askingai"
          customStyle='text-xs'
        />):(
          <>
          <CustomButton
          type="outline"
          title="ai logo"
          customStyle='text-xs'
          handleClick={()=>handleSubmit('logo')}

        />
        <CustomButton
          type="filled"
          title="ai full"
          customStyle='text-xs'
          handleClick={()=>handleSubmit('full')}

        />
        </>
        )}
      </div>
    </div>
  )
}

export default AiPicker