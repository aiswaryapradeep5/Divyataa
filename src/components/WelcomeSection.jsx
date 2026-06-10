import { motion } from 'framer-motion';
import schoolImg from '../assets/school.webp';

const WelcomeSection = () => {
  return (
    <section className="relative w-full py-8 md:py-12 lg:py-16 px-5 md:px-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24 items-start relative z-10">
        <div className="w-full lg:w-[55%] space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1a1a] leading-[1.3] font-bold">
              Education designed around the child.
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              <p>
                At Divyataa, we start from a simple conviction: children are not empty vessels to be filled. They are whole human beings, already driven to learn, already curious, already capable, if given the right environment and the right guides.
              </p>
              <p>
                Our prepared classrooms, trained Montessori educators, and mixed-age learning communities create the conditions for something rare: a child who genuinely loves coming to school.
              </p>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50/80 backdrop-blur-md p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 max-w-2xl shadow-sm"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 mb-8 leading-tight font-bold">
              Where children find their own way.
            </h2>
            <p className="text-sm md:text-base text-black leading-relaxed font-light">
              We practice the Montessori Method in its purest form, not as a marketing label, but as a complete way of understanding how children grow, think, and learn. No rote learning. No rank-based assessment. No bells telling a child to stop thinking. Just deep, joyful, self-directed work, every single day.
            </p>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] flex justify-center"
        >
          <img 
            src={schoolImg} 
            alt="Divyataa School Campus" 
            className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover rounded-[30px] md:rounded-[40px] shadow-xl"
          />
        </motion.div>
      </div>

    </section>

  );
};

export default WelcomeSection;
