//code for showing all the companies from companies collection
const compList = document.querySelector('#company-info');
const addCompForm = document.querySelector('#add-company');

db.collection("companies").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        compList.innerHTML += `<div>
        <h3>` + doc.data().CompanyName +`</h3>
        <p><b>Package:</b> ` + doc.data().Package +` P/A</p>
        <p><b>Qualification:</b> ` + doc.data().Qualification +`</p>
        <a href="#" class="btn">Read More</a></div>`
    })
});

//codes for adding new company in companies collection
// Add a new document in collection "companies"
addCompForm.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection("companies").add({
        CompanyName: addCompForm['company-name'].value,
        Qualification: addCompForm['qualification'].value,
        Package: addCompForm['package'].value,
        link: addCompForm['company-link'].value,
        CompanyDescription: addCompForm['bio-text'].value,

    }).then(() => {
          //close signup form
          const modal = document.querySelector('#add-company-wrapper');
          Modal.getInstance(modal).close(); //M.
          addCompForm.reset();
          addCompForm.querySelector('.error').innerHTML = ''
          console.log("Document successfully written!");
      }).catch(err => {
          addCompForm.querySelector('.error').innerHTML = ''
      });
});