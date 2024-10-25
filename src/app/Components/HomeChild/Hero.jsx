import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-6 border-b-2 pb-10">
        <div className="lg:col-span-1 border-r">
          <div className="flex flex-col gap-2 lg:pl-9 lg:pt-11 p-2">
            <li>Woman s Fashion</li>
            <li>Men s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </div>
        </div>
        <div className="lg:col-span-4 lg:pt-11 lg:pl-5">
          <div>
            <Image
              alt="Herosection"
              src="/herobanner.png"
              height={750}
              width={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
