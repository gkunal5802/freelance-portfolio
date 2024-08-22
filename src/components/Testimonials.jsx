import About from "../assets/about.jpg";
import Stars from "../ui/Stars";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-10  py-[128px] h-[840px]">
      <div className="h-[100%] mx-[120px]">
        <div className="flex h-[100%] gap-8">
          {/* Column1 */}
          <div className="flex flex-col justify-between p-4">
            <div>
              <h1 className="text-7xl">Testimonials</h1>
              <p className="text-sm">What my clients have to say?</p>
            </div>
            <div className="ml-[80px] pt-[120px]">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="shadow-md shadow-gray-600 w-[350px] h-[450px] border-2 border-black bg-[#c6ddff] rounded-2xl overflow-hidden flex flex-col flex-wrap relative"
              >
                <div className="absolute top-[120px] left-8">
                  <Stars />
                </div>
                <div className="pt-[150px] mx-10">
                  <img
                    src={About}
                    alt="striver image"
                    className="rounded-full"
                    width="84px"
                    height="84px"
                  />
                </div>

                <p className="mx-4 text-sm italic pt-6">
                  &quot;Bro reels are killing it! You understand the content.
                  Great design, great production and kudos to the strategy we
                  made, almost every reel is crossing 150k mark&quot;
                </p>

                <div className="pt-4 mx-4">Striver (Raj VikramAditya)</div>
                <div className="mx-4">Founder, TakeUForward</div>
              </motion.div>
            </div>
          </div>

          {/* column2 */}
          <div className="flex flex-col gap-10 mt-[120px] my-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 relative rounded-2xl w-[324px] h-[324px] border-2 border-black bg-[#ff5764]"
            >
              <div className="right-[150px] top-3 absolute">
                <Stars />
              </div>
              <div className="pt-[20px] mx-10">
                <img
                  src={About}
                  alt="striver image"
                  className="rounded-full"
                  width="84px"
                  height="84px"
                />
              </div>

              <p className="mx-4 text-sm italic pt-2">
                &quot;It&apos;s great working with you, your response time is
                really good and sometimes these urgent edits by you make lot of
                difference. Special metion to that 1M reel&quot;
              </p>

              <div className="pt-10 mx-4">Bhanu Pathak</div>
              <div className="mx-4">Founder, Growshow Media</div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 relative rounded-2xl w-[324px] h-[324px] border-2 border-black bg-[#dcd9ff]"
            >
              <div className="right-[150px] top-3 absolute">
                <Stars />
              </div>
              <div className="pt-[20px] mx-10">
                <img
                  src={About}
                  alt="striver image"
                  className="rounded-full"
                  width="84px"
                  height="84px"
                />
              </div>

              <p className="mx-4 text-sm italic pt-2">
                &quot;Really dedicated and trustworthy person to work with. Your
                visual storytelling is amazing&quot;
              </p>

              <div className="pt-12 mx-4">Dhiraj Wadhwa</div>
              <div className="mx-4">Founder, Stories Beyond Frames</div>
            </motion.div>
          </div>

          {/* column3 */}
          <div className="flex items-end">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 relative rounded-2xl w-[300px] h-[300px] border-2 border-black bg-[#ffffff]"
            >
              <div className="right-[50px] top-[70px] absolute">
                <Stars />
              </div>
              <p className="mx-4 text-sm italic pt-[120px]">
                &quot;Can&apos;t believe a student of our college has made such
                good video. Some people are really talendted in our
                college.&quot;
              </p>

              <div className="pt-4 mx-4">Bodh Raj Mehta</div>
              <div className="mx-4">Vice-Chancellor, JIIT Noida</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
