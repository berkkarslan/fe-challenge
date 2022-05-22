/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import Search from "../components/Search";
import { useServices } from "../services/";
function Home() {
  const [list, setlist] = useState();
  const [loading, setloading] = useState(true);
  const [selectedType, setSelectedType] = useState("movie");
  const { api } = useServices();

  useEffect(() => {
    setloading(true);
    api.server.get(`/trending/${selectedType}/week`).then((res) => {
      let results = res.results;
      if(selectedType === 'tv'){
        results.map((item) =>  item.title = item.original_name );
      }
      setlist(results);
      setloading(false);
    });
  }, [selectedType, api.server]);

  return (
    <>
      <section className='hero-container'>
        <div className='wrapper'>
          <div className='content_wrapper'>
            <div className='title'>
              <h2>Hoş Geldiniz.</h2>
              <h3>
                Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
              </h3>
            </div>
            <Search />
          </div>
        </div>
      </section>
      <section className='inner_content p-0'>
        <div className='flex'>
          <div className='flex p-0'>
            <div className='column px-10'>
              <div className='flex flex-row mt-5 mb-4'>
                <h2 className='mr-3'>İzlemek Ücretsiz</h2>
                <div className='selector_wrap'>
                  <div className='selector'>
                    <div className={`anchor ${selectedType === "movie" ? "selected" : ""}`}>
                      <h3>
                        <a onClick={() => setSelectedType("movie")}>
                          Filmler
                        </a>
                      </h3>
                      {selectedType === "movie" ?  <div className='background'></div>: <></>}
                    </div>

                    <div className={`anchor ${selectedType === "tv" ? "selected" : ""}`}>
                      <h3>
                        <a onClick={() => setSelectedType("tv")}>
                          TV
                        </a>
                      </h3>
                      {selectedType === "tv" ?  <div className='background'></div>: <></>}
                    </div>
                  </div>
                </div>
              </div>
              {loading ? <div>loading</div> : <CardContainer list={list} />}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
