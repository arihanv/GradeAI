import React from 'react'

type Props = {}

export default function EditCont({ }: Props) {
  return (
    <div>
      Edit Assignment

      <div>
        <label htmlFor="course">Course Name</label>
        <input type="text" name="course" id="course" placeholder="Course Name" />

        <label htmlFor="assignment">Assignment Instructions</label>
        <textarea name="assignment" id="assignment" placeholder="Assignment Instructions" />
      </div>
    </div>
  )
}