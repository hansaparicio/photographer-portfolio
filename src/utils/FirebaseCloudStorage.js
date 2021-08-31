import { uuid } from 'uuidv4';
import { BasePlugin } from '@uppy/core';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

class FirebaseCloudStorage extends BasePlugin {
  constructor (uppy, opts) {
    super(uppy, opts)

    this.id = this.opts.id || 'FirebaseCloudStorage'
    this.type = 'uploader'
    this.storageRef = opts.storageRef;
    this.storage = opts.storage;
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(fileIds) {
    return Promise.all(
      fileIds.map(id => {
        return new Promise((resolve, reject) => {
          const file = this.uppy.getFile(id);
          const refId = uuid();
          const fileRef = ref(this.storage, refId);
          const metaData = {
            contentType: file.type
          };
          this.uppy.emit("upload-started", file);
          const uploadTask = uploadBytesResumable(fileRef, file.data, metaData);
          uploadTask.on("state_changed",
            (snapshot) => this.uploadProgress(file, snapshot),
            () => this.uploadError(file, reject),
            () => this.uploadSuccess(uploadTask, id, resolve)
          );
        });
      })
    );
  }

  uploadSuccess(uploadTask, id, resolve) {
    return getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
        const file = this.uppy.getFile(id);
        file.downloadUrl = downloadUrl;
        this.uppy.emit("upload-success", file, uploadTask.snapshot, downloadUrl);
        resolve();
      });
  }

  uploadError(file, reject) {
    return error => {
      this.uppy.emit("upload-error", file, error);
      reject(error);
    };
  }

  uploadProgress(file, snapshot) {
    const progressInfo = {
      uploader: this,
      bytesUploaded: snapshot.bytesTransferred,
      bytesTotal: snapshot.totalBytes
    };
    this.uppy.emit("upload-progress", file, progressInfo);
  }

  install () {
    this.uppy.addUploader(this.uploadFile)
  }

  uninstall () {
    this.uppy.removeUploader(this.uploadFile)
  }
}

export default FirebaseCloudStorage
