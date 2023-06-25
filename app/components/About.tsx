import { ImProfile } from "react-icons/im";
import Title from "./Title";

const About = () => {
  return (
    <div className="wrapper">
      <Title text="About" icon={<ImProfile />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, rerum eveniet autem nam distinctio vel doloremque, delectus iure qui suscipit, voluptates. Deleniti magni harum quia reiciendis similique, et tenetur voluptas doloremque at assumenda debitis earum neque laudantium porro rem accusantium iste facere quos eum ipsa quasi? Laudantium assumenda voluptas adipisci.
        </p>
        <p>
        Deleniti magni harum quia reiciendis similique, et tenetur voluptas doloremque at assumenda debitis earum neque laudantium porro rem accusantium iste facere quos eum ipsa quasi? Laudantium assumenda voluptas adipisci.
        </p>
      </div>
    </div>
  );
};

export default About;