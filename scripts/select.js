
/**
 * Get the selectId element, then check if session is up-to-date. If not fetch the 
 * dataEndpoint and feed it into the sessionStorage. Use the populateOptions function
 * to feed the select button
 * @param  {String} selectId id used for the select button in the HTML
 * @param  {String} dataEndpoint API path to get the data corresponding to the select
 * @param  {Boolean} updateSession True if the session is up-to-date, otherwise False
 */

  function populateSelect(selectId, dataEndpoint, updateSession) { 
    const select = document.getElementById(selectId); 
    if (updateSession) { 
      const storedData = sessionStorage.getItem(selectId); 
      populateOptions(select, JSON.parse(storedData));  // Parse the session data from str to json
    } else {                                            
      fetch(dataEndpoint)
        .then((response) => response.json())
        .then((data) => {
          populateOptions(select, data);
          const currentTime = new Date().getTime();
          sessionStorage.setItem(selectId, JSON.stringify(data)); // Store the data as str
          sessionStorage.setItem(
            `${selectId}_timestamp`,  // Keep the timestamp for later check
            currentTime.toString()
          );
        })
        .catch((error) => {
          console.error(`${error}`);
        });
    }
  }

/**
 * Get the select element and feet it using data
 * @param  {Element} select select button in the HTML
 * @param  {String} data data corresponding to the select
 */

  function populateOptions(select, data) {
    select.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.text = "Sélectionner une valeur";
    select.appendChild(defaultOption);
    
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.text = item.name;
      select.appendChild(option);
    });
  }

  // The function is called for each select
  populateSelect(
    "talent_status_id",
    "http://localhost:3000/palm/api/v1/talent_status/",
    updateSession
  );

  populateSelect(
    "talent_units_id",
    "http://localhost:3000/palm/api/v1/talent_units/",
    updateSession
  );

  populateSelect(
    "talent_grade_id",
    "http://localhost:3000/palm/api/v1/talent_grades/",
    updateSession
  );

