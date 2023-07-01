import { Text, Type } from 'lucide-react'
import React from 'react'

type Props = {}

export default function UploadCont({}: Props) {
  return (
    <div className='flex-col flex'>
      <div className='flex gap-4 p-2'>
          <div className='border flex justify-center p-8 aspect-square items-center rounded-xl w-1/3'>
            <button className='' onClick={() => {}}>
            <Type size={80}/>
            </button>
          </div>
          <div className='border flex justify-center p-8  aspect-square items-center rounded-xl w-1/3'>
            Upload File
          </div>
          <div className='border flex justify-center p-8  aspect-square items-center rounded-xl w-1/3'>
            Upload Image
          </div>
      </div>
    </div>
  )
}