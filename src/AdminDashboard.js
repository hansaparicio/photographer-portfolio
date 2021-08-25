import React, {useEffect} from "react";
import { Uppy } from "@uppy/core";
import {Dashboard, useUppy} from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import {storage} from "./Firebase";
import FirebaseCloudStorage from "./FirebaseCloudStorage";
import { ref } from "firebase/storage";


export default function AdminDashboard() {

  const uppy = useUppy(() => {
    const storageRef = ref(storage);
    return new Uppy()
      .use(FirebaseCloudStorage, { storageRef, storage })
  })

  useEffect(() => {
    return () => uppy.close()
  }, [uppy])

  return (
    <div>
      <h1>Portfolio Dashboard</h1>
      <Dashboard
        uppy={uppy}
      />
    </div>
    );
}
