"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type Props = {
  courseInformation: any;
  rubricInformation: any;
  assignmentInstructions: any;
  studentEssay: string;
};

function onSubmit(
  courseInformation: string,
  rubricInformation: string,
  assignmentInstructions: string,
  studentEssay: string
) {
  console.log(courseInformation, rubricInformation, assignmentInstructions, studentEssay)
  if (courseInformation == undefined || rubricInformation == undefined || assignmentInstructions == undefined || studentEssay == undefined) {
    alert("You still have information missing. Make sure you fill out all fields with the buttons to the right.");
  } else {
    console.log("Submit clicked");

    axios
      .post(
        "https://grade-ai-ed153ea53b42.herokuapp.com/query_essay",
        {
          course_information: courseInformation,
          rubric: rubricInformation,
          assignment_instructions: assignmentInstructions,
          essay: studentEssay,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default function Submit({
  courseInformation,
  rubricInformation,
  assignmentInstructions,
  studentEssay,
}: Props) {
  function callSubmit() {
    console.log('called')
    onSubmit(
      courseInformation,
      rubricInformation,
      assignmentInstructions,
      studentEssay
    );
  }

  return (
    <div className="w-full flex justify-center fixed bottom-0 mb-3">
      <Button className="w-fit px-6" onClick={() => { callSubmit() }}>
        Grade Essay
      </Button>
    </div>
  );
}
