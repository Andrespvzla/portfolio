import PropTypes from 'prop-types';

export const Card = (props) => {
  return (
    <div className="relative pl-12 pb-12 last:pb-0 before:content-[''] before:w-[1px] before:h-[100%] before:bg-indigo-500 before:absolute before:left-1 before:top-0">
      <props.icon className="timeline__icon" />
      <span className="text-gray-500">{props.year}</span>
      <h3 className="text-xl my-2 mx-0 font-bold text-indigo-500">
        {props.title}
      </h3>
      <p className="text-gray-500 text-justify">{props.desc}</p>
    </div>
  );
};

Card.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
