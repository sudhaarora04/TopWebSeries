

function Card(props) {
  return (
    <>
      <div className="grid-container">
        {props.dataRecord.map((answer, i) => {
          return (
            <div key={i}>
              <div className="section grid-item">
                <div className="child-page-listing">
                  <h2>{answer.title}</h2>
                  <div >
                    <article id="3685" className="location-listing">
                      <span className="location-title">{answer.title}</span>
                      <div className="location-image">
                        <img width="300" height="169" src={answer.imgsrc} alt="Cards" />
                      </div>
                    </article>
                  </div>
                  <div className="holder">
                    <p className="short-description">{answer.shortdes}</p>
                    <a className="watch-now" target="_blank" rel="noreferrer" href={answer.link}>Watch Now</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}




      </div>

    </>
  );
}

export default Card;