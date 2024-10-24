import Image from "next/image";

const Story = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-10 p-5 md:p-0">
        <div className=" justify-center items-center flex flex-col space-y-8  ">
          <h1 className="leading-7">
            <p className="text-4xl font-semibold my-5">Our Story</p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </h1>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="flex justify-center">
          <Image src="/stry.png" width={500} height={700} alt="Story"></Image>
        </div>
      </div>
    </div>
  );
};

export default Story;
