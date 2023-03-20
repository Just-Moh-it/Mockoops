import React from "react";
import { AbsoluteFill } from "remotion";
import { StarEmoji } from "./StarEmoji";
import { stats } from "./stats";

const title = {
  color: "#111",
  fontWeight: "bold",
  fontSize: 70,
  fontFamily: "sans-serif",
  paddingLeft: 20,
  paddingRight: 20,
  textAlign: "center",
};

const subtitle = {
  color: "#111",
  fontSize: 32,
  fontFamily: "sans-serif",
  paddingLeft: 200,
  paddingRight: 200,
  textAlign: "center",
};

const Stars = () => {
  const edge = stats.data.search.edges[0].node.starredRepositories;
  const starsThisYear = edge.edges.filter(
    (e) => new Date(e.starredAt).getFullYear() === 2021
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StarEmoji />
      <br />
      <div style={title}>
        You gave {starsThisYear.length}{" "}
        {starsThisYear.length === 1 ? "star" : "stars"} to open source projects
        this year.
      </div>
      <br />
      {starsThisYear.length === 0 ? (
        <div style={subtitle}>It's not too late to spread the love! </div>
      ) : (
        <div style={subtitle}>
          The most recent one was <strong>{starsThisYear[0].node.name}</strong>{" "}
          by <strong>{starsThisYear[0].node.owner.login}</strong>!
        </div>
      )}
    </AbsoluteFill>
  );
};

export default Stars;
