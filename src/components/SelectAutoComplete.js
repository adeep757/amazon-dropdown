import React from "react";
import Select from "react-select";

const SelectAutoComplete = props => {
  const {
    handleChange,
    options,
    value,
    placeholder,
    // indicatorClass,
    // controlStyles,
    // optionStyles,
    // singleValueStyles,
    multiple
  } = props;

  //   const DropdownIndicator = ({ innerProps }) => (
  //     <div {...innerProps}>
  //       <i className={indicatorClass} />
  //     </div>
  //   );
  //   const IndicatorSeparator = () => null;

  return (
    <select
      value={value}
      onChange={handleChange}
      options={options}
      multiple
      placeholder={placeholder}
      //   styles={{
      //     control: base => ({ ...base, ...controlStyles, borderRadius: 0 }),
      //     option: base => ({ ...base, ...optionStyles }),
      //     singleValue: base => ({ ...base, ...singleValueStyles })
      //   }}
      //   components={{ DropdownIndicator, IndicatorSeparator }}
    />
  );
};

// SelectAutoComplete.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   options: PropTypes.array.isRequired,
//   value: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   indicatorClass: PropTypes.string,
//   controlStyles: PropTypes.object,
//   optionStyles: PropTypes.object,
//   singleValueStyles: PropTypes.object,
//   multiple: PropTypes.bool
// };

// SelectAutoComplete.defaultProps = {
//   indicatorClass: "fas fa-sort fa-xs dropdown-indicator"
// };

export default SelectAutoComplete;
