import {ref, listAll, getDownloadURL} from "firebase/storage";
import {storage} from "./Firebase";

async function getPhotoList() {
  const listRef = ref(storage, '');
  const res = await listAll(listRef);
  const httpReferences = res.items.map(async (itemRef) => await getDownloadURL(itemRef));
  return await Promise.all([...httpReferences]);
}

export default getPhotoList;
