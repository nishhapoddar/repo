function submitFeedback() {
  //fetch the values from the form fields
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  // Show the user info section on the web page
  document.getElementById('userInfo').style.display = 'block';  
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;
  alert('Thank you for your valuable feedback');
}
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
// Add an event listener to the document to listen for the Enter key press form will submit when the Enter key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});



