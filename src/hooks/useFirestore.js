import { projectFirestore } from '../firebase/config';
import { useState, useEffect } from 'react';

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            //every new data will refresh automaticly
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });

            return () => unsub();
    }, [collection])

    return { docs } ;
}

export default useFireStore;