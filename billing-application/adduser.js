document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userRole = document.getElementById('userRole').value;

    // Create a new row for the user list
    const newRow = `
        <tr>
            <td>${Date.now()}</td>
            <td>${userName}</td>
            <td>${userEmail}</td>
            <td>${userRole}</td>
            <td>
                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                <a href="#" class="btn btn-danger btn-sm">Delete</a>
            </td>
        </tr>
    `;

    // Add new row to user list
    const userTableBody = document.querySelector('#user-list .user-table tbody');
    userTableBody.insertAdjacentHTML('beforeend', newRow);

    // Clear form fields
    document.getElementById('addUserForm').reset();
});
