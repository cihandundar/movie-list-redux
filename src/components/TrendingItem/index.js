import React from "react";
const TrendingItem = () => {
  const images = [
    {
      id: 4,
      img: "https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      title: "Avatar: The Way of Water",
      rating: 7.7,
    },
    {
      id: 5,
      img: "https://image.tmdb.org/t/p/w1280/1XSYOP0JjjyMz1irihvWywro82r.jpg",
      title: "Violent Night",
      rating: 7.6,
    },
    {
      id: 6,
      img: "https://image.tmdb.org/t/p/w1280/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      title: "Black Panther: Wakanda Forever",
      rating: 7.4,
    },
    {
      id: 7,
      img: "https://image.tmdb.org/t/p/w1280/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
      title: "The Chronicles of Narnia",
      rating: 7.1,
    },
    {
      id: 8,
      img: "https://image.tmdb.org/t/p/w1280/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      title: "Black Adam",
      rating: 7.2,
    },
  ];
  console.log(images, "deneme");
  return (
    <div className="item">
      <div className="item__container">
        <ul className="item__container__list">
          {images?.map((trend) => (
            <li key={trend?.id}>
              <div className="item__img">
                <img src={trend?.img} alt="" />
              </div>
              <div className="item__title">
                <h4>{trend?.title}</h4>
              </div>
              <span className="item__title__rating">
                Rating: {trend?.rating}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingItem;
