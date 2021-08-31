import React, {useEffect} from "react";
import { Uppy } from "@uppy/core";
import {Dashboard as UploaderDashboard, useUppy} from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import {storage} from "../utils/Firebase";
import FirebaseCloudStorage from "../utils/FirebaseCloudStorage";
import { ref } from "firebase/storage";


export default function Uploader() {

  const uppy = useUppy(() => {
    const storageRef = ref(storage);
    return new Uppy()
      .use(FirebaseCloudStorage, { storageRef, storage })
  })

  useEffect(() => {
    return () => uppy.close()
  }, [uppy])

  return (
      <UploaderDashboard
        uppy={uppy}
      />
    );
}
