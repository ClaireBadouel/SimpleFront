

  function populateSelect(selectId, dataEndpoint, updateSession) {
    const select = document.getElementById(selectId);
    //document.write(updateSession)
    if (updateSession) {
      // Données disponibles et âgées de moins d'un jour
      const storedData = sessionStorage.getItem(selectId);
      populateOptions(select, JSON.parse(storedData));
    } else {
      // Appeler l'API pour récupérer les données
      fetch(dataEndpoint)
        .then((response) => response.json())
        .then((data) => {
          populateOptions(select, data);
          // Mettre à jour les données dans le session storage
          const currentTime = new Date().getTime();
          sessionStorage.setItem(selectId, JSON.stringify(data));
          sessionStorage.setItem(
            `${selectId}_timestamp`,
            currentTime.toString()
          );
        })
        .catch((error) => {
          console.error(`Erreur lors de l'appel à l'API : ${error}`);
        });
    }
  }

  function populateOptions(select, data) {
    select.innerHTML = ""; // Effacer les options existantes

    const defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.text = "Sélectionner une valeur";
    select.appendChild(defaultOption);

    // Ajouter les options avec les données
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.text = item.name;
      select.appendChild(option);
    });
  }

  
  // Appel de la fonction pour chaque select
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

