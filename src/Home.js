import { Base } from "./Base";
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

export function Home() {
  return (
    <Base >
      <div className="home">
        <div>
          <h1 className="vp">"A book is a dream that you hold in your hand" </h1>
          <img
          className="bookImage"
          src="https://www.wikihow.com/images/thumb/a/a3/What-book-should-i-read-quiz-image.png/1200px-What-book-should-i-read-quiz-image.png"/>
        </div>
      </div>
    </Base>
  )
}