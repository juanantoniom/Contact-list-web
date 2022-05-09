const saveContact = (localStorage, contact ) =>{
  localStorage.setItem(contact.id, JSON.stringify(contact));
  //window.location.href = '/';
  location.reload();
}

const loadContact = (localStorage, parentNode) => {

  let keys = Object.keys(localStorage);

  console.log(keys);

  for(key of keys){
    //console.log(key);
    let mycontact = JSON.parse(localStorage.getItem(key));

    createContact(parentNode, mycontact, localStorage);

    //deleteContact(mycontact, localStorage);
  }
}

const createContact = (parentNode, mycontact, localStorage) =>{

    let divContact = document.createElement("div");
    let nameContact = document.createElement("h3");
    let numberContact = document.createElement("p");
    let addressContact = document.createElement("p");
    let deleteIcon = document.createElement("span");

    nameContact.innerHTML = mycontact.name;
    numberContact.innerHTML = mycontact.number;
    addressContact.innerHTML = mycontact.address;
    deleteIcon.innerHTML = "delete_forever";

    divContact.classList.add("contact");
    deleteIcon.classList.add("material-icons", "icono")

    //deleteIcon.onclick = () =>{              <----//otra manera de borrar a un contact
    //  localStorage.removeItem(mycontact.id);
      //window.location.href ="/";
    //  location.reload();
    //}
    deleteContact(deleteIcon,mycontact, localStorage); //metodo borrar contact

    divContact.appendChild(nameContact);
    divContact.appendChild(numberContact);
    divContact.appendChild(addressContact);
    divContact.appendChild(deleteIcon);

    parentNode.appendChild(divContact);

}


const deleteContact = (deleteIcon,mycontact, localStorage) =>{

  deleteIcon.onclick = () =>{

          if(confirm("Are you sure to delete " + mycontact.name + " ?")){
            localStorage.removeItem(mycontact.id);
            location.reload();
          }
  }



}
