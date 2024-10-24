import { review } from "@/api/review";import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

const Review = () => {
 

  const [allreview, setCategories] = useState([]);

  

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/review.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="p-5 md:p-0">
        {allreview.length > 0 ? (
          allreview.map((item, index) => (
            <div className="my-5 space-y-5" key={index}>
              <div className="flex gap-5">
                <img className="w-10 rounded-full" src={item.img} alt="" />
                <h1 className="font-bold">{item.name}</h1>
                <p className="text-primary">Just Now</p>
              </div>
              <div className="mt-2">
                <StarRatings
                  rating={item.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="3px"
                  isSelectable={false}
                />
              </div>
              <p>{item.description}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No reviews available</p> // Fallback if there are no reviews
        )}
      </div>
    </div>
  );
};

export default Review;
