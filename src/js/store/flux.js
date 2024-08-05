const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            starships: []
        },
        actions: {
            loadPersonajes: async () => {
                try {
                    let response = await fetch("https://www.swapi.tech/api/people");
                    let data = await response.json();
                    let personajes = data.results.map(async (item, index) => {
                        let personajeResponse = await fetch(item.url);
                        let personajeData = await personajeResponse.json();
                        return {
                            name: personajeData.result.properties.name,
                            imageUrl: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`
                        };
                    });
                    personajes = await Promise.all(personajes);
                    setStore({ personajes: personajes });
                } catch (err) {
                    console.error(err);
                }
            },
            loadPlanetas: async () => {
                try {
                    let response = await fetch("https://www.swapi.tech/api/planets");
                    let data = await response.json();
                    let planetas = data.results.map(async (item, index) => {
                        let planetaResponse = await fetch(item.url);
                        let planetaData = await planetaResponse.json();
                        return {
                            name: planetaData.result.properties.name,
                            imageUrl: `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`
                        };
                    });
                    planetas = await Promise.all(planetas);
                    setStore({ planetas: planetas });
                } catch (err) {
                    console.error(err);
                }
            },
            loadStarships: async () => {
                try {
                    let response = await fetch("https://www.swapi.tech/api/starships");
                    let data = await response.json();
                    let starships = data.results.map(async (item, index) => {
                        let starshipResponse = await fetch(item.url);
                        let starshipData = await starshipResponse.json();
                        return {
                            name: starshipData.result.properties.name,
                            imageUrl: `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`
                        };
                    });
                    starships = await Promise.all(starships);
                    setStore({ starships: starships });
                } catch (err) {
                    console.error(err);
                }
            }
        }
    };
};

export default getState;
