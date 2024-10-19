// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const eventForm = document.getElementById("eventForm");
  const eventsList = document.getElementById("events");

  // Function to create a new event
  eventForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form input values
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventLocation = document.getElementById("eventLocation").value;

    // Create a new list item for the event
    const eventItem = document.createElement("li");
    eventItem.classList.add("event-item");

    // Add event details to the list item
    eventItem.innerHTML = `
      <h3>${eventName}</h3>
      <p><strong>Date:</strong> ${eventDate}</p>
      <p><strong>Time:</strong> ${eventTime}</p>
      <p><strong>Location:</strong> ${eventLocation}</p>
    `;

    // Append the new event to the list
    eventsList.appendChild(eventItem);

    // Reset the form after submission
    eventForm.reset();
  });
});

