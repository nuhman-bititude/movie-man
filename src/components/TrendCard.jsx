import React from "react";

function TrendCard({ trend }) {
  return (
    <>
      <div className="trend">
        <div>
          <p>{trend.vote_average}⭐</p>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${trend.poster_path}`}
            alt={trend.title}
          />
        </div>
        <div>
          <span>{trend.media_type}</span>
          {trend.media_type === "movie" ? (
            <h3>{trend.original_title}</h3>
          ) : (
            <h3>{trend.original_name}</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default TrendCard;
