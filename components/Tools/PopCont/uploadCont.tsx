"use client";
import { Text, Type, Upload, Image } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {};

export default function UploadCont({}: Props) {
  const [fileName, setFileName] = React.useState<string>("");
  const [fileInput, setFileInput] = React.useState<any>();
  const [imageName, setImageName] = React.useState<string>("");
  const [imageInput, setImageInput] = React.useState<any>();
  const [textName, setTextName] = React.useState<string>("");
  const [textInput, setTextInput] = React.useState<string>("");

  const handleFileChange = (event: any) => {
    if (event.target.files[0].type !== "application/pdf") {
      alert("Please upload a valid pdf file");
      return;
    }
    if (imageInput !== undefined) {
      setImageInput(undefined);
      setImageName("");
    }
    if (textInput !== "") {
      setTextInput("");
      setTextName("");
    }
    setFileInput(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleImageChange = (event: any) => {
    if (
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      alert("Please upload a valid image file");
      return;
    }
    if (fileInput !== undefined) {
      setFileInput(undefined);
      setFileName("");
    }
    if (textInput !== "") {
      setTextInput("");
      setTextName("");
    }
    setImageInput(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  const handleTextChange = (event: any) => {
    if (event.target.files[0].type !== "text/plain") {
      alert("Please upload a valid text file");
      return;
    }
    if (imageInput !== undefined) {
      setImageInput(undefined);
      setImageName("");
    }
    if (fileInput !== undefined) {
      setFileInput(undefined);
      setFileName("");
    }
    setTextInput(event.target.value);
    setTextName(event.target.value);
  };

  return (
    <div className="flex-col p-4 flex gap-3">
      <div className="flex gap-4 w-[600px] min-h-[200px]">
        <div className="flex flex-col gap-1 w-1/3">
          <Badge variant={"secondary"}>Upload Raw Text File</Badge>
          <label
            htmlFor="file-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {textInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{textName}</p>
            ) : (
              <>
                <Type size={48} />
              </>
            )}

            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-1 w-1/3">
          <Badge variant={"secondary"}>Upload PDF</Badge>
          <label
            htmlFor="file-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {fileInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{fileName}</p>
            ) : (
              <>
                <Upload size={48} />
              </>
            )}

            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-1  w-1/3">
          <Badge variant={"secondary"}>Upload Photo</Badge>
          <label
            htmlFor="image-upload"
            className="flex h-full cursor-pointer items-center justify-center rounded-md border border-dashed w-full"
          >
            {imageInput ? (
              <p className="text-ellipsis overflow-hidden p-4">{imageName}</p>
            ) : (
              <>
                <Image size={48} />
              </>
            )}

            <input
              type="file"
              id="image-upload"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
      <Button>Upload</Button>
    </div>
  );
}
