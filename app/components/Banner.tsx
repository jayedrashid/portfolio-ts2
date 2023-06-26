import Image from "next/image";
import ProfileImg from "../../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Description */}
      <div className="w-2/3 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-300 whitespace-nowrap">John Snow</h1>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-600 tracking-wide">
          Software Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cum
          consequuntur soluta explicabo saepe voluptate atque accusantium quasi
          perspiciatis, quos quaerat odit voluptatem, debitis culpa!
        </p>
      </div>

      {/* Image */}
      <div className="m-auto">
        <Image
          className="rounded-md border-[3px] p-2"
          width={200}
          height={200}
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
    </div>
  );
};

export default Banner;
