import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component{
 
  state = {
    isLoading: true,
    movies: []
  };
 
  getMovies = async () => {
    const {
      data: {
        data: { movies }
    }
  } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
        </div>
        ) : (
         <div className="movies">
           { movies.map(movie => (
            <Movie
              key={movie.id} 
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
           ))}
         </div>
        )}
      </section>
    );
  }
}

/*
  매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출한다.
   
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
*/
/* 팁:
왜 function component이 아닌 class component를 쓰는가? -> function에는 없는 
state를 구현하기 위해서...
state는 object이고, component에는 data를 넣을 공간이 있으며, data는 변한다.
바꿀 데이터를 state안에 넣는다.

이때, state는 직접 조작해선 안된다. ex) this.state.count = 1
react에서 지원하는 setstate를 이용해서 state를 조작해야 react가 render()를 부를때, 변경된 state를
가지고 refresh 하게 된다. 안그러고 직접 조작하면, render()시 state의 update없이 불려진다.
*/
export default Home;