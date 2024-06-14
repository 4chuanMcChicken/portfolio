import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, title, icon } = data;
  const skillBarRef = useRef(null);

  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  useEffect(() => {
    const skillBarElement = skillBarRef.current;
    const handleScroll = () => {
      const rect = skillBarElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight + 100;
      if (isVisible) {
        skillBarElement.classList.add('fade-in');
      } else {
        skillBarElement.classList.remove('fade-in');
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={skillBarRef} className="skillbar">
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div>
        {icon && <img className="skill-bar-icon" alt={titleStyle} src={icon} />}
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
