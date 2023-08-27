import React, { Fragment, useState, useRef, useEffect} from 'react'
import { Timeline, TimelineBackground, Illustration} from './TimelineElements.js'
import AcademicCap from '../../images/AcademicCap.svg'
import University from '../../images/uni.svg'
import Stars from '../../images/stars.svg'
import Line from './Line.js'
import work from '../../images/work.svg'
import { motion } from 'framer-motion';
import Achievement from './Achievement.js'
import {useInView} from 'react-intersection-observer';
import { achievementOne, achievementTwo, achievementThree } from './AchievementData.js'
const TimelineSection = () => {

    
    const { ref: reference, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
        });
        console.log('in View => ',inView)
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const componentData = [
        { id: 1, delay: 0 },
        { id: 2, delay: 3 },
        { id: 3, delay: 6 },

      ];

      useEffect(() => {
        const animationTimeout = setTimeout(() => {
          if (currentIndex < componentData.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }, componentData[currentIndex].delay * 1000);
    
        return () => clearTimeout(animationTimeout);
      }, [currentIndex]);

    const cumulativeDelay = 0.5
    return (
      <TimelineBackground id = {'experience'}>
          <Timeline ref={reference}>
              {componentData.map(({ id, delay }) => (
          <motion.div
              key={id}
              initial={{ display: 'none' }}
              animate={{ display: inView ? 'block' : 'none'}}
              transition={{ duration: 0.5, delay: delay * cumulativeDelay 
              }}
          >
          <Line/>
          { id === 1 ? <Achievement  {...achievementOne} /> : null}
          { id === 2 ? <Achievement {...achievementTwo}/> : null}
          { id === 3 ? <Achievement {...achievementThree}/> : null}
          </motion.div>
          ))}
          </Timeline>
        </TimelineBackground>
)}
    

export default TimelineSection
