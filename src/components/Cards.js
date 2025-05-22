import React from 'react';

function Cards() {
  const cards = [
    {
      id: 1,
      title: "포트폴리오",
      image: "/img/card1.png",
      link: "https://portfolio-wjyeop.web.app/"
    },
    {
      id: 2,
      title: "이공커피",
      image: "/img/card2.png",
      link: "https://www.yigongcoffee.com/"
    },
    {
      id: 3,
      title: "메모장",
      image: "/img/card3.png",
      link: "https://react-with-firebase-39fa2.web.app/"
    }
  ];

  return (
    <div className="card-wrap">
      {cards.map((card) => (
        <a
          className="card"
          key={card.id}
          href={card.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-image-container">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-title-container">
             <h2 className="card-title">{card.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Cards;