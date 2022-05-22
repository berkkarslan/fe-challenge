/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ColorExtractor } from "react-color-extractor";
import { useParams } from "react-router-dom";
import { useServices } from "../services/";

export default function Detail() {
  let { id } = useParams();
  const { api, helpers } = useServices();
  const [loading, setloading] = useState(true);
  const [movie, setMovie] = useState();
  const [colors, setColors] = useState(["#ffffff", "#ffffff"]);
  const [crew, setCrew] = useState();
  const [provider, setProvider] = useState("");

  useEffect(() => {
    setloading(true);
    api.server.get(`/movie/${id}&append_to_response=images`).then((res) => {
      setMovie(res);
      setloading(false);
    });

    api.server.get(`/movie/${id}/credits`).then((res) => {
      setCrew(res.crew);
    });

    api.server.get(`/movie/${id}/watch/providers`).then((res) => {
      if (res.results.length > 0) {
        setProvider(res.results.TR.ads[0]);
      }
    });
  }, [id, api.server]);

  const renderGenres = (genres) => {
    return genres.map((genre, index) => {
      return (
        <a key={index} href='#'>
          {genre.name}
          {genres.length - 1 !== index ? "," : ""}&nbsp;
        </a>
      );
    });
  };

  const renderCrew = () => {
    return crew
      ?.filter((el) => el.job === "Director" || el.job === "Writer")
      .map((actor, index) => {
        return (
          <li className='profile' key={index}>
            <p>
              <a href='#'>{actor.original_name}</a>
            </p>
            <p className='character'>{actor.job}</p>
          </li>
        );
      });
  };

  const getColors = (colors) => {
    setColors(colors);
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className='w-full justify-center'>
        <ul className='flex flex-row items-center justify-center'>
          <li className='px-3 mr-3 py-3 font-normal active'>Özet</li>
          <li className='px-3 mr-3 py-3 font-normal'>Medya</li>
          <li className='px-3 mr-3 py-3 font-normal'>Hayranlar</li>
          <li className='px-3 mr-3 py-3 font-normal'>Paylaş</li>
        </ul>
      </div>
      <div
        className='header large border first mb-40'
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}original${movie.backdrop_path})`,
        }}
      >
        <div
          className='custom_bg'
          style={{
            backgroundImage: `linear-gradient(to right, rgb(${helpers.hexToRGB(
              colors[0]
            )}) 150px, rgba(${helpers.hexToRGB(colors[1])}, 0.84) 100%)`,
          }}
        >
          <ColorExtractor
            maxColors={2}
            getColors={getColors}
            src={`${process.env.REACT_APP_IMAGE_URL}w500${movie.backdrop_path}`}
          />
          <div className='single_column'>
            <section id='original_header' className='images inner'>
              <div className='poster_wrapper true'>
                <div className='poster'>
                  <div className='image_content backdrop'>
                    <img
                      className='poster lazyload lazyloaded'
                      src={`${process.env.REACT_APP_IMAGE_URL}w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                </div>

                {provider.logo_path ? (
                  <div className='ott_offer'>
                    <div className='text_wrapper'>
                      <div className='button'>
                        <div className='provider'>
                          <img
                            src={`${process.env.REACT_APP_IMAGE_URL}w200/${provider.logo_path}`}
                            width='36'
                            height='36'
                            alt='Now Streaming on blutv'
                          />
                        </div>
                        <div className='text'>
                          <span>
                            <h4>Now Streaming</h4>
                            <h3>
                              <a
                                className='no_click'
                                href='#'
                                title='Now Streaming on blutv'
                              >
                                Hemen İzle
                              </a>
                            </h3>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className='header_poster_wrapper true'>
                <section className='header '>
                  <div className='title ott_true'>
                    <h2 className='12'>
                      <a href='#'>{movie.title}</a>
                      <span className='tag release_date'>
                        ({movie?.release_date.substr(0, 4)})
                      </span>
                    </h2>

                    <div className='facts'>
                      <span className='certification'>12</span>

                      <span className='release'>
                        {helpers.changeDateFormat(movie?.release_date)} (
                        {movie.original_language.toUpperCase()}) •
                      </span>

                      <span className='genres ml-3'>
                        {renderGenres(movie.genres)}
                      </span>
                    </div>
                  </div>

                  <div className='header_info'>
                    <h3 className='tagline'>{movie.tagline}</h3>

                    <h3>Özet</h3>
                    <div className='overview'>
                      <p>{movie.overview}</p>
                    </div>

                    <ol className='people no_image'>{renderCrew()}</ol>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
