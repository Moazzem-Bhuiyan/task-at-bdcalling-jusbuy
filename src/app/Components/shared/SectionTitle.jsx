

const SectionTitle = ({ subtitle, title }) => {


    return (

        <div className="mt-20 p-5">
    
        <p
          className="text-primary   border-l-[17px] border-primary rounded-sm p-1 inline-block"
          data-aos="fade-right"
        >
          {subtitle}
        </p>
    

      <h1
        className="text-xl md:text-2xl uppercase  my-3 py-2"
        data-aos="fade-up"
      >
       {title}
      </h1>
    </div>

    );
};

export default SectionTitle;