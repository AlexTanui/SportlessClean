function addService() {
  const serviceType = document.getElementById('serviceType').value;
  const card = document.createElement('div');
  card.classList.add('service-card');
  card.innerHTML = `
    <h2>${serviceType}</h2>
    <label for="date">Select Date:</label>
    <input type="date" id="date">
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone">
    <label for="location">Location:</label>
    <input type="text" id="location">
    <button onclick="bookService('${serviceType}')">Book Service</button>
  `;
  document.getElementById('serviceCards').appendChild(card);
}

function bookService(serviceType) {
  const date = document.getElementById('date').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  // Send data to admin via email (pseudo code)
  const emailContent = `Service Type: ${serviceType}\nDate: ${date}\nPhone: ${phone}\nLocation: ${location}`;
  sendEmailToAdmin(emailContent);

  alert('Service booked successfully! Admin will contact you shortly.');
}

function sendEmailToAdmin(content) {
  // Logic to send email (pseudo code)
  console.log('Email sent to admin with content:');
  console.log(content);
}
