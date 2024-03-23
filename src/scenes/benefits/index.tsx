import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import HText from '@/shared/HText';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> =[
  {
    icon: <HomeModernIcon className='h-6 w-6 '/>,
    title: "State of the art Facilities",
    description: "It is a world class Gym with world class Trainers",
  },
  {
    icon: <UserGroupIcon className='h-6 w-6 '/>,
    title: "Online Training Sessions",
    description: "Customers can book an online session with the gym trainer",
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6 '/>,
    title: "Yoga and Much More",
    description: "other Than weight lifting we offer a variety of other features",
  },
];

const container ={
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
}

const Benfits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits'
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
          {/* Title */}
            <motion.div className='md:my-5 md:w-3/5 '
              initial="hidden" 
              whileInView="visible" 
              viewport={{once:true, amount: 0.5}} 
              transition={{duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
              }}
          
            >
              <HText>MORE THAN JUST GYM</HText>
              <p className='my-5 text-sm'>
                  We provide world class fitness equipment, trainers and classes to
                  get you to your ultimate fitness goals with ease. We provide true
                  care into each and every member.
              </p>
            </motion.div>
            <motion.div className='md:flex items-center justify-between gap-8mt-5'
                initial='hidden'
                whileInView="visible"
                variants={container}
                viewport={{once: true, amount: 0.5}}
            >

              {/* Card 1 */}
              {benefits.map((benefit: BenefitType) => (
                <Benefit key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}

            </motion.div>

            {/* graphics and description */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
              {/* graphics */}  
              <img src={BenefitsPageGraphic} alt="" className='mx-auto w-[300px]'/>

                {/* description */}
              <div>
                {/* title */}
                <div className='relative'>
                  <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                    <motion.div
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{once:true, amount: 0.5}} 
                      transition={{duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 }
                      }}
                
                    >
                      <HText>Millions of Happy Members Getting{" "}
                          <span className='text-primary-500'>FIT</span>
                      </HText>
                    </motion.div>
                  </div>

                </div>
                {/* description */}
                <motion.div
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                
                >
                  <p className='my-5'>
                  Choose from a range of flexible membership options designed to fit your lifestyle and budget. Whether you prefer a month-to-month plan, a discounted annual membership, or a customized package with additional perks, we have a membership option that's right for you.

                  </p>
                  <p>Experience the energy and camaraderie of our dynamic group fitness classes. Led by passionate instructors, our diverse class offerings cater to a variety of interests and fitness levels. From high-intensity interval training (HIIT) and yoga to spin and dance-based workouts, there's a class to ignite your enthusiasm and keep you motivated.</p>


                </motion.div>

                {/* Button */}
                <div className='relative mt-16'>
                  <button className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </button>
                </div>
              </div>
            </div>
        </motion.div>

    </section>
  )
}

export default Benfits