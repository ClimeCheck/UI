function Select({options, value, placeholder, onChange, name, id, required, className}) {
  return (
    
      <select
        name={name}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        className={className}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {options.map(({ label, value }, key) => {
          return (
            <option key={key} value={value}>
              {label}
            </option>
          );
        })}
      </select>
  );
}

export default Select;
