const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            starships: [],
            favoritos: [] // Añadir favoritos al estado
        },
        actions: {
            loadPersonajes: async () => {
                try {
                    const store = getStore();
                    if (store.personajes.length === 0) {
                        let response = await fetch("https://www.swapi.tech/api/people");
                        if (!response.ok) throw new Error("Network response was not ok");
                        let data = await response.json();
                        let personajes = data.results.map(async (item, index) => {
                            let personajeResponse = await fetch(item.url);
                            if (!personajeResponse.ok) throw new Error("Failed to fetch character details");
                            let personajeData = await personajeResponse.json();
                            return {
                                name: personajeData.result.properties.name,
                                imageUrl: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`,
                                uid: item.uid
                            };
                        });
                        personajes = await Promise.all(personajes);
                        setStore({ personajes: personajes });
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            loadPlanetas: async () => {
                try {
                    const store = getStore();
                    if (store.planetas.length === 0) {
                        let response = await fetch("https://www.swapi.tech/api/planets");
                        if (!response.ok) throw new Error("Network response was not ok");
                        let data = await response.json();
                        let planetas = data.results.map(async (item, index) => {
                            let planetaResponse = await fetch(item.url);
                            if (!planetaResponse.ok) throw new Error("Failed to fetch planet details");
                            let planetaData = await planetaResponse.json();
                            return {
                                name: planetaData.result.properties.name,
                                imageUrl: `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`,
                                uid: item.uid
                            };
                        });
                        planetas = await Promise.all(planetas);
                        setStore({ planetas: planetas });
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            loadStarships: async () => {
                try {
                    const store = getStore();
                    if (store.starships.length === 0) {
                        let response = await fetch("https://www.swapi.tech/api/starships");
                        if (!response.ok) throw new Error("Network response was not ok");
                        let data = await response.json();
                        let starships = data.results.map(async (item, index) => {
                            let starshipResponse = await fetch(item.url);
                            if (!starshipResponse.ok) throw new Error("Failed to fetch starship details");
                            let starshipData = await starshipResponse.json();
                            return {
                                name: starshipData.result.properties.name,
                                imageUrl: `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`,
                                uid: item.uid
                            };
                        });
                        starships = await Promise.all(starships);
                        setStore({ starships: starships });
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            addFavorito: (item) => {
                const store = getStore();
                if (!store.favoritos.some(fav => fav.uid === item.uid)) {
                    setStore({ favoritos: [...store.favoritos, item] });
                }
            },
            removeFavorito: (uid) => {
                const store = getStore();
                setStore({ favoritos: store.favoritos.filter(fav => fav.uid !== uid) });
            }
        }
    };
};

export default getState;
