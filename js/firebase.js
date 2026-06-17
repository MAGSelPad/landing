import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  senderID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let saveVote = (productId) => {
  const votesRef = ref(database, 'votes');
  const newVoteRef = push(votesRef);
  let result = set(newVoteRef, {
    productId: productId,
    timestamp: Date.now()
  });

  return result.then(() => {
    return {
      status: true,
      message: "Voto guardado correctamente."
    };
  }).catch((error) => {
    return {
      status: false,
      message: "Error al guardar el voto."
    };
  })
};

let enableForm = () => {
  const form = document.getElementById("form_voting");

  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const selectedCategory = document.getElementById("select_product").ariaValueMax;
    saveVote(selectedCategory).then(result => {
      alert(result.message);
    });
  });
};