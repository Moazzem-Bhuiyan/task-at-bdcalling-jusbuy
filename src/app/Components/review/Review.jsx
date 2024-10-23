import { review } from "@/api/review";
import StarRatings from "react-star-ratings";

const Review = () => {
  const allreview = review;

  return (
    <div>
      <div className="">
        {allreview.map((item, index) => (
          <div className="my-5 space-y-5" key={index}>
            <div className="flex gap-5">
              <img className="w-10 rounded-full" src={item.img} alt="" />

              <h1 className="  font-bold">{item.name}</h1>
              <p className="text-primary">Just Now</p>
            </div>
            <div className="mt-">
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
            <p>{item.description}</p> <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
