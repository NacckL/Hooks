import React from "react";
import "./indicators-index.css";

const data = [
  {
    name: "Employee Trust Index",
    dimension: "Credibility",
    description:
      "Measures trust in leadership, transparency, and reliability across the organization.",
  },
  {
    name: "Fairness Perception",
    dimension: "Fairness",
    description:
      "Assesses perceived equity in opportunities, rewards, and decision-making processes.",
  },
  {
    name: "Respect Factor",
    dimension: "Respect",
    description:
      "Evaluates the day-to-day respect shown among peers and by leadership.",
  },
  {
    name: "Pride Metric",
    dimension: "Pride",
    description:
      "Captures how proud employees feel about their work and the organization.",
  },
  {
    name: "Camaraderie Index",
    dimension: "Camaraderie",
    description:
      "Looks at social bonds, teamwork quality, and sense of belonging.",
  },
];

export default function IndicatorsIndexPage() {
  return (
    <div className="indicators-page">
      <div className="card">
        <h1 className="title">Indicators</h1>

        <button className="new-button" type="button">
          New Indicator
        </button>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Dimension</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td>
                    <div className="name-cell">
                      <span className="name">{row.name}</span>
                    </div>
                  </td>
                  <td className="muted">{row.dimension}</td>
                  <td className="desc">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}