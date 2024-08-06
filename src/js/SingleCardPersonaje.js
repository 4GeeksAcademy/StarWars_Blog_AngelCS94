import React from 'react'

const CharacterDetails = () => {
    const character = {
      name: "Luke Skywalker",
      birthYear: "19BBY",
      gender: "male",
      height: "172",
      skinColor: "fair",
      eyeColor: "blue",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
      imageUrl: "https://via.placeholder.com/800x600"
    };
  
    const handleImageError = (e) => {
      e.target.src = "./assets/img/big-placeholder.jpg";
    };
  
    return (
      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={2}>
            <img src="https://starwars-visualguide.com/assets/img/logo.png" alt="Star Wars" className="img-fluid" />
          </Col>
          <Col md={8} className="text-center">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="img-fluid"
              onError={handleImageError}
            />
          </Col>
          <Col md={2} className="text-end">
            <Button variant="primary" className="mt-2">
              Favorites <span className="badge bg-secondary">0</span>
            </Button>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birth Year</th>
                  <th>Gender</th>
                  <th>Height</th>
                  <th>Skin Color</th>
                  <th>Eye Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{character.name}</td>
                  <td>{character.birthYear}</td>
                  <td>{character.gender}</td>
                  <td>{character.height}</td>
                  <td>{character.skinColor}</td>
                  <td>{character.eyeColor}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default CharacterDetails;