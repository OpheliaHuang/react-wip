import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const UNSPLASH_SECRET = process.env.REACT_APP_UNSPLASH_SECRET;
const UNSPLASH_RAND_PHOTO_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_RAND_ENDPOINT}`;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const UNSPLASH_RAND_QUERY_STRING = `${UNSPLASH_RAND_PHOTO_URL}?query=${word}&client_id=${UNSPLASH_KEY}`;

  const handleSearchSubmit = (e) => {
    // some debugging here
    // console.log(word);
    // console.log(UNSPLASH_RAND_QUERY_STRING);
    // first api call to random image
    fetch(UNSPLASH_RAND_QUERY_STRING)
      .then((res) => res.json())
      .then((data) => {
        // update existing image array
        // save image
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(`the error is: ${err}`);
      });
    e.preventDefault();

    // set the word to empty string
    setWord('');
  };

  console.log(`word is now: ${word}`);
  images.forEach((element) => {
    console.log(`${element.title}: ${element.description}`);
  });
  // console.log(UNSPLASH_RAND_PHOTO_URL);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} queryEvent={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className="pb-4">
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
