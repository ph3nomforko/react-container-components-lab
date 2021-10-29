import React from "react";

const Review = ({ headline, byline, link, summary_short }) => (
    <div key={headline} className="review">
        <header>
            <h4><a className="review-link" href={link.url}>{headline}</a></h4>
            <span className="author">{byline}</span>
        </header>
        <p>{summary_short}</p>
    </div>
)

export default Review