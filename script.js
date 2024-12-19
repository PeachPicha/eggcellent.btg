// Function to update the house dropdown based on the selected farm
function updateHouseDropdown() {
    const farmSelect = document.getElementById("textbox_1");
    const houseSelect = document.getElementById("textbox_2");

    // Get the selected farm's value
    const selectedFarm = farmSelect.value;

    // Clear the existing options in the house dropdown
    houseSelect.innerHTML = '<option value="">Select a House</option>';

    // If a farm is selected, add the relevant houses to the dropdown
    if (selectedFarm && houseData[selectedFarm]) {
        houseData[selectedFarm].forEach(house => {
            const option = document.createElement("option");
            option.value = house;
            option.textContent = house;
            houseSelect.appendChild(option);
        });
    }
}
// Trigger the hidden file input when the "Upload" button is clicked
document.getElementById('upload-button').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

// Handle file selection
document.getElementById('file-input').addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        console.log("File selected:", file.name); // Log file name for debugging
        // You can process the file here, e.g., display the file name or upload it
    }
});
