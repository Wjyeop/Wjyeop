function Cards() {
  const cards = [
    {
      id: 1,
      title: "포트폴리오",
      image: "/img/card1.png",
      link: "https://www.yigongcoffee.com/"
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
      link: "https://www.yigongcoffee.com/"
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
            <img src={card.image} alt={card.title} />
            <h1 className="card-title">{card.title}</h1>
            {/* <a
                className="link"
                href={card.link}
                target="_blank"
                rel="noreferrer"
            >
                링크이동
            </a> */}
        </a>
      ))}
    </div>
  );
}

export default Cards;
